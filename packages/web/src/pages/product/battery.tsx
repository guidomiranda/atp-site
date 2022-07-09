import React from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../../layout';
import Header from '../../components/product/Header';
import Product from '../../components/product/battery/Product';

const HeaderProductFooter = () => {
	return (
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
	);
};

const Products = () => {
	const { pathname } = useRouter();
	const category = pathname.split('/')[pathname.split('/').length - 1];

	return (
		<Layout>
			<Header
				bg='banner_productos_route_fondo.jpg'
				logo='/banner_productos_route_logo.png'
				product='/banner_productos_route_img.png'
				children={<HeaderProductFooter />}
				category={category}
			/>

			<Box bgImage="url('/route_bg_iso.jpg')">
				<Grid placeItems='center' maxW='1220px' w='90%' m='0 auto' py='72px'>
					<Image
						src='/route_img_iso.png'
						alt=''
						w={['100%', '600px']}
						objectFit='cover'
						verticalAlign='top'
					/>
				</Grid>
			</Box>

			<Box maxW='1220px' m='0 auto' w='90%' py='72px'>
				<Grid
					gridTemplateColumns={[
						'1fr',
						'repeat(2,1fr)',
						'repeat(3,1fr)',
						'repeat(4,1fr)',
					]}
					gap='32px 56px'
				>
					<Product />
					<Product />
					<Product />
					<Product />
				</Grid>
			</Box>
		</Layout>
	);
};

export default Products;
