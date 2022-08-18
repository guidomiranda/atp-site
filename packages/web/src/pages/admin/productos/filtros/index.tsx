import React, { useState } from 'react';
import {
	Box,
	Button,
	Flex,
	Grid,
	Image,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import dayjs from 'dayjs';

import Layout from '../../../../layout/admin';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { deleteFiltro, getProducts } from '../../../../utils';
import toast from 'react-hot-toast';

interface ProductProps {
	product: any;
}

interface FiltroAdminProps {
	filtros: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const filtros = await getProducts();

	return {
		props: {
			filtros: filtros.data,
		},
	};
};

const Header: React.FC = () => {
	return (
		<Grid
			gridTemplateColumns={{
				base: '50px 70px 200px 100px 100px 100px 100px',
				xl: '50px 70px 1fr 100px 100px 100px 100px',
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
				Tipo
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
	const router = useRouter();

	const { isOpen, onClose, onOpen } = useDisclosure();

	const handleDeleteProduct = async () => {
		const response = await deleteFiltro(product.id);

		if (response.success) {
			toast.success('Eliminado correctamente!');
			return router.push('/admin/productos/filtros');
		} else {
			toast.error('Hubo un problema al eliminar');
			return router.push('/admin/productos/filtros');
		}
	};

	return (
		<Grid
			gridTemplateColumns={{
				base: '50px 70px 200px 100px 100px 100px 100px',
				xl: '50px 70px 1fr 100px 100px 100px 100px',
			}}
			p='0 30px'
			borderBottom='1px solid #DCDFE5'
			gap='0 32px'
			alignItems='center'
			cursor='pointer'
		>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent borderRadius='3px'>
					<ModalHeader>¿Desea eliminar este producto?</ModalHeader>

					<ModalFooter>
						<Button
							borderRadius='3px'
							border='1px solid #d0d0d0'
							bgColor='#fff'
							mr={3}
							onClick={onClose}
						>
							Cerrar
						</Button>
						<Button
							borderRadius='3px'
							bgColor='#8C95A6'
							_hover={{ bgColor: '#8C95A6' }}
							color='#fff'
							onClick={handleDeleteProduct}
						>
							Eliminar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<Box color='#3B4A67' fontSize='14px' textAlign='center'>
				{product.orden}
			</Box>
			<Grid
				color='#3B4A67'
				fontSize='14px'
				position='relative'
				placeItems='center'
			>
				<Image
					src={product.imagen}
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
				lineHeight='66px'
				onClick={() => router.push(`/admin/productos/filtros/${product.id}`)}
			>
				{product.nombre}
			</Box>
			<Box color='#3B4A67' fontSize='12px' textTransform='uppercase'>
				{product.tipo}
			</Box>
			<Box color='#3B4A67' fontSize='14px' textTransform='uppercase'>
				{product.estado ? 'activo' : 'inactivo'}
			</Box>
			<Box color='#3B4A67' fontSize='14px'>
				{dayjs(product.created_at).format('DD/MM/YYYY')}
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
					onClick={() => router.push(`/admin/productos/filtros/${product.id}`)}
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
					onClick={onOpen}
				>
					<FaTrash />
				</Button>
			</Grid>
		</Grid>
	);
};

const FiltrosAdmin: React.FC<FiltroAdminProps> = ({ filtros }) => {
	const router = useRouter();

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
						onClick={() => router.push('/admin/productos/filtros/create')}
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
							Todos los productos de filtro
						</Text>
					</Flex>
					<Header />
					<Box>
						{filtros?.map(item => (
							<Product key={item.id} product={item} />
						))}
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default FiltrosAdmin;
