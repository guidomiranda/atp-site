import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import Header from '../components/client/Header';
import Layout from '../layout';
import { getClients } from '../utils';

interface ClientsProps {
	clients: any;
}

interface ClientProps {
	client: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const clients = await getClients();
	return { props: { clients } };
};

const ItemReview: React.FC<ClientProps> = ({ client }) => {
	return (
		<Box as='article' bgColor='#155e9d' p='32px' mb='56px'>
			<Heading fontSize={['32px', '42px']} fontWeight='normal' color='white'>
				{client.title}
			</Heading>
			<Box mt='20px'>
				{client.description.map(item => (
					<Text color='white' fontSize={['16px', '20px']} mt='15px' key={item}>
						{item}
					</Text>
				))}
			</Box>
			<Text color='white' fontSize={['16px', '20px']} mt='15px'>
				¡Contactá con nosotros para más info o realizar tus pedidos, nos
				aseguramos de entregar tu producto en cualquier punto!
			</Text>
		</Box>
	);
};

const Clientes: React.FC<ClientsProps> = ({ clients }) => {
	return (
		<Layout>
			<Header title='Conoce a nuestros clientes' image='/img_clientes.png' />
			<Box bgColor='#0a101e' pt='94px' pb='38'>
				<Box maxW='1220px' w='90%' m='0 auto'>
					{clients.clients?.map(item => (
						<ItemReview key={item.id} client={item} />
					))}
				</Box>
			</Box>
		</Layout>
	);
};

export default Clientes;
