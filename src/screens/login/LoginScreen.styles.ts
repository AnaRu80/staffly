import { useThemedStyles } from '../../hooks/useThemedStyles';
import { StyleSheet } from 'react-native';

type LoginScreenStyle = {
	container: object;
	input: object;
	button: object;
	forgot: object;
};

export const useLoginScreenStyles = () =>
	useThemedStyles(
		(colors): StyleSheet.NamedStyles<LoginScreenStyle> => ({
			container: {
				padding: 24,
				paddingTop: 80,
			},
			input: {
				marginBottom: 12,
			},
			button: {
				marginTop: 12,
			},
			forgot: {
				marginTop: 16,
				textAlign: 'center',
			},
		})
	);
