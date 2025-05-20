import React from 'react';
import { Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Text, Dropdown, DateRangePicker, Layout, Button } from '../../components';
import { useRequests } from '../../context/RequestsContext';
import { FormValues, NewRequest } from '../../types/Request';

export function RequestScreen() {
  const { requests, addRequest } = useRequests();

  const { control, handleSubmit, reset, formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      type: '',
      dateRange: { startDate: undefined, endDate: undefined },
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await addRequest(data as NewRequest);
      Alert.alert('Success', 'Your request has been submitted'); reset()
    } catch (e) {
      console.error('Error creating the request:', e);
    }
  };

  return (
    <Layout>
      <Text variant='title'>
        Time Off
      </Text>

      <Controller
        name="type"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Dropdown
            label="Type"
            value={value}
            onChange={onChange}
            options={['Vacation', 'Sick Leave', 'Remote Work', "Personal", "Unpaid"]}
          />
        )}
      />

      <Controller
        name="dateRange"
        control={control}
        rules={{
          validate: value =>
            value.startDate && value.endDate ? true : 'Select a valid date range',
        }}
        render={({ field: { value, onChange } }) => (
          <DateRangePicker value={value} onChange={onChange} />
        )}
      />

      <Button mode="contained" style={{ marginTop: 16 }} onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
        accessibilityLabel="Submit Request"
        testID="submit-button"
      >Submit</Button>
    </Layout >
  );
}