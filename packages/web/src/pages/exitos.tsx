import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import Header from '../components/client/Header';
import Layout from '../layout';

const ItemReview: React.FC = () => {
	return (
		<Box as='article' p='32px'>
			<Heading
				bgColor='#155e9d'
				fontSize='32px'
				fontWeight='normal'
				color='white'
				textAlign='center'
				py='24px'
				// textTransform='uppercase'
			>
				Autopiezas CEISA
			</Heading>
			<Box px='26px' pb='26px' bgColor='#333'>
				<Text color='white' fontSize={['16px', '20px']} pt='20px'>
					Ha realizado una importante alianza con la empresa Kenport con lo cual
					MOBIL Lubricantes se encuentra disponible para realizar entregas
					programadas en Argentina, Uruguay, Bolivia y Paraguay realizando las
					gestiones comerciales desde nuestro país a través de ATP.
				</Text>
				<Text color='white' fontSize={['16px', '20px']} mt='15px'>
					Agregaron que MOBIL Lubricantes además ofrece una importante variedad
					de servicios como valor agregado como entrega en todos los puertos del
					país, logística eficiente, análisis de lubricantes a bordo, cartilla
					de lubricación, acompañamiento permanente y bombeo de aceite a granel
					entre otros.
				</Text>
			</Box>
		</Box>
	);
};

const Clientes = () => {
	return (
		<Layout>
			<Header title='Casos de éxito' image='/personas-2.png' />
			<Box py='94px'>
				<Box maxW='1220px' w='90%' m='0 auto'>
					<ItemReview />
				</Box>
			</Box>
		</Layout>
	);
};

export default Clientes;
