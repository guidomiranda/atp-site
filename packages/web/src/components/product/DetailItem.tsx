import { Box, Grid, Text } from '@chakra-ui/react';
import { isArray } from 'util';

interface DetailItemProps {
	title: string;
	content?: string | [];
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
			{typeof content === 'string' && <Text fontSize='12px'>{content}</Text>}
			{typeof content === 'object' && (
				<Box>
					{content.map(item => (
						<Text as='li' fontSize='12px' key={item}>
							{item}
						</Text>
					))}
				</Box>
			)}
		</Grid>
	);
};
export default DetailItem;
