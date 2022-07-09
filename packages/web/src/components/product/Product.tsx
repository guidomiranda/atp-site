import React from 'react';
import { Box, Grid, Image, Text } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import DetailItem from './DetailItem';

interface ProductProps {
	filter: any;
}

const Product: React.FC<ProductProps> = ({ filter }) => {
	return (
		<Grid
			gridTemplateColumns={['1fr', '1fr 1.3fr']}
			gap='32px 64px'
			alignItems='center'
			mb='32px'
		>
			<Box>
				<LazyLoadImage
					src={filter.image} // use normal <img> attributes as props
					width='100%'
					effect='blur'
				/>
			</Box>
			<Box>
				<Text fontWeight='bold' color='#fe5101' fontSize='24px'>
					ARL2203 VOX
				</Text>

				<Box mt='10px'>
					{filter.height && (
						<DetailItem title='Altura' content={filter.height} />
					)}
					{filter.dia_ext && (
						<DetailItem title='Dia.Ext.' content={filter.dia_ext} />
					)}
					{filter.thread && (
						<DetailItem title='Rosca' content={filter.thread} />
					)}
					{filter.val_anti_ret && (
						<DetailItem
							title='Válvula anti retorno'
							content={filter.val_anti_ret}
						/>
					)}
					{filter.val_ali && (
						<DetailItem title='Válvula alívio' content={filter.val_ali} />
					)}
					{filter.model && (
						<DetailItem title='Modelo Vehículo' content={filter.model} />
					)}
				</Box>
			</Box>
		</Grid>
	);
};

export default Product;
