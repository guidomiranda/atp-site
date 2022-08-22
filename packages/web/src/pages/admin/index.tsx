import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import AdminLayout from '../../layout/admin';
import { UserAuth } from '../../hooks/useAuth';

const Admin = () => {
	const { user } = UserAuth();

	return (
		<AdminLayout title={`Bienvenido ${user?.name}`}>
			<Box></Box>
		</AdminLayout>
	);
};

export default Admin;
