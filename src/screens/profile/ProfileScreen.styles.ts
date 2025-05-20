import { useThemedStyles } from '../../hooks/useThemedStyles';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ProfileScreenStyle {
	input: ViewStyle;
	button: ViewStyle;
	divider: ViewStyle;
	error: TextStyle;
}

export const useProfileScreenStyles = () =>
	useThemedStyles(
		(colors): StyleSheet.NamedStyles<ProfileScreenStyle> => ({
			input: {
				marginBottom: 16,
			},
			button: {
				marginBottom: 8,
			},
			divider: {
				marginBottom: 16,
			},
			error: {
				color: colors.error,
				marginBottom: 8,
				fontSize: 12,
			},
		})
	);
