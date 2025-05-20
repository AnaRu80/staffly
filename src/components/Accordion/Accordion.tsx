import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { IconButton, List } from 'react-native-paper';
import { useAccordionStyles } from './Accordion.styles';

interface AccordionProps {
  title: string;
  children: ReactNode;
  expanded: boolean;
  onPress: () => void;
}

export function Accordion({ title, children, expanded, onPress }: AccordionProps) {
  const styles = useAccordionStyles();

  return (
    <List.Section >
      <List.Accordion title={title}
        expanded={expanded}
        onPress={onPress}
        titleStyle={{
          fontSize: 18,
          fontWeight: 'bold',
          padding: 0,
          margin: 0
        }}
        right={() => (
          <IconButton
            icon="chevron-down"
            size={20}
            style={{
              marginRight: -32
            }}
          />
        )}
        style={styles.accordion}
        contentStyle={{ paddingLeft: 0, padding: 0 }}
      >
        {children}
      </List.Accordion>
    </List.Section >
  );
}