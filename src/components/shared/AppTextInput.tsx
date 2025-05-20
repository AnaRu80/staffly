import React from 'react';
import { KeyboardTypeOptions, View, ViewStyle } from 'react-native';
import { TextInput, TextInputProps, useTheme } from 'react-native-paper';
import { Text } from "../../components"

interface AppTextInputProps extends Omit<TextInputProps, 'keyboardType'> {
  keyboardType?: KeyboardTypeOptions;
  errorMessage?: string;
  containerStyle?: ViewStyle;

}

export function AppTextInput({
  errorMessage,
  containerStyle,
  style,
  ...props
}: AppTextInputProps) {
  const { colors } = useTheme()
  return (
    <View style={containerStyle}>
      <TextInput
        mode="outlined"
        {...props}
        style={[
          {
            backgroundColor: 'transparent',
          },
          style,
        ]}
        theme={{
          roundness: 12,
        }}
      />
      {
        errorMessage ? (
          <Text variant='caption' style={{ color: colors.error }}>{errorMessage}</Text>
        ) : null
      }
    </View>
  );
}

