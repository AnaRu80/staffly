import React, { useState } from 'react';
import { View } from 'react-native';
import { RequestCard, RequestFilter, Text } from '../../components';
import { useRequests } from '../../context/RequestsContext';
import { format } from 'date-fns';

export function RequestList() {
  const { requests } = useRequests();
  const [filter, setFilter] = useState<string>('All');

  const filtered =
    filter === 'All' ? requests : requests.filter(r => r.type === filter);

  return (
    <View>
      <RequestFilter active={filter} onChange={setFilter} />
      {filtered.length == 0 && <Text>You don't have {filter} requests</Text>}
      {filtered.map((r) => (
        <RequestCard
          key={r.id}
          type={r.type}
          status={r.status}
          date={`${format(new Date(r.dateRange.startDate), 'yyyy-MM-dd')} - ${format(new Date(r.dateRange.endDate), 'yyyy-MM-dd')}`}
        />
      ))}
    </View>
  );
}