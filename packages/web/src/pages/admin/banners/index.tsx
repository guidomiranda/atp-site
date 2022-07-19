import React from 'react';
import { Box, Button, Grid, Image } from '@chakra-ui/react';

import AdminLayout from '../../../layout/admin';
import dayjs from 'dayjs';
import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { GetServerSideProps } from 'next';
import { getBanners } from '../../../utils/banners';

interface BannerProps {
	banner: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const banners = await getBanners();
	return { props: { banners: banners.banners } };
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
			>
				Fondo
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

const Banner: React.FC<BannerProps> = ({ banner }) => {
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
				{banner.order}
			</Box>
			<Box color='#3B4A67' fontSize='14px'>
				<Image src={banner.bg} alt='' w='100px' objectFit='contain' />
			</Box>
			<Box color='#3B4A67' fontSize='14px'>
				{banner.title.slice(0, 20)}
				{banner.title.length >= 30 && '..'}
			</Box>
			<Box color='#3B4A67' fontSize='14px' textTransform='uppercase'>
				{banner.status ? 'activo' : 'inactivo'}
			</Box>
			<Box color='#3B4A67' fontSize='14px'>
				{dayjs(banner.created_at).format('MMMM, DD YYYY')}
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

const BannersAdmin = ({ banners }) => {
	return (
		<AdminLayout title='Banners'>
			<Box>
				<Header />
				{banners?.map((banner: any) => (
					<Banner key={banner.id} banner={banner} />
				))}
			</Box>
		</AdminLayout>
	);
};

export default BannersAdmin;
