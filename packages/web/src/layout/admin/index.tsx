import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import NavbarAdmin from '../../components/admin/Navbar';
import Aside from '../../components/admin/Aside';

interface AdminLayoutProps {
	title?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
	return (
		<Flex fontFamily='Inter, sans-serif'>
			<NavbarAdmin />
			<Box flex='1'>
				<Flex h='70px' alignItems='center'>
					<Text fontWeight='bold' pl='20px' color='#3B4A67' fontSize='24px'>
						{title || ''}
					</Text>
				</Flex>
				{children}
			</Box>
			<Aside />
		</Flex>
	);
};

export default AdminLayout;
