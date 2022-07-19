import React from 'react';
import { Box, Button, Grid } from '@chakra-ui/react';

import AdminLayout from '../../../layout/admin';
import { useRouter } from 'next/router';

interface ProductItemProps {
	text: string;
	path: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ text, path }) => {
	const router = useRouter();

	return (
		<Button
			minW='initial'
			h='50px'
			p='0'
			color='#FFF'
			onClick={() => router.push(path)}
			bgColor='#8C95A6'
			fontWeight='medium'
			_hover={{ bgColor: '#8C95A6' }}
			_active={{ bgColor: '#8C95A6' }}
			rounded='3px'
		>
			{text}
		</Button>
	);
};

const ProductosAdmin = () => {
	return (
		<AdminLayout title='Productos'>
			<Box p='0 20px'>
				<Grid gridTemplateColumns='repeat(5, 1fr)' gap='20px'>
					<ProductItem text='Lubricantes' path='/admin/productos/lubricantes' />
					<ProductItem text='Filtros' path='/admin/productos/filtros' />
					<ProductItem text='Baterías' path='/admin/productos/baterias' />
				</Grid>
			</Box>
		</AdminLayout>
	);
};

export default ProductosAdmin;
