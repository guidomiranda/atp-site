import React, { useContext } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
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
	HiOutlineTicket
} from 'react-icons/hi';
import { TbBuildingFactory } from 'react-icons/tb';
import { BiStore } from 'react-icons/bi';

import Text from '../../components/admin/Text';
import { UserContext } from '../../context/UserContext';

const NavbarAdmin: React.FC = () => {
	const router = useRouter();
	const { user } = useContext(UserContext);

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
				<User user={user} />
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
					path='/admin/banner'
				/>
				<Link
					icon={<TbBuildingFactory />}
					name='Vacancias'
					path='/admin/vacancias'
				/>
				<Link 
					icon={<BiStore />} 
					name='Marcas' 
					path='/admin/marcas' 
				/>
				<Link 
					icon={<HiOutlineTicket />} 
					name='Vouchers' 
					path='/admin/promociones/vouchers' 
				/>
				<Link 
					icon={<HiOutlineTicket />} 
					name='Promocion' 
					path='/admin/promociones/promocion' 
				/>
				<Link 
					icon={<HiOutlineTicket />} 
					name='Productos(promo)' 
					path='/admin/promociones/productos' 
				/>
				<Link 
					icon={<HiOutlineTicket />} 
					name='Empresas' 
					path='/admin/promociones/empresas' 
				/>
				<Link 
					icon={<HiOutlineTicket />} 
					name='Usuarios(promo)' 
					path='/admin/promociones/usuarios' 
				/>																								
			</Box>

			{/* Categories */}
			<Box></Box>
		</Box>
	);
};

export default NavbarAdmin;
