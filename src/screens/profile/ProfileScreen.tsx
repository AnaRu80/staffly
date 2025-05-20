import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { Divider } from 'react-native-paper';
import { useProfileScreenStyles } from './ProfileScreen.styles';
import { useProfile } from '../../context/ProfileContext';

import { Button, TextInput, Text, Layout } from '../../components';


export function ProfileScreen() {
  const styles = useProfileScreenStyles();
  const {
    address,
    emergencyContactName,
    emergencyContactPhone,
    errors,
    handleSubmit,
    setAddress,
    setEmergencyContactName,
    setEmergencyContactPhoneFormatted,
    handleCancel,
    hasChanges
  } = useProfile();

  const editableFields = [
    {
      label: 'Address',
      value: address,
      onChangeText: setAddress,
      testID: 'input-address',
      accessibilityLabel: 'Address',
      errorKey: 'address',
    },
    {
      label: 'Emergency Contact Name',
      value: emergencyContactName,
      onChangeText: setEmergencyContactName,
      testID: 'input-emergency-name',
      accessibilityLabel: 'Emergency Contact Name',
      errorKey: 'emergencyContactName',
    },
    {
      label: 'Emergency Contact Phone',
      value: emergencyContactPhone,
      onChangeText: setEmergencyContactPhoneFormatted,
      keyboardType: 'phone-pad' as KeyboardTypeOptions,
      testID: 'input-phone',
      accessibilityLabel: 'Emergency Contact Phone',
      errorKey: 'emergencyContactPhone',
    },
  ];
  return (

    <Layout scroll>
      <Text variant='title'>Profile</Text>
      <TextInput label="Name" value="Ana Ruiz" disabled style={styles.input} />
      <TextInput label="Birthday" value="1993-04-15" disabled style={styles.input} />
      <Divider style={styles.divider} />

      {editableFields.map((field, index) => (
        <TextInput
          key={index}
          label={field.label}
          value={field.value}
          onChangeText={field.onChangeText}
          keyboardType={field.keyboardType}
          testID={field.testID}
          accessibilityLabel={field.accessibilityLabel}
          containerStyle={styles.input}
          error={!!errors[field.errorKey]}
          errorMessage={errors[field.errorKey]}
        />
      ))}

      {hasChanges && (
        <Button mode="outlined" onPress={handleCancel}
          style={styles.button} >Cancel</Button>
      )}

      <Button
        mode="contained"
        onPress={handleSubmit}

        disabled={!hasChanges}

      >Submit</Button>
    </Layout>


  );
}