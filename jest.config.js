module.exports = {
	preset: 'jest-expo',
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|react-native-paper|expo|expo-modules-core|@expo/vector-icons)',
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
