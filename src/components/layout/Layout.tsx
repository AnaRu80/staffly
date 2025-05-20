import React, { ReactNode } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useTheme } from 'react-native-paper';

interface LayoutProps {
  children: ReactNode;
  scroll?: boolean;
}

export function Layout({ children, scroll = false }: LayoutProps) {
  const { colors } = useTheme();

  const styles = {
    safe: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: colors.background,
    },
  };

  const ContentView = (
    <View style={styles.content}>
      {children}
    </View>
  );

  const wrappedScroll = (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {ContentView}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

  return (
    <View style={styles.safe}>
      {scroll ? wrappedScroll : ContentView}
    </View>
  );
}