import { useThemedStyles } from '../../hooks/useThemedStyles';
import { StyleSheet } from 'react-native';
type AccordionStyle = {
	accordion: object;
};

export const useAccordionStyles = () =>
	useThemedStyles(
		(colors): StyleSheet.NamedStyles<AccordionStyle> => ({
			accordion: {
				margin: 0,
				justifyContent: 'center',
				alignItems: 'flex-start',
				paddingVertical: 0,
			},
		})
	);
