import React, { useState } from 'react';
import { Menu } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from "../components"

interface DropdownProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}

export function Dropdown({ label, value, onChange, options }: DropdownProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ marginBottom: 16 }}>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <TouchableOpacity
            onPress={() => setVisible(true)}
            accessibilityLabel={label}
            testID={`dropdown-${label.toLowerCase()}`}
            style={styles.inputLikeButton}
          >
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value || 'Select...'}</Text>
          </TouchableOpacity>
        }
      >
        {options.map((option) => (
          <Menu.Item
            key={option}
            onPress={() => {
              onChange(option);
              setVisible(false);
            }}
            title={option}
            testID={`option-${option}`}
          />
        ))}
      </Menu>
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
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 16,
  },
});