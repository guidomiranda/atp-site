import React from 'react';
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import Layout from '../layout';
import Banner from '../components/Banner';
import Product from '../components/home/Product';
import Slides from '../components/home/Slide';
import { getClients } from '../utils';
import { slides_data, brands, products } from '../data';

interface ClientProps {
	clients: {
		_id?: string;
		title: string;
		description: string[];
		status: boolean;
		order: number;
		createdAt: Date;
	};
}

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await getClients();

	return {
		props: {
			clients: data,
		},
	};
};

const Home: React.FC<ClientProps> = ({ clients }) => {
	return (
		<Layout>
			{/* Banner */}
			<Banner />

			{/* Product */}
			<Box
				py='64px'
				bgImage='linear-gradient(to right, rgb(13, 21, 37), rgb(2, 2, 4))'
			>
				{/* Product Banner */}
				<Box textAlign='center'>
					<Flex position='relative' display='inline-flex'>
						<Heading fontSize='42px' fontWeight='black' color='#fff'>
							Nuestros Productos
						</Heading>
						<Box
							position='absolute'
							width='60px'
							height='16px'
							bgColor='#b41f1b'
							right='0'
							bottom='-18px'
						/>
					</Flex>

					<Text mt='20px' color='#94a3b8' fontSize='20px'>
						Calidad. Tecnología. Prestigio
					</Text>
				</Box>

				{/* Product Main */}
				<Box pt='60px' maxW='1220px' w='90%' m='0 auto' mt='32px'>
					{products.map(item => (
						<Product key={item.id} product={item} />
					))}
				</Box>
			</Box>

			{/* Slides */}
			<Slides slides={slides_data} />

			{/* Brands */}
			<Box py='64px'>
				<Heading
					fontWeight='black'
					fontSize='48px'
					textAlign='center'
					color='#015796'
				>
					Trabajan con nosotros
				</Heading>
				<Text
					color='#9ca3af'
					mt='8px'
					textAlign='center'
					fontSize='22px'
					fontWeight='medium'
				>
					Las marcas que están dia a día con ATP
				</Text>

				<Grid
					maxW='1220px'
					m='0 auto'
					w='90%'
					gridTemplateColumns={{
						base: '1fr',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(3, 1fr)',
						lg: 'repeat(4, 1fr)',
					}}
					gap='20px'
				>
					{brands.map((brand, i) => (
						<Grid key={i} placeItems='center'>
							<Image src={brand.url} alt='' />
						</Grid>
					))}
				</Grid>
			</Box>
		</Layout>
	);
};

export default Home;
