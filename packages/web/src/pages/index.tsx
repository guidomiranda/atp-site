import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Layout from '../layout';
import Banner from '../components/Banner';
import Product from '../components/home/Product';
import Slides from '../components/home/Slide';

const Home: React.FC = () => {
	return (
		<Layout>
			{/* Banner */}
			<Banner />

			{/* Product */}
			<Box
				py='64px'
				bgImage='linear-gradient(to right, rgb(13, 21, 37), rgb(2, 2, 4))'
				// overflow='hidden'
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
					<Product />
					<Product />
					<Product />
				</Box>
			</Box>

			{/* Slides */}
			<Slides />
		</Layout>
	);
};

export default Home;
