import React from 'react';
import { Box, Flex, Grid, Heading, Image, Link, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import Layout from '../layout';
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

const Clientes: React.FC<ClientsProps> = () => {
	const { data: clientes, isFetching } = usePosts();

	return (
		<Layout>
			<Box
				mt='-100px'
				bgImage='url("/fondo-2.jpg")'
				py='100px'
				pt='156px'
				bgSize='cover'
				bgPos='center top'
			>
				<Box maxW='1220px' w='90%' m='0 auto'>
					<Flex position='relative' display='inline-flex'>
						<Box
							position='absolute'
							width='30px'
							height='14px'
							bgColor='#b41f1b'
							left='0'
							top='-16px'
						/>

						<Box>
							<Heading
								fontSize={['32px', '42px']}
								fontWeight='black'
								color='#fff'
							>
								Conoce a nuestros clientes
							</Heading>
						</Box>
					</Flex>

					<Text color='#fff' fontSize={{ base: '14px', lg: '20px' }} mt='32px'>
						Nuestros clientes, líderes y referentes del mercado paraguayo, nos
						impulsan y respaldan en nuestra misión de proveer productos y
						servicios de verdadera calidad. En nuestro Canal Consumo, trabajamos
						con diversos sectores como el industrial, construcción civil y vial,
						agrícola, transporte y naviero. Además, trabajamos con las
						cooperativas más grandes y exigentes del país. En los último años,
						nos expandimos a nuevas zonas geográficas, gracias a nuestro Canal
						Reventa, con lubricentros, talleres, casas de repuestos y EE.SS.
					</Text>
				</Box>
			</Box>

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
