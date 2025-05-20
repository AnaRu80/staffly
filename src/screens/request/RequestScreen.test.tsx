import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { RequestScreen } from '..';
import { RequestsProvider } from '../../context/RequestsContext';
import { ProfileProvider } from '../../context/ProfileContext';
import { PaperProvider } from 'react-native-paper';
import { theme } from '../../constants/theme';


const renderWithProviders = () =>
  render(
    <ProfileProvider>
      <RequestsProvider>
        <PaperProvider theme={theme}>
          <RequestScreen />
        </PaperProvider>
      </RequestsProvider>
    </ProfileProvider>
  );

describe('RequestScreen', () => {
  it('should disable submit button initially and enable after valid input', async () => {
    const { getByTestId } = renderWithProviders();

    const submitButton = await waitFor(() => getByTestId('submit-button'));
    expect(submitButton).toBeDisabled();
  });

  it('should show success alert after submitting a valid request', async () => {
    const { getByLabelText, getByText, getByTestId } = renderWithProviders();

    fireEvent.press(getByLabelText('Type'));
    await waitFor(() => getByText('Vacation'));
    fireEvent.press(getByText('Vacation'));
    expect(getByTestId('submit-button')).toBeDisabled();
    fireEvent(getByTestId('date-range-input'), 'onChange', {
      startDate: new Date('2025-06-01'),
      endDate: new Date('2025-06-03'),
    });

    await waitFor(() => {
      expect(getByTestId('submit-button')).not.toBeDisabled();
    });
  });
});
