import React, { useState } from 'react';
import { View, Keyboard, StyleSheet } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';
import { TouchableOpacity } from 'react-native';
import { Text } from "../components"

export function DateRangePicker({ value, onChange }: { value: { startDate?: Date; endDate?: Date }, onChange: (v: any) => void }) {
  const [open, setOpen] = useState(false);

  const formattedValue =
    value.startDate && value.endDate
      ? `${value.startDate.toISOString().split('T')[0]} - ${value.endDate.toISOString().split('T')[0]}`
      : 'Select a date';

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
          setOpen(true);
        }}
        testID="date-range-input"
        accessibilityLabel="Start - End"
        style={{
          borderWidth: 1,
          borderRadius: 12,
          padding: 12,
          marginBottom: 16,
        }}
      >
        <Text variant="caption">Date</Text>
        <Text variant='body' >{formattedValue || 'Select...'}</Text>
      </TouchableOpacity>

      <DatePickerModal
        locale="en"
        mode="range"
        visible={open}
        onDismiss={() => {
          setOpen(false);
          Keyboard.dismiss();
        }}
        startDate={value.startDate}
        endDate={value.endDate}
        onConfirm={({ startDate, endDate }) => {
          setOpen(false);
          Keyboard.dismiss();
          onChange({ startDate, endDate });
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputLikeButton: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
  },

});