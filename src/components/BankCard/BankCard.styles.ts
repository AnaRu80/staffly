import { useThemedStyles } from '../../hooks/useThemedStyles';
import { Dimensions, StyleSheet } from 'react-native';
type BankCardStyle = {
	card: object;
	containerList: object;
	cardContainer: object;
};

const screenWidth = Dimensions.get('window').width;
const gap = 16;
const cardWidth = (screenWidth - 16 - gap * 2) / 2;

export const useBankCardStyles = () =>
	useThemedStyles(
		(colors): StyleSheet.NamedStyles<BankCardStyle> => ({
			card: {
				shadowOpacity: 0,
				borderColor: colors.primary,
				borderWidth: 1,
				backgroundColor: 'transparent',
			},
			cardContainer: {
				width: cardWidth,
				aspectRatio: 1,
				marginBottom: gap,
				alignItems: 'center',
				justifyContent: 'center',
			},
			containerList: {
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
			},
		})
	);
