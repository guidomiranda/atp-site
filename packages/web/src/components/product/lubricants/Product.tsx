import React from 'react';
import { Box, Grid, Image, Text } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import DetailItem from '../DetailItem';

interface ProductProps {
	product: any;
}

const Product: React.FC<ProductProps> = ({ product }) => {
	return (
		<Grid
			gridTemplateColumns={['1fr', '1fr 2fr']}
			gap='32px 64px'
			// alignItems='center'
			mb='32px'
		>
			<Box className='image-product'>
				<LazyLoadImage
					src={product.image} // use normal <img> attributes as props
					width='100%'
					effect='blur'
				/>
			</Box>
			<Box>
				<Text fontWeight='bold' color='#fe5101' fontSize='24px'>
					{product.nombre}
				</Text>

				<Box mt='10px'>
					{product.nombre && (
						<DetailItem title='Nombre' content={product.nombre} />
					)}
					{product.descripcion && (
						<DetailItem title='Descripción' content={product.descripcion[0]} />
					)}
					{product.caracteristicas && (
						<DetailItem
							title='Característica'
							content={product.caracteristicas}
						/>
					)}
					{product.presentacion && (
						<DetailItem title='Presentación' content={product.presentacion} />
					)}
					{product.indicado_para && (
						<DetailItem title='Indicado para' content={product.indicado_para} />
					)}
					{product.especificacion && (
						<DetailItem
							title='Especificación'
							content={product.especificacion}
						/>
					)}
					{product.rec_honda && (
						<DetailItem
							title='Recomendado por honda'
							// content={product.rec_honda}
						/>
					)}
					{product.atiende_excede && (
						<DetailItem
							title='Atiende excede'
							content={product.atiende_excede}
						/>
					)}
					{product.aprobado && (
						<DetailItem title='Aprobado' content={product.aprobado} />
					)}
					{product.rec_exxon_mob && (
						<DetailItem
							title='Recomendado por ExxonMobil para'
							content={product.rec_exxon_mob}
						/>
					)}
				</Box>
			</Box>
		</Grid>
	);
};

export default Product;
