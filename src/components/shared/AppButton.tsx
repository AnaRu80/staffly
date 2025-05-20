import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

interface AppButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function AppButton({
  children,
  onPress,
  disabled = false,
  mode = 'contained',
  icon,
  style,
  labelStyle,
  testID,
  accessibilityLabel,
  ...props
}: AppButtonProps) {
  const { colors } = useTheme();
  const isPrimary = mode === 'contained';

  const button = (
    <Button
      mode={mode}
      icon={icon}
      onPress={onPress}
      disabled={disabled}
      contentStyle={styles.content}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      style={[
        {
          backgroundColor: isPrimary ? colors.secondary : 'transparent',
          borderColor: colors.primary,
          borderWidth: mode === 'outlined' ? 1 : 0,
          borderRadius: 20,
        },
        style,
      ]}
      labelStyle={[
        {
          color: isPrimary ? colors.primary : colors.primary,
        },
        labelStyle,
      ]}
      {...props}
    >
      {children}
    </Button>
  );

  return disabled ? (
    <View style={{ opacity: 0.6 }}>{button}</View>
  ) : (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      {button}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 40,
  },
});