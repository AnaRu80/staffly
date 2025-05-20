import React from 'react'
import { Card, Icon, Text } from 'react-native-paper'
import { useBankCardStyles } from './BankCard.styles';

interface BankCardProps {
  icon: string;
  amount: string;
  label: string;

}
export function BankCard(props: BankCardProps) {
  const { icon, amount, label } = props
  const styles = useBankCardStyles()

  return (
    <Card elevation={0} style={styles.card} >
      <Card.Content style={styles.cardContainer}>
        <Icon
          source={icon}

          color={"#FFBC05"}
          size={40}
        />
        <Text variant="bodyLarge"  >{amount} </Text>
        <Text variant="labelMedium">{label} </Text>
      </Card.Content>
    </Card>
  )
}