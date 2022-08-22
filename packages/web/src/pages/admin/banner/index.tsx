import React, { useState } from 'react';
import NextLink from 'next/link';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { Box, Button, Grid, Image, Link } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';

import AdminLayout from '../../../layout/admin';
import Text from '../../../components/admin/Text';
import axios from '../../../config/axios';

interface BannerProps {
	banner: any;
}

function usePosts() {
	return useQuery(['posts'], async () => {
		const data = await axios({
			method: 'GET',
			url: '/banner',
		});

		return data.data.banners;
	});
}

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
	const router = useRouter();

	const [showImageLarge, setShowImageLarge] = useState<boolean>(false);

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
		>
			<Box color='#3B4A67' fontSize='14px' textAlign='center'>
				{banner.order}
			</Box>
			<Grid
				color='#3B4A67'
				fontSize='14px'
				position='relative'
				placeItems='center'
				onMouseEnter={() => setShowImageLarge(true)}
				onMouseLeave={() => setShowImageLarge(false)}
				onClick={() => router.push(`/admin/banner/${banner.id}`)}
			>
				<Box
					display={showImageLarge ? 'block' : 'none'}
					position='absolute'
					bottom='-57px'
					left='50%'
					transform='translateX(-50%)'
					w='100%'
					h='50px'
					margin='0 auto'
					boxShadow='0px 0px 9px 2px rgba(0,0,0,0.3)'
					rounded='sm'
					overflow='hidden'
					zIndex='200'
				>
					<Image src={banner.bg} alt='' h='50px' objectFit='cover' />
				</Box>

				<Image
					cursor='pointer'
					src={banner.bg}
					alt=''
					w='45px'
					h='45px'
					objectFit='cover'
					rounded='full'
					objectPosition='center'
				/>
			</Grid>
			<NextLink href={`/admin/banner/${banner.id}`}>
				<Link
					color='#3B4A67'
					fontSize='14px'
					whiteSpace='nowrap'
					overflow='hidden'
					textOverflow='ellipsis'
					cursor='pointer'
				>
					{banner.title}
				</Link>
			</NextLink>
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
					onClick={() => router.push(`/admin/banner/${banner.id}`)}
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

const BannersAdmin = () => {
	const { data, isFetching } = usePosts();

	return (
		<AdminLayout title='Banners'>
			<Box>
				<Header />
				{isFetching ? (
					<Grid placeItems='center' h='200px'>
						<Text>Cargando..</Text>
					</Grid>
				) : (
					data?.map((banner: any) => <Banner key={banner.id} banner={banner} />)
				)}
			</Box>
		</AdminLayout>
	);
};

export default BannersAdmin;
