import { useTheme, MD3Theme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export function useThemedStyles<T extends StyleSheet.NamedStyles<T>>(
	createStyles: (colors: MD3Theme['colors']) => T
): T {
	const { colors } = useTheme();
	return StyleSheet.create(createStyles(colors));
}
