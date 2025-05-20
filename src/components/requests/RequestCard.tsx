import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

interface RequestCardProps {
  type: 'Vacation' | 'Sick Leave' | "Personal" | "Unpaid";
  date: Date;
  status: 'Approved' | 'Pending' | 'Denied';
}

export function RequestCard({ type, date, status }: RequestCardProps) {
  const statusColor = {
    Approved: '#4CAF50',
    Pending: '#FFC107',
    Denied: '#F44336',
  }[status];

  return (
    <Card elevation={0} style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <View>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.date}>{date.toString()}</Text>
        </View>
        <Text style={[styles.status, { color: statusColor }]}>{status}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 0,
    shadowOpacity: 0,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  type: {
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
});