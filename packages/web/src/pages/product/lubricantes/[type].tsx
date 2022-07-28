import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../../../layout';
import Header from '../../../components/product/Header';
import Product from '../../../components/product/lubricants/Product';
import { getLubricantes } from '../../../utils/lubricants';
import FilterHeader from '../../../components/product/lubricants/header';

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
					Livianos | Pesados | Auxiliares | Motos
				</Text>
			</Box>
			<Box>
				<Image
					src=''
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

	const [products, setProducts] = useState<any>(null);

	useEffect(() => {
		(async () => {
			if (!router.query.type) return;
			const products = await getLubricantes(router?.query?.type as string);
			setProducts(products?.products);
		})();
	}, [router]);

	return (
		<Layout>
			<Header
				bg='lubricantes-atp.jpg'
				logo=''
				product=''
				children={<HeaderProductFooter />}
				category='lub'
			/>

			<Box id='#main' maxW='1220px' m='0 auto' w='90%' py='72px'>
				<FilterHeader query={router.query} push={router.push} />

				<Box pt='56px' maxW='1220px' w='90%' m='0 auto'>
					<Grid gridTemplateColumns={['1fr', 'repeat(2,1fr)']} gap='32px'>
						{products?.map(item => (
							<Product key={item.id} product={item} />
						))}
					</Grid>
				</Box>
			</Box>
		</Layout>
	);
};

export default TypeLubricants;
