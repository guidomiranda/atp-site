import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import DetailItem from '../DetailItem';

const Product: React.FC = () => {
	return (
		<Box>
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
				<Text fontWeight='bold' fontSize='28px'>
					YTX5L-BS
				</Text>

				<Box mt='10px'>
					<DetailItem title='Capacidad:' content=' 5 AH ' />
					<DetailItem title='Capacidad:' content=' 5 AH ' />
					<DetailItem title='Capacidad:' content=' 5 AH ' />
				</Box>
			</Box>
		</Box>
	);
};

export default Product;
