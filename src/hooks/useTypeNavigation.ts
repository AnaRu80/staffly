import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types/navigation';

export function useTypedNavigation() {
	return useNavigation<BottomTabNavigationProp<BottomTabParamList>>();
}
