import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import DetailItem from '../DetailItem';

interface ProductProps {
	battery: any;
}

const Product: React.FC<ProductProps> = ({ battery }) => {
	return (
		<Box>
			<Box>
				<Image
					src={battery.image}
					alt=''
					width='100%'
					objectFit='cover'
					verticalAlign='top'
				/>
			</Box>
			<Box>
				<Text fontWeight='bold' fontSize='28px'>
					{battery.title}
				</Text>

				<Box mt='10px'>
					{battery.capacity && (
						<DetailItem title='Capacidad:' content={battery.capacity} />
					)}
					{battery.cca10 && (
						<DetailItem title='CCA - 10o C:' content={battery.cca10} />
					)}
					{battery.polarity && (
						<DetailItem title='Polaridad:' content={battery.polarity} />
					)}
					{battery.large && (
						<DetailItem title='Largo:' content={battery.large} />
					)}
					{battery.width && (
						<DetailItem title='Ancho:' content={battery.width} />
					)}
					{battery.height && (
						<DetailItem title='Altura:' content={battery.height} />
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default Product;
