import { Grid, Text } from '@chakra-ui/react';

interface DetailItemProps {
	title: string;
	content: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ title, content }) => {
	return (
		<Grid
			gridTemplateColumns='repeat(2, 1fr)'
			borderBottom='1px solid hsl(0, 0%, 80%)'
			pb='5px'
			mb='8px'
		>
			<Text fontSize='12px' fontWeight='bold' color='#333'>
				{title}
			</Text>
			<Text fontSize='12px'>{content}</Text>
		</Grid>
	);
};
export default DetailItem;
