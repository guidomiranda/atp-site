import React, { useEffect, useState } from 'react';
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

import AdminLayout from '../../../../layout/admin';
import Text from '../../../../components/admin/Text';
import axios from '../../../../config/axios';
import { deleteVoucher } from '../../../../utils/vouchers';
import { log } from 'console';
import { paginate } from '../../../../utils/paginate';
import Pagination from '../../../../components/Pagination';

interface ClientsProps {
	client: any;
}

const Header: React.FC = () => {
	return (
		<Grid
			gridTemplateColumns={{
			 	base: '100px 100px 100px 100px 100px 100px 100px 100px 100px',
			 	xl: '60px 0.5fr 100px 0.2fr 100px 100px  100px 100px 100px',
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
				codigo
			</Box>
			<Box
				color='#3B4A67'
				fontWeight='bold'
				textTransform='uppercase'
				fontSize='14px'
			>
				producto
			</Box>	
			<Box
				color='#3B4A67'
				fontWeight='bold'
				textTransform='uppercase'
				fontSize='14px'
				textAlign={'center'}
			>
				cantidad
			</Box>	
			<Box
				color='#3B4A67'
				fontWeight='bold'
				textTransform='uppercase'
				fontSize='14px'
			>
				raider
			</Box>							
			<Box
				color='#3B4A67'
				fontWeight='bold'
				textTransform='uppercase'
				fontSize='14px'
			>
				canjeado
			</Box>
			<Box
				color='#3B4A67'
				fontWeight='bold'
				textTransform='uppercase'
				fontSize='14px'
			>
				fecha canje
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
		const response = await deleteVoucher(client.id);

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
				base: '100px 100px 100px 100px 100px 100px 100px 100px 100px',
				xl: '60px 0.5fr 100px 0.2fr 100px 100px 100px 100px 100px',
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
			
			{/* Campos */}

			{/* codigo */}
			<Box color='#3B4A67' fontSize='14px' textAlign={'center'}>
				{client.codigo}
			</Box>

			{/* producto */}
			<Box
				color='#3B4A67'
				fontSize='14px'
				whiteSpace='nowrap'
				overflow='hidden'
				textOverflow='ellipsis'
				cursor='pointer'
				onClick={() => router.push(`/admin/vouchers/${client.id}`)}
			>
				{client.promocionProducto.nombre}
			</Box>

			{/* cantidad */}
			<Box color='#3B4A67' fontSize='14px' textTransform='uppercase' textAlign={'center'}>
				{client.cantidad}
			</Box>

			{/* usuario */}
			<Box
				color='#3B4A67'
				fontSize='14px'
				whiteSpace='nowrap'
				overflow='hidden'
				textOverflow='ellipsis'
				cursor='pointer'
				onClick={() => router.push(`/admin/vouchers/${client.id}`)}
			>
				{client.usuario.nombre}
			</Box>

			{/* canjeado */}
			<Box color='#3B4A67' fontSize='14px' textTransform='uppercase'>
				{client.canjeado ? 'true' : 'false'}
			</Box>

			{/* canjeado fecha */}
			<Box color='#3B4A67' fontSize='14px' textTransform='uppercase'>
				{client.canjeadoFecha}
			</Box>

			{/* creado */}
			<Box color='#3B4A67' fontSize='14px'>
				{dayjs(client.created_at).format('DD/MM/YY')}
			</Box>

			
			<Grid
				gridTemplateColumns='repeat(2, 1fr)'
				color='#3B4A67'
				fontSize='7px'
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
					onClick={() => router.push(`/admin/promociones/vouchers/${client.id}`)}
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
	const [data, setData] = useState([]);
	const pageSize = 10;
	const [currentPage, setCurrentPage] = useState(1);
	const [isFetching, setIsFetching] = useState(true);
	
	const getData = async () => {
	  const resp = await axios({
		method: 'GET',
		url: '/vouchers',
	  });
	  setIsFetching(false);
	  setData(resp.data.data);
	};
  
	useEffect(() => {
	  getData();
	}, []);
  
	const handlePageChange = (page) => {
	  setCurrentPage(page);
	};
  
	const paginateData = paginate(data, currentPage, pageSize);

	return (
		<AdminLayout
			title='Vouchers'
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
						onClick={() => router.push('/promociones')}
					>
						Crear voucher
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
					paginateData?.map(client => <Clients key={client.id} client={client} />)
				)}
			</Box>
			<Pagination
				items={data.length}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</AdminLayout>
	);
};

export default ClientesAdmin;
