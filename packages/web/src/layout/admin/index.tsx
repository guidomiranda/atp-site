import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import NavbarAdmin from '../../components/admin/Navbar';

const AdminLayout = ({ children }) => {
	return (
		<Flex>
			<NavbarAdmin />
			<Box>{children}</Box>
		</Flex>
	);
};

export default AdminLayout;
