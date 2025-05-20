import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function ErrorBox({ message }: { message: string }) {
  return (
    <View
      style={{
        borderWidth: 1.5,
        borderColor: '#B00020',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        backgroundColor: '#FDEDED',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'flex-start',
      }}
    >
      <MaterialCommunityIcons name="alert-circle-outline" size={24} color="#B00020" />
      <Text style={{ color: '#B00020', flex: 1 }}>
        {message}
      </Text>
    </View>
  );
}