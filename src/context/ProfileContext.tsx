import React, { createContext, useContext, useMemo, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';
type ProfileContextType = {
  address: string;
  setAddress: (val: string) => void;
  emergencyContactName: string;
  setEmergencyContactName: (val: string) => void;
  emergencyContactPhone: string;
  setEmergencyContactPhoneFormatted: (val: string) => void;
  handleSubmit: () => void;
  handleCancel: () => void;
  errors: Record<string, string>;
  hasChanges: boolean;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);



export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [initialValues, setInitialValues] = useState({
    address: '123 Main St, Montreal, QC',
    emergencyContactName: 'Jane Doe',
    emergencyContactPhone: '514-123-4567',
  });
  const [address, setAddress] = useState(initialValues.address);
  const [emergencyContactName, setEmergencyContactName] = useState(initialValues.emergencyContactName);
  const [emergencyContactPhone, setEmergencyContactPhone] = useState(initialValues.emergencyContactPhone);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [, setTick] = useState(0);

  const setEmergencyContactPhoneFormatted = (val: string) => {
    const formatted = formatPhoneNumber(val);
    setEmergencyContactPhone(formatted);
  };
  const handleSubmit = () => {
    const newErrors: { [key: string]: string } = {};

    if (!address || address.length < 5) {
      newErrors.address = 'Address must be at least 5 characters';
    }

    if (!emergencyContactName || emergencyContactName.length < 5) {
      newErrors.emergencyContactName = 'Name must be at least 5 characters';
    }

    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!emergencyContactPhone || !phoneRegex.test(emergencyContactPhone)) {
      newErrors.emergencyContactPhone = 'Use format XXX-XXX-XXXX';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      Alert.alert('Fix the errors before submitting');
      return;
    }

    setErrors({});
    setInitialValues({ address, emergencyContactName, emergencyContactPhone });
    Keyboard.dismiss();
    Alert.alert('Profile Updated', 'Your changes have been saved.');
    setTick(t => t + 1);

  };

  const handleCancel = () => {
    setAddress(initialValues.address);
    setEmergencyContactName(initialValues.emergencyContactName);
    setEmergencyContactPhone(initialValues.emergencyContactPhone);
    setErrors({});
  };

  const hasChanges = useMemo(() => {

    return (
      address !== initialValues.address ||
      emergencyContactName !== initialValues.emergencyContactName ||
      emergencyContactPhone !== initialValues.emergencyContactPhone
    );
  }, [address, emergencyContactName, emergencyContactPhone, initialValues]);

  return (
    <ProfileContext.Provider
      value={{
        address,
        setAddress,
        emergencyContactName,
        setEmergencyContactName,
        emergencyContactPhone,
        setEmergencyContactPhoneFormatted,
        handleSubmit,
        handleCancel,
        errors,
        hasChanges,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) throw new Error('useProfile must be used within a ProfileProvider');
  return context;
}