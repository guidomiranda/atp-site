import React from 'react';
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import Layout from '../layout';
import Header from '../components/Header';

interface ValuesQuoteProps {
	title: string;
	description: string;
}

const ValuesQuote: React.FC<ValuesQuoteProps> = ({ title, description }) => {
	return (
		<Box position='relative' as='article' mb='20px'>
			<Box ml='36px'>
				<Text fontWeight='bold'>
					{title}{' '}
					<Text fontWeight='normal' display='inline'>
						{description}
					</Text>
				</Text>
			</Box>
			<Box position='absolute' top='2px' left='0'>
				<Text color='#b41f1b' fontSize='24px'>
					<FaAngleDoubleRight />
				</Text>
			</Box>
		</Box>
	);
};

const About = () => {
	return (
		<Layout>
			<Header />
			<Box maxW='1220px' m='0 auto' w='90%' py='128px'>
				<Box as='article' mb='96px'>
					<Grid
						gridTemplateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
						gap={{ base: '48px 0', md: '0 64px' }}
					>
						<Box>
							<Flex display='inline-flex' position='relative'>
								<Heading
									fontWeight='black'
									color='#015796'
									fontSize={{ base: '40px', md: '56px' }}
								>
									Misión
								</Heading>
								<Box
									width='60px'
									height='15px'
									bgColor='#b41f1b'
									position='absolute'
									right='0'
									bottom='-15px'
								/>
							</Flex>
							<Text fontSize={['18px', '20px']} mt='26px' w={['100%', '90%']}>
								Brindar soluciones mediante la distribución eficiente de
								productos y servicios de alta calidad respaldados por un equipo
								humano capacitado y comprometido.
							</Text>
						</Box>
						<Box>
							<Image
								src='/img-local-atp.jpg'
								alt=''
								width='100%'
								objectFit='cover'
								verticalAlign='top'
							/>
						</Box>
					</Grid>
				</Box>
				<Box as='article' mb='32px'>
					<Grid
						gridTemplateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
						gap={{ base: '48px 0', md: '0 64px' }}
					>
						<Box>
							<Flex display='inline-flex' position='relative'>
								<Heading
									fontWeight='black'
									color='#015796'
									fontSize={{ base: '40px', md: '56px' }}
								>
									Visión
								</Heading>
								<Box
									width='60px'
									height='15px'
									bgColor='#b41f1b'
									position='absolute'
									right='0'
									bottom='-15px'
								/>
							</Flex>
							<Text fontSize={['18px', '20px']} mt='26px' w={['100%', '90%']}>
								Proveer la mejor experiencia personalizada con un equipo humano
								de primer nivel.
							</Text>
						</Box>
						<Box>
							<Image
								src='/img-equipo-atp.jpg'
								alt=''
								width='100%'
								objectFit='cover'
								verticalAlign='top'
							/>
						</Box>
					</Grid>
				</Box>
			</Box>

			<Box bgColor='#f8f8f9' py='72px'>
				<Box maxW='1220px' m='0 auto' w='90%'>
					<Grid
						gridTemplateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
						gap={{ base: '48px 0', md: '0 72px' }}
					>
						<Box>
							<Flex display='inline-flex' position='relative'>
								<Heading
									fontWeight='black'
									color='#015796'
									fontSize={{ base: '40px', md: '56px' }}
								>
									Valores
								</Heading>
								<Box
									width='60px'
									height='15px'
									bgColor='#b41f1b'
									position='absolute'
									right='0'
									bottom='-15px'
								/>
							</Flex>

							<Box mt='38px'>
								<ValuesQuote
									title='Integridad.'
									description='Actuamos con transparencia y honestidad en cada una de nuestras gestiones.'
								/>
								<ValuesQuote
									title='Trabajo en Equipo.'
									description=' Generamos sinergia con acciones alineadas a un objetivo común.'
								/>
								<ValuesQuote
									title='Innovación.'
									description='Comprometidos con mejoras continua en todos los niveles.'
								/>
								<ValuesQuote
									title='Seguridad.'
									description='Con los clientes internos, externos y el medio ambiente.'
								/>
								<ValuesQuote
									title='Desarrollo humano.'
									description='Estabilidad laboral y capacitación.'
								/>
								<ValuesQuote
									title='Valor compartido.'
									description='Equilibrio en el desarrollo económico, social y ambiental.'
								/>
							</Box>
						</Box>
						<Box>
							<Image src='/img-valores-atp.jpg' alt='' />
						</Box>
					</Grid>
				</Box>
			</Box>
		</Layout>
	);
};

export default About;
