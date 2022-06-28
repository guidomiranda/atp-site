import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../../layout';
import Header from '../../components/product/Header';

const Products = () => {
	return (
		<Layout>
			<Header
				bg='banner_productos_route_fondo.jpg'
				logo='/banner_productos_route_logo.png'
				product='/banner_productos_route_img.png'
				children={
					<Flex
						flexDir={['column', 'row']}
						alignItems='center'
						justifyContent={['center', 'space-between']}
						h='full'
						maxW='1220px'
						m='0 auto'
						w='90%'
					>
						<Box mb={['5px', '0']}>
							<Heading
								textAlign={['center', 'left']}
								fontWeight='black'
								fontSize={['24px', '32px', '48px']}
								color='#fff'
							>
								Baterías 12 V
							</Heading>
							<Text color='#fff' mt='5px' textAlign={['center', 'left']}>
								VRLA / Sellada
							</Text>
						</Box>
						<Box>
							<Image
								src='/banner_productos_route_logo.png'
								alt=''
								width={['130px', '180px']}
								objectFit='cover'
								verticalAlign='top'
							/>
						</Box>
					</Flex>
				}
			/>
			<Box>Products</Box>
		</Layout>
	);
};

export default Products;
