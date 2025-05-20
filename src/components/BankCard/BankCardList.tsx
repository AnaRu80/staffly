import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { BankCard } from '../../components';
import { bankCardsData } from '../../components/BankCard/bankCardData';
import { useBankCardStyles } from './BankCard.styles';

export function BankCardList() {
  const styles = useBankCardStyles()
  return (
    <View style={styles.containerList}>
      {bankCardsData.map((item) => (
        <View key={item.label} style={styles.cardContainer}>
          <BankCard icon={item.icon} amount={item.amount} label={item.label} />
        </View>
      ))}
    </View>
  )
}

