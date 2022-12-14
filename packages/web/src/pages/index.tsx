import React from 'react';
import { Box, Flex, Grid, Heading, Image, Link, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import Layout from '../layout';
import Banner from '../components/Banner';
import Product from '../components/home/Product';
import Slides from '../components/home/Slide';
import { getBanners, getClients } from '../utils';
import { slides_data, brands, products } from '../data';
import { useQuery } from '@tanstack/react-query';
import axios from '../config/axios';

interface HomeProps {
	banners: any;
	clients: {
		_id?: string;
		title: string;
		description: string[];
		status: boolean;
		order: number;
		createdAt: Date;
	};
}

function usePosts() {
	return useQuery(['posts'], async () => {
		const data = await axios({
			method: 'GET',
			url: '/marcas',
		});
		return data.data.data;
	});
}

export const getServerSideProps: GetServerSideProps = async () => {
	const banners = await getBanners();

	return {
		props: {
			banners: banners.banners,
		},
	};
};

const Home: React.FC<HomeProps> = ({ banners }) => {
	const { data: marcas, isFetching } = usePosts();

	return (
		<Layout title='Inicio'>
			{/* Banner */}
			<Banner banners={banners} />

			{/* Product */}
			<Box
				py='64px'
				bgImage='linear-gradient(to right, rgb(13, 21, 37), rgb(2, 2, 4))'
			>
				{/* Product Banner */}
				<Box textAlign='center'>
					<Flex position='relative' display='inline-flex'>
						<Heading
							fontSize={{ base: '32px', lg: '64px' }}
							fontWeight='black'
							color='#fff'
						>
							Nuestros Productos
						</Heading>
						<Box
							position='absolute'
							width='45px'
							height='12px'
							bgColor='#b41f1b'
							left='0'
							top='-6px'
						/>
					</Flex>

					<Text mt='10px' color='#94a3b8' fontSize='20px'>
						Calidad. Tecnología. Prestigio
					</Text>
				</Box>

				{/* Product Main */}
				<Box
					pt={{ base: '10px', lg: '60px' }}
					maxW='1220px'
					w='90%'
					m='0 auto'
					mt='32px'
				>
					{products.map(item => (
						<Product key={item.id} product={item} />
					))}
				</Box>
			</Box>

			{/* Slides */}
			<Slides slides={slides_data} />

			{/* Brands */}
			<Box py='128px'>
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
					mb='32px'
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
					alignItems='center'
					gridTemplateColumns={{
						base: 'repeat(2, 1fr)',
						md: 'repeat(3, 1fr)',
						lg: 'repeat(4, 1fr)',
					}}
					gap={{ base: '32px', lg: '96px' }}
				>
					{marcas?.map((brand, i) => (
						<Grid key={i} placeItems='center'>
							<Link href={brand.link} target='_blank'>
								<Image src={brand.imagen} alt='' />
							</Link>
						</Grid>
					))}
				</Grid>
			</Box>
		</Layout>
	);
};

export default Home;
