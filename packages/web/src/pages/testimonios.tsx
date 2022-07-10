import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import Header from '../components/client/Header';
import Layout from '../layout';

const ItemReview: React.FC = () => {
	return (
		<Box as='article' bgColor='#fff' p='32px'>
			<Box mb='15px'>
				<Text color='black' fontSize={['16px', '20px']}>
					Decidí cambiar el aceite, tengo un Mitsubishi Outlander. Llegué a la
					tienda, pensé que era mejor no ahorrar dinero y llevarse algo de alta
					calidad. El vendedor recomendó Shell al principio, pero lo usé y,
					francamente, no estaba satisfecho con todo. Por lo tanto, tomé
					"Mobil". No hay quejas, estoy completamente satisfecho con la compra.
				</Text>
			</Box>
			<Text color='black' fontSize={['16px', '20px']}>
				Juanca Báez - Automovilista, corredor de fórmula 1
			</Text>
		</Box>
	);
};

const Clientes = () => {
	return (
		<Layout>
			<Header
				title='Testimonios de quienes nos eligen'
				image='/personas-3.png'
			/>
			<Box bgColor='#155e9d' py='94px'>
				<Box maxW='1220px' w='90%' m='0 auto'>
					<ItemReview />
				</Box>
			</Box>
		</Layout>
	);
};

export default Clientes;
