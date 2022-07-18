import React from 'react';
import dayjs from 'dayjs';
import { Box, Button, Grid } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

import AdminLayout from '../../../layout/admin';
import { getClients } from '../../../utils';

interface ClientsProps {
	client: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const clients = await getClients();
	return {
		props: {
			clients: clients.clients,
		},
	};
};

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
			cursor='pointer'
		>
			<Box color='#3B4A67' fontSize='14px' textAlign='center'>
				{client.order}
			</Box>
			<Box color='#3B4A67' fontSize='14px'>
				{client.title.slice(0, 40)}
				{client.title.length >= 30 && '..'}
			</Box>
			<Box color='#3B4A67' fontSize='14px' textTransform='uppercase'>
				{client.status ? 'activo' : 'inactivo'}
			</Box>
			<Box color='#3B4A67' fontSize='14px'>
				{dayjs(client.created_at).format('MMMM, DD YYYY')}
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

const ClientesAdmin = ({ clients }) => {
	return (
		<AdminLayout title='Clientes'>
			<Box>
				<Header />
				{clients?.map(client => (
					<Clients key={client.id} client={client} />
				))}
			</Box>
		</AdminLayout>
	);
};

export default ClientesAdmin;
