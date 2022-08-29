import React from 'react';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import {
	Box,
	Button,
	Grid,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	useDisclosure,
} from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

import AdminLayout from '../../../layout/admin';
import Text from '../../../components/admin/Text';
import axios from '../../../config/axios';
import { deleteClient } from '../../../utils';

interface ClientsProps {
	client: any;
}

function usePosts() {
	return useQuery(['posts'], async () => {
		const data = await axios({
			method: 'GET',
			url: '/client',
		});
		return data.data.clients;
	});
}

const Header: React.FC = () => {
	return (
		<Grid
			gridTemplateColumns={{
				base: '50px 300px 100px 100px 100px',
				xl: '50px 1fr 100px 100px 100px',
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
			>
				Título
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

const Clients: React.FC<ClientsProps> = ({ client }) => {
	const router = useRouter();
	const { isOpen, onClose, onOpen } = useDisclosure();

	const handleDeleteClient = async () => {
		const response = await deleteClient(client.id);

		if (response.success) {
			toast.success('Eliminado correctamente!');
			return router.reload();
		} else {
			toast.error('Hubo un problema al eliminar');
			return router.reload();
		}
	};

	return (
		<Grid
			gridTemplateColumns={{
				base: '50px 300px 100px 100px 100px',
				xl: '50px 1fr 100px 100px 100px',
			}}
			p='10px 30px'
			borderBottom='1px solid #DCDFE5'
			gap='0 32px'
			alignItems='center'
		>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>¿Desea borrar la información?</ModalHeader>

					<ModalFooter>
						<Button rounded='3px' colorScheme='gray' mr={3} onClick={onClose}>
							Cerrar
						</Button>
						<Button
							rounded='3px'
							bgColor='gray.500'
							color='#fff'
							_hover={{ bgColor: 'gray.500' }}
							onClick={handleDeleteClient}
						>
							Eliminar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<Box color='#3B4A67' fontSize='14px' textAlign='center'>
				{client.order}
			</Box>
			<Box
				color='#3B4A67'
				fontSize='14px'
				whiteSpace='nowrap'
				overflow='hidden'
				textOverflow='ellipsis'
				cursor='pointer'
				onClick={() => router.push(`/admin/clientes/${client.id}`)}
			>
				{client.title}
			</Box>
			<Box color='#3B4A67' fontSize='14px' textTransform='uppercase'>
				{client.status ? 'activo' : 'inactivo'}
			</Box>
			<Box color='#3B4A67' fontSize='14px'>
				{dayjs(client.created_at).format('DD/MM/YY')}
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
					onClick={() => router.push(`/admin/clientes/${client.id}`)}
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

const ClientesAdmin = () => {
	const router = useRouter();
	const { data, isFetching } = usePosts();

	return (
		<AdminLayout
			title='Clientes'
			footer={
				<Box>
					<Button
						ml='10px'
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#FFF'
						color='#3B4A67'
						border='1px solid #3B4A67'
						fontWeight='medium'
						onClick={() => router.push('/admin/clientes/create')}
					>
						Crear cliente
					</Button>
				</Box>
			}
		>
			<Box>
				<Header />
				{isFetching ? (
					<Grid placeItems='center' h='200px'>
						<Text>Cargando..</Text>
					</Grid>
				) : (
					data?.map(client => <Clients key={client.id} client={client} />)
				)}
			</Box>
		</AdminLayout>
	);
};

export default ClientesAdmin;
