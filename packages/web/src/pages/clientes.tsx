import React from 'react';
import { Box, Grid, Heading, Image, Link, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import Header from '../components/client/Header';
import Layout from '../layout';
import { getClients } from '../utils';
import { clients } from '../data/clients';
import { useQuery } from '@tanstack/react-query';
import axios from '../config/axios';

interface ClientsProps {
	clients: any;
}

interface ClientProps {
	client: any;
}

function usePosts() {
	return useQuery(['posts'], async () => {
		const data = await axios({
			method: 'GET',
			url: '/clientes',
		});
		return data.data.data;
	});
}

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

const Clientes: React.FC<ClientsProps> = () => {
	const { data: clientes, isFetching } = usePosts();

	return (
		<Layout>
			<Header
				title='Conoce a nuestros clientes'
				description={[
					'Nuestros clientes, líderes y referentes del mercado paraguayo, nos impulsan y respaldan en nuestra misión de proveer productos y servicios de verdadera calidad. En nuestro Canal Consumo, trabajamos con diversos sectores como el industrial, construcción civil y vial, agrícola, transporte y naviero. Además, trabajamos con las cooperativas más grandes y exigentes del país. En los último años, nos expandimos a nuevas zonas geográficas, gracias a nuestro Canal Reventa, con lubricentros, talleres, casas de repuestos y EE.SS.',
				]}
				image='/personas-1.png'
			/>
			<Box bgColor='#fff' py='96px' maxW='1270px' w='90%' m='0 auto'>
				<Grid
					gridTemplateColumns={[
						'repeat(2, 1fr)',
						'repeat(4, 1fr)',
						'repeat(5, 1fr)',
						'repeat(6, 1fr)',
					]}
					gap='20px'
				>
					{clientes?.map((client: any) => (
						<Grid placeItems='center' key={client.id}>
							<Link href={client.link} target='_blank'>
								<Image src={client.imagen} alt='' w='100%' />
							</Link>
						</Grid>
					))}
				</Grid>

				<Text textAlign='center' mt='48px'>
					Estas empresas son solo algunas de las muchas que confían y apuestan a
					ATP ¡Y seguimos creciendo!
				</Text>
			</Box>
		</Layout>
	);
};

export default Clientes;
