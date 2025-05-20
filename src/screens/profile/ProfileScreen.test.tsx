import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ProfileScreen } from '..';
import { ProfileProvider } from '../../context/ProfileContext';

const renderWithProvider = () =>
  render(
    <ProfileProvider>
      <ProfileScreen />
    </ProfileProvider>
  );

describe('ProfileScreen', () => {
  it('should have the Submit button disabled initially', () => {
    const { getByText } = renderWithProvider();
    const submitButton = getByText('Submit');
    expect(submitButton).toBeDisabled();
  });

  it('should show error on invalid phone format', () => {
    const { getByLabelText, getByText } = renderWithProvider();

    const phoneInput = getByLabelText('Emergency Contact Phone');
    fireEvent.changeText(phoneInput, '123456');

    const submit = getByText('Submit');
    fireEvent.press(submit);

    expect(getByText(/Use format XXX-XXX-XXXX/i)).toBeTruthy();
  });

  it('should show error if Address has less than 5 characters', async () => {
    const { getByTestId, getByText } = renderWithProvider();

    fireEvent.changeText(getByTestId('input-address'), '123');
    fireEvent.press(getByText('Submit'));

    await waitFor(() => {
      expect(getByText('Address must be at least 5 characters')).toBeTruthy();
    });
  });

  it('should show Cancel button when a field is modified and disappear when submitted', () => {
    const { getByTestId, queryByText, getByText } = renderWithProvider();

    expect(queryByText('Cancel')).toBeNull();

    fireEvent.changeText(getByTestId('input-address'), 'Modified address');
    expect(queryByText('Cancel')).toBeTruthy();

    fireEvent.press(getByText('Submit'));
    expect(queryByText('Cancel')).toBeNull();
  });
});