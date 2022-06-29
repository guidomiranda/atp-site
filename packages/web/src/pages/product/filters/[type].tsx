import React from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../../../layout';
import Header from '../../../components/product/Header';
import Product from '../../../components/product/Product';
import FilterHeader from '../../../components/product/FilterHeader';

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
					Filtros
				</Heading>
				<Text color='#fff' mt='5px' textAlign={['center', 'left']}>
					Aceite | Combustible | Aire
				</Text>
			</Box>
			<Box>
				<Image
					src='/bannervox_logo.png'
					alt=''
					width={['130px', '180px']}
					objectFit='cover'
					verticalAlign='top'
				/>
			</Box>
		</Flex>
	);
};

const TypeFilter: React.FC = () => {
	const { query, push } = useRouter();

	return (
		<Layout>
			<Header
				bg='bannervox_fondo.jpg'
				logo='/bannervox_logo.png'
				product='/header-product-image.png'
				children={<HeaderProductFooter />}
				query={query}
			/>

			<Box id='#main' maxW='1220px' m='0 auto' w='90%' py='72px'>
				<FilterHeader query={query} push={push} />

				<Box pt='56px' maxW={['100%', '60%']} m='0 auto'>
					<Product />
				</Box>
			</Box>
		</Layout>
	);
};

export default TypeFilter;
