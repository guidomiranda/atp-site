import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import Header from '../components/client/Header';
import Layout from '../layout';

const ItemReview: React.FC = () => {
	return (
		<Box as='article' bgColor='#155e9d' p='32px'>
			<Heading
				fontSize={['32px', '42px']}
				fontWeight='normal'
				color='white'
				// textTransform='uppercase'
			>
				Cliente 1 - Fábrica Cavallaro
			</Heading>
			<Box mt='20px'>
				<Text color='white' fontSize={['16px', '20px']} mt='15px'>
					Puesto que creemos que la atención a nuestros clientes es tan
					importante como el crecimiento profesional y personal de nuestros
					compañeros
				</Text>
				<Text color='white' fontSize={['16px', '20px']} mt='15px'>
					¡Contactá con nosotros para más info o realizar tus pedidos, nos
					aseguramos de entregar tu producto en cualquier punto!
				</Text>
			</Box>
		</Box>
	);
};

const Clientes = () => {
	return (
		<Layout>
			<Header title='Conoce a nuestros clientes' image='/img_clientes.png' />
			<Box bgColor='#0a101e' py='94px'>
				<Box maxW='1220px' w='90%' m='0 auto'>
					<ItemReview />
				</Box>
			</Box>
		</Layout>
	);
};

export default Clientes;
