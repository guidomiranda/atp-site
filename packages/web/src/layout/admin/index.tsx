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
			<Box ml='20px' my='20px' flex='1'>
				<Text fontWeight='bold' color='#3B4A67' fontSize='24px'>
					{title || ''}
				</Text>
				{children}
			</Box>
			<Aside />
		</Flex>
	);
};

export default AdminLayout;
