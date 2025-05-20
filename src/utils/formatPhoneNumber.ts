export const formatPhoneNumber = (text: string) => {
	const cleaned = text.replace(/\D/g, '');
	const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

	if (!match) return text;

	const [, part1, part2, part3] = match;
	if (part3) return `${part1}-${part2}-${part3}`;
	if (part2) return `${part1}-${part2}`;
	if (part1) return `${part1}`;
	return '';
};
