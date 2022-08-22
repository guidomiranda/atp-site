import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { UserAuth } from '../../hooks/useAuth';
import AdminLayout from '../../layout/admin';

const Settings = () => {
	const { logout } = UserAuth();
	const router = useRouter();

	return (
		<AdminLayout title='Configuración'>
			<Box p='0 40px'>
				<Button
					fontWeight='medium'
					rounded='3px'
					h='50px'
					bgColor='#8C95A6'
					color='#fff'
					px='32px'
					_hover={{ bgColor: '#8C95A6' }}
					onClick={() => {
						logout();
						router.push('/admin/login');
					}}
				>
					Cerrar sesión
				</Button>
			</Box>
		</AdminLayout>
	);
};

export default Settings;
