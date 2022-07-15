import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../../../layout';
import Header from '../../../components/product/Header';
import Product from '../../../components/product/Product';
import { getLubricantes } from '../../../utils/lubricants';

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
					Lubricantes
				</Heading>
				<Text color='#fff' mt='5px' textAlign={['center', 'left']}>
					{/* Aceite | Combustible | Aire */}
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

const TypeLubricants: React.FC = () => {
	const router = useRouter();
	console.log(router.query.type);

	const [filters, setFilters] = useState<any>(null);

	useEffect(() => {
		(async () => {
			if (!router.query.type) return;
			const products = await getLubricantes(router?.query?.type as string);
			console.log(products);
		})();
	}, [router]);

	return (
		<Layout>
			<Header
				bg='bannervox_fondo.jpg'
				logo='/bannervox_logo.png'
				product='/header-product-image.png'
				children={<HeaderProductFooter />}
				// category={category}
			/>

			<Box id='#main' maxW='1220px' m='0 auto' w='90%' py='72px'>
				{/* <FilterHeader query={query} push={push} /> */}

				<Box pt='56px' maxW={['100%', '60%']} m='0 auto'>
					{filters?.map(item => (
						<Product key={item.id} filter={item} />
					))}
				</Box>
			</Box>
		</Layout>
	);
};

export default TypeLubricants;
