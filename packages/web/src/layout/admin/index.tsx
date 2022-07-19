import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import NavbarAdmin from '../../components/admin/Navbar';
import Aside from '../../components/admin/Aside';

interface AdminLayoutProps {
	title?: string;
	footer?: JSX.Element;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({
	children,
	title,
	footer,
}) => {
	return (
		<Flex fontFamily='Inter, sans-serif'>
			<NavbarAdmin />
			<Box flex='1'>
				<Flex
					justifyContent='space-between'
					h='70px'
					alignItems='center'
					px='20px'
				>
					<Text fontWeight='bold' color='#3B4A67' fontSize='24px'>
						{title || ''}
					</Text>
					{footer}
				</Flex>
				{children}
			</Box>
			{/* <Aside /> */}
		</Flex>
	);
};

export default AdminLayout;
