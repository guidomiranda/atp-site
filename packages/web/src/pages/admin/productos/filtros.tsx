import React, { useState } from 'react';
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

// import HeaderLayout from '../../../components/client/Header';
import Layout from '../../../layout/admin';
import { getLubricantes } from '../../../utils/lubricants';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import dayjs from 'dayjs';
import { getProductsByLine } from '../../../utils';
import { useRouter } from 'next/router';

interface ProductProps {
	product: any;
}

interface FiltroAdminProps {
	filtros: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const filtros = await getProductsByLine('liviana');

	return {
		props: {
			filtros: filtros.filters,
		},
	};
};

const Header: React.FC = () => {
	return (
		<Grid
			gridTemplateColumns={{
				base: '50px 100px 200px 100px 100px 100px',
				xl: '50px 100px 1fr 100px 100px 100px',
			}}
			p='10px 30px'
			bgColor='#F9FAFB'
			borderY='1px solid #DCDFE5'
			gap='0 32px'
			alignItems='center'
		>
			<Box
				color='#3B4A67'
				fontWeight='bold'
				textTransform='uppercase'
				fontSize='14px'
			>
				Orden
			</Box>
			<Box
				color='#3B4A67'
				fontWeight='bold'
				textTransform='uppercase'
				fontSize='14px'
				textAlign='center'
			>
				Imagen
			</Box>
			<Box
				color='#3B4A67'
				fontWeight='bold'
				textTransform='uppercase'
				fontSize='14px'
			>
				Nombre
			</Box>
			<Box
				color='#3B4A67'
				fontWeight='bold'
				textTransform='uppercase'
				fontSize='14px'
			>
				Estado
			</Box>
			<Box
				color='#3B4A67'
				fontWeight='bold'
				textTransform='uppercase'
				fontSize='14px'
			>
				Creado
			</Box>
			<Box></Box>
		</Grid>
	);
};

const Product: React.FC<ProductProps> = ({ product }) => {
	return (
		<Grid
			gridTemplateColumns={{
				base: '50px 100px 200px 100px 100px 100px',
				xl: '50px 100px 1fr 100px 100px 100px',
			}}
			p='10px 30px'
			borderBottom='1px solid #DCDFE5'
			gap='0 32px'
			alignItems='center'
			cursor='pointer'
		>
			<Box color='#3B4A67' fontSize='14px' textAlign='center'>
				{product.order}
			</Box>
			<Grid
				color='#3B4A67'
				fontSize='14px'
				position='relative'
				placeItems='center'
			>
				<Image
					src={product.image}
					alt=''
					w='45px'
					h='45px'
					objectFit='cover'
					rounded='full'
					objectPosition='center'
				/>
			</Grid>
			<Box
				color='#3B4A67'
				fontSize='14px'
				whiteSpace='nowrap'
				overflow='hidden'
				textOverflow='ellipsis'
			>
				{product.name}
			</Box>
			<Box color='#3B4A67' fontSize='14px' textTransform='uppercase'>
				{product.status ? 'activo' : 'inactivo'}
			</Box>
			<Box color='#3B4A67' fontSize='14px'>
				{dayjs(product.created_at).format('MMMM, DD YYYY')}
			</Box>
			<Grid
				gridTemplateColumns='repeat(2, 1fr)'
				color='#3B4A67'
				fontSize='14px'
				gap='0 6px'
			>
				<Button
					w='42px'
					h='42px'
					rounded='sm'
					bgColor='#E5E7EB'
					color='#8C95A6'
					minW='initial'
					p='0'
					display='flex'
					alignItems='center'
					justifyContent='center'
					fontSize='24px'
					_hover={{ bgColor: '#E5E7EB' }}
					_focus={{ shadow: 'none' }}
				>
					<FiEdit />
				</Button>
				<Button
					w='42px'
					h='42px'
					rounded='sm'
					bgColor='#8C95A6'
					color='#E5E7EB'
					minW='initial'
					p='0'
					display='flex'
					fontSize='18px'
					alignItems='center'
					justifyContent='center'
					_hover={{ bgColor: '#8C95A6' }}
					_focus={{ shadow: 'none' }}
				>
					<FaTrash />
				</Button>
			</Grid>
		</Grid>
	);
};

const FiltrosAdmin: React.FC<FiltroAdminProps> = ({ filtros }) => {
	const router = useRouter();

	const filtrosAire = filtros?.filter(
		(product: any) => product.type === 'aire'
	);

	const filtrosAceite = filtros?.filter(
		(product: any) => product.type === 'aceite'
	);

	const filtrosCombustible = filtros?.filter(
		(product: any) => product.type === 'combustible'
	);

	return (
		<Layout
			title='Filtros'
			footer={
				<Flex>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						color='#3B4A67'
						fontWeight='medium'
						onClick={() => router.push('/admin/productos')}
					>
						Ver categorías
					</Button>
					<Button
						ml='10px'
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#FFF'
						color='#3B4A67'
						border='1px solid #3B4A67'
						fontWeight='medium'
					>
						Crear producto
					</Button>
				</Flex>
			}
		>
			<Box mb='72px'>
				<Box as='article'>
					<Flex alignItems='center' w='full' h='50px' bgColor='#E5E7EB'>
						<Text
							pl='20px'
							textTransform='uppercase'
							h='full'
							lineHeight='50px'
						>
							Filtros de aire
						</Text>
					</Flex>
					<Header />
					<Box>
						{filtrosAire?.map(item => (
							<Product key={item.id} product={item} />
						))}
					</Box>
				</Box>

				<Box as='article'>
					<Flex alignItems='center' w='full' h='50px' bgColor='#E5E7EB'>
						<Text
							pl='20px'
							textTransform='uppercase'
							h='full'
							lineHeight='50px'
						>
							Filtros de aceite
						</Text>
					</Flex>
					<Header />
					<Box>
						{filtrosAceite?.map(item => (
							<Product key={item.id} product={item} />
						))}
					</Box>
				</Box>

				<Box as='article'>
					<Flex alignItems='center' w='full' h='50px' bgColor='#E5E7EB'>
						<Text
							pl='20px'
							textTransform='uppercase'
							h='full'
							lineHeight='50px'
						>
							Filtros de combustible
						</Text>
					</Flex>
					<Header />
					<Box>
						{filtrosCombustible?.map(item => (
							<Product key={item.id} product={item} />
						))}
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default FiltrosAdmin;
