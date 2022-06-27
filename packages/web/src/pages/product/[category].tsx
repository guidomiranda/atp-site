import React from 'react';
import { Box } from '@chakra-ui/react';

import Layout from '../../layout';
import Header from '../../components/product/Header';

const Products = () => {
	return (
		<Layout>
			<Header
				bg='banner_productos_route_fondo.jpg'
				logo='/banner_productos_route_logo.png'
				product='/banner_productos_route_img.png'
			/>
			<Box>Products</Box>
		</Layout>
	);
};

export default Products;
