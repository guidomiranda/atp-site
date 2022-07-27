import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
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
import dayjs from 'dayjs';

import AdminLayout from '../../../layout/admin';
import { deleteReview, getReviews } from '../../../utils';
import toast from 'react-hot-toast';

interface TestimonialsProps {
	testimonial: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const testimonials = await getReviews();
	return {
		props: {
			testimonials: testimonials.reviews,
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

const Testimonials: React.FC<TestimonialsProps> = ({ testimonial }) => {
	const router = useRouter();
	const { isOpen, onClose, onOpen } = useDisclosure();

	const handleDeleteTestimonial = async () => {
		const response = await deleteReview(testimonial.id);

		if (response.success) {
			toast.success('Eliminado correctamente!');
			return router.push('/admin/testimonios');
		} else {
			toast.error('Hubo un problema al eliminar');
			router.push('/admin/testimonios');
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
					<ModalHeader>¿Desea borrar el testimonio?</ModalHeader>

					<ModalFooter>
						<Button rounded='3px' colorScheme='gray' mr={3} onClick={onClose}>
							Cerrar
						</Button>
						<Button
							rounded='3px'
							bgColor='gray.500'
							color='#fff'
							_hover={{ bgColor: 'gray.500' }}
							onClick={handleDeleteTestimonial}
						>
							Eliminar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<Box color='#3B4A67' fontSize='14px' textAlign='center'>
				{testimonial.order}
			</Box>
			<Box
				color='#3B4A67'
				fontSize='14px'
				whiteSpace='nowrap'
				overflow='hidden'
				textOverflow='ellipsis'
				cursor='pointer'
				onClick={() => router.push(`/admin/testimonios/${testimonial.id}`)}
			>
				{testimonial.author}
			</Box>
			<Box color='#3B4A67' fontSize='14px' textTransform='uppercase'>
				{testimonial.status ? 'activo' : 'inactivo'}
			</Box>
			<Box color='#3B4A67' fontSize='14px'>
				{dayjs(testimonial.created_at).format('MMMM, DD YYYY')}
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
					onClick={() => router.push(`/admin/testimonios/${testimonial.id}`)}
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

const TestimoniosAdmin = ({ testimonials }) => {
	const router = useRouter();

	return (
		<AdminLayout
			title='Testimonios'
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
						onClick={() => router.push('/admin/testimonios/create')}
					>
						Crear testimonio
					</Button>
				</Box>
			}
		>
			<Box>
				<Header />
				{testimonials?.map(testimonial => (
					<Testimonials key={testimonial.id} testimonial={testimonial} />
				))}
			</Box>
		</AdminLayout>
	);
};

export default TestimoniosAdmin;
