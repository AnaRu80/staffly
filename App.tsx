import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './src/constants/theme';
import RootNavigator from './src/navigation/RootNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { RequestsProvider } from './src/context/RequestsContext';
import { registerTranslation } from 'react-native-paper-dates';
import { ProfileProvider } from './src/context/ProfileContext';

registerTranslation('en', {
  save: 'Save',
  selectSingle: 'Select date',
  selectMultiple: 'Select dates',
  selectRange: 'Select period',
  notAccordingToDateFormat: (inputFormat: string) => `Date must be in format: ${inputFormat}`,
  mustBeHigherThan: (date: string) => `Must be later than ${date}`,
  mustBeLowerThan: (date: string) => `Must be earlier than ${date}`,
  mustBeBetween: (startDate: string, endDate: string) => `Must be between ${startDate} - ${endDate}`,
  dateIsDisabled: 'Day is not allowed',
  previous: 'Previous',
  next: 'Next',
  typeInDate: 'Type in date',
  pickDateFromCalendar: 'Pick date from calendar',
  close: 'Close',
  hour: 'Hour',
  minute: 'Minute'
});
export default function App() {
  return (
    <SafeAreaProvider>
      <ProfileProvider>
        <RequestsProvider>
          <PaperProvider theme={theme}>
            <AuthProvider>
              <RootNavigator />
            </AuthProvider>
          </PaperProvider>
        </RequestsProvider>
      </ProfileProvider>
    </SafeAreaProvider>
  );
}