
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../components';

interface RequestFilterProps {
  active: string;
  onChange: (filter: string) => void;
}

export function RequestFilter({ active, onChange }: RequestFilterProps) {
  const options = ['All', 'Vacation', 'Sick Leave', "Personal", "Unpaid"];

  return (
    <View style={styles.container}>
      {options.map((opt) => (
        <Button
          key={opt}
          mode={active === opt ? 'contained' : 'outlined'}
          onPress={() => onChange(opt)}

        >{opt}</Button>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
    justifyContent: 'center'
  },
  button: {
    flexGrow: 1,
  },
});
