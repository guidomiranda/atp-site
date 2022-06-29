import React from 'react';
import { Box, Grid, Image, Text } from '@chakra-ui/react';

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
			<Text fontSize='14px' fontWeight='bold' color='#333'>
				{title}
			</Text>
			<Text fontSize='14px'>{content}</Text>
		</Grid>
	);
};

const Product: React.FC = () => {
	return (
		<Grid
			gridTemplateColumns={['1fr', '1fr 1.2fr']}
			gap='32px 64px'
			alignItems='center'
		>
			<Box>
				<Image
					src='/banner_productos_route_img.png'
					alt=''
					width='100%'
					objectFit='cover'
					verticalAlign='top'
				/>
			</Box>
			<Box>
				<Text fontWeight='bold' color='#fe5101' fontSize='24px'>
					ARL2203 VOX
				</Text>

				<Box mt='10px'>
					<DetailItem title='Modelo Vehículo' content='COROLLA / C90' />
					<DetailItem title='Modelo Vehículo' content='COROLLA / C90' />
				</Box>
			</Box>
		</Grid>
	);
};

export default Product;