import React from 'react';
import { View, Image } from 'react-native';
import { Controller } from 'react-hook-form';
import { Text } from 'react-native-paper';
import { useLoginForm } from '../../hooks/useLoginForm';
import { useLoginScreenStyles } from './LoginScreen.styles';
import { ErrorBox, Button, TextInput } from '../../components';

export function LoginScreen() {
  const { control, handleSubmit, errors, isValid } = useLoginForm();
  const styles = useLoginScreenStyles();
  return (

    <View style={styles.container}>
      <Image
        source={require('../../assets/yellow-logo.jpeg')}
        resizeMode="contain"
        style={{
          width: 72,
          height: 72,
          borderRadius: 6,
          alignSelf: 'center',
          marginBottom: 16,
        }}
      />

      {!!errors.email && !!errors.password && (
        <ErrorBox message="The username or password is incorrect. Please modify the fields and then try to log in again." />
      )}
      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Email address"
            value={value}
            onChangeText={onChange}
            error={!!errors.email}
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Password"
            value={value}
            onChangeText={onChange}
            secureTextEntry
            error={!!errors.password}
            style={styles.input}
          />
        )}
      />

      <Button
        mode="contained"
        onPress={handleSubmit}
        disabled={!isValid}
        style={styles.button}
      >Continue</Button>
      <Text style={styles.forgot}>Forgot password</Text>
    </View>
  );
}