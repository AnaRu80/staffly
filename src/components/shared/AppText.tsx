import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';

type AppTextProps = TextProps & {
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
};

export function AppText({ variant = 'body', style, ...rest }: AppTextProps) {
  return <Text style={[styles[variant], style]} {...rest} />;
}

const styles = StyleSheet.create<{
  title: TextStyle;
  subtitle: TextStyle;
  body: TextStyle;
  caption: TextStyle;
}>({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',

  },
  caption: {
    fontSize: 12,
    fontWeight: '400',

  },
});