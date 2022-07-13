import React from 'react';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import User from './User';
import Link from './Link';
import {
	HiOutlineClipboardCheck,
	HiOutlineDocumentText,
	HiOutlineHome,
	HiOutlinePhotograph,
	HiOutlineShoppingCart,
	HiOutlineUserGroup,
} from 'react-icons/hi';

const NavbarAdmin: React.FC = () => {
	const router = useRouter();

	return (
		<Box
			width='280px'
			bgColor='#F4F5F7'
			h='100vh'
			position='sticky'
			top='0'
			left='0'
		>
			{/* Logo */}
			<Flex
				alignItems='center'
				justifyContent='center'
				h='70px'
				bgColor='#DCDFE5'
				cursor='pointer'
				onClick={() => router.push('/admin')}
			>
				<Box>
					<Image src='/logo-short.png' w='50px' alt='' />
				</Box>
				<Text
					fontWeight='bold'
					ml='6px'
					color='#3B4A67'
					fontSize='22px'
					textTransform='uppercase'
				>
					Admin
				</Text>
			</Flex>

			{/* User info */}
			<Box p='20px'>
				<User />
			</Box>

			{/* Nav Links */}
			<Box p='20px' pt='10px'>
				<Link icon={<HiOutlineHome />} name='Inicio' path='/admin' />
				<Link
					icon={<HiOutlineDocumentText />}
					name='Testimonios'
					path='/admin/testimonios'
				/>
				<Link
					icon={<HiOutlineClipboardCheck />}
					name='Casos de éxito'
					path='/admin/exito'
				/>
				<Link
					icon={<HiOutlineUserGroup />}
					name='Nuestros clientes'
					path='/admin/clientes'
				/>
				<Link
					icon={<HiOutlineShoppingCart />}
					name='Productos'
					path='/admin/productos'
				/>
				<Link
					icon={<HiOutlinePhotograph />}
					name='Banners'
					path='/admin/banners'
				/>
			</Box>

			{/* Categories */}
			<Box></Box>
		</Box>
	);
};

export default NavbarAdmin;
