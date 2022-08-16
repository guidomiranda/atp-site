import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../../../../layout';
import Header from '../../../../components/product/Header';
import Product from '../../../../components/product/Product';
import FilterHeader from '../../../../components/product/FilterHeader';
import { getProductsByLine } from '../../../../utils';

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
	const { query, push, pathname } = useRouter();
	const [filters, setFilters] = useState<any>(null);

	const getProductsLine = async () => {
		const data = await getProductsByLine(query?.line as string);
		const dataFiltered = data.data.filter(
			(item: any) => item.tipo === query?.type
		);

		return dataFiltered;
	};

	useEffect(() => {
		(async () => {
			const dataFiltered = await getProductsLine();
			setFilters(dataFiltered);
			console.log(filters);
		})();
	}, [query]);

	return (
		<Layout>
			<Header
				bg='bannervox_fondo.jpg'
				logo='/bannervox_logo.png'
				product='/header-product-image.png'
				children={<HeaderProductFooter />}
			/>

			<Box id='#main' maxW='1220px' m='0 auto' w='90%' py='72px'>
				<FilterHeader pathname={pathname} query={query} push={push} />

				<Box pt='56px' maxW={['100%', '60%']} m='0 auto'>
					{filters.length === 0 ? (
						<Box>
							<Text textAlign='center'>
								No existe producto en esta categoría
							</Text>
						</Box>
					) : (
						filters?.map(item => <Product key={item.id} filter={item} />)
					)}
				</Box>
			</Box>
		</Layout>
	);
};

export default TypeFilter;
