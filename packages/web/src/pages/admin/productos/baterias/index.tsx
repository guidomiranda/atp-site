import React, { useState } from 'react';
import dayjs from 'dayjs';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
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
import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

import Layout from '../../../../layout/admin';
import { deleteBattery, getBatteries } from '../../../../utils';
import toast from 'react-hot-toast';

interface BateriasAdminProps {
	baterias: any;
}

interface ProductProps {
	product: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const baterias = await getBatteries();

	return {
		props: {
			baterias: baterias.products,
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
	const router = useRouter();
	const { isOpen, onClose, onOpen } = useDisclosure();

	const handleDeleteProduct = async () => {
		const response = await deleteBattery(product.id);

		if (response.success) {
			toast.success('Eliminado correctamente!');
			return router.push('/admin/productos/baterias');
		} else {
			toast.error('Hubo un problema al eliminar');
			return router.push('/admin/productos/baterias');
		}
	};

	return (
		<Grid
			gridTemplateColumns={{
				base: '50px 100px 200px 100px 100px 100px',
				xl: '50px 100px 1fr 100px 100px 100px',
			}}
			p='0 30px'
			borderBottom='1px solid #DCDFE5'
			gap='0 32px'
			alignItems='center'
			cursor='pointer'
			transition='all 300ms ease'
			_hover={{ bgColor: '#f2f2f2' }}
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
				{product.order}
			</Box>
			<Grid
				color='#3B4A67'
				fontSize='14px'
				position='relative'
				placeItems='center'
				onClick={() => router.push(`/admin/productos/baterias/${product.id}`)}
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
				cursor='pointer'
				onClick={() => router.push(`/admin/productos/baterias/${product.id}`)}
				lineHeight='66px'
				h='full'
			>
				{product.title}
			</Box>
			<Box color='#3B4A67' fontSize='14px' textTransform='uppercase'>
				{product.status ? 'activo' : 'inactivo'}
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
					onClick={() => router.push(`/admin/productos/baterias/${product.id}`)}
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

const BateriasAdmin: React.FC<BateriasAdminProps> = ({ baterias }) => {
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
						onClick={() => router.push('/admin/productos/baterias/create')}
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
						{baterias?.map(item => (
							<Product key={item.id} product={item} />
						))}
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default BateriasAdmin;
