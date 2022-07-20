import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import NavbarAdmin from '../../components/admin/Navbar';
import Aside from '../../components/admin/Aside';

interface AdminLayoutProps {
	title?: string;
	footer?: JSX.Element;
	back?: JSX.Element;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({
	children,
	title,
	footer,
	back,
}) => {
	return (
		<Flex fontFamily='Inter, sans-serif'>
			<NavbarAdmin />
			<Box flex='1'>
				<Flex
					borderBottom={back ? '1px solid #DCDFE5' : 0}
					justifyContent='space-between'
					h='70px'
					alignItems='center'
					px='20px'
				>
					<Flex alignItems='center'>
						<Box mr='20px'>{back}</Box>
						<Text
							fontWeight={back ? 'medium' : 'bold'}
							color='#3B4A67'
							fontSize={back ? '20px' : '24px'}
						>
							{title || ''}
						</Text>
					</Flex>
					{footer}
				</Flex>
				{children}
			</Box>
			{/* <Aside /> */}
		</Flex>
	);
};

export default AdminLayout;
