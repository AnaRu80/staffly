import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Header() {
  const { logout } = useAuth()
  return (
    <SafeAreaView edges={['top']} >
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}><Image
          source={require('../assets/yellow-logo.jpeg')}
          style={styles.logo}
        />
          <Text variant="titleLarge" style={{ color: "white", fontWeight: "bold", marginLeft: 8 }} >Staffy</Text>
        </View>

        <TouchableOpacity onPress={logout}>
          <MaterialCommunityIcons name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    height: 56,
    backgroundColor: '#2C2C2C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 6,
  },

});