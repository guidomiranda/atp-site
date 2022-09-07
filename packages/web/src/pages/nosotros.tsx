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
				<Text fontWeight='bold' color='#fff'>
					{title}{' '}
					<Text fontWeight='normal' display='inline' color='#fff'>
						{description}
					</Text>
				</Text>
			</Box>
			<Box position='absolute' top='2px' left='0'>
				<Text color='#fff' fontSize='24px'>
					<FaAngleDoubleRight />
				</Text>
			</Box>
		</Box>
	);
};

const About = () => {
	return (
		<Layout title='Nosotros'>
			<Header
				bg='banner-nosotros.jpg'
				title='Quienes somos'
				description='ATP es una empresa con más de 40 años en el mercado que se encarga de distribuir productos y servicios de alta calidad.'
			/>
			<Box bgImage='linear-gradient(rgb(13, 20, 38), rgb(87, 86, 84))'>
				<Box maxW='1220px' m='0 auto' w='90%' py='128px'>
					<Box as='article' mb='128px'>
						<Grid
							gridTemplateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
							gap={{ base: '48px 0', md: '0 64px' }}
						>
							<Box>
								<Flex display='inline-flex' position='relative'>
									<Heading
										fontWeight='black'
										color='#fff'
										fontSize={{ base: '40px', md: '56px' }}
									>
										Misión
									</Heading>
									<Box
										width='44px'
										height='12px'
										bgColor='#b41f1b'
										position='absolute'
										left='0'
										top='-6px'
									/>
								</Flex>
								<Text
									fontSize={['18px', '20px']}
									mt='26px'
									w={['100%', '90%']}
									color='#fff'
								>
									Brindar soluciones mediante la distribución eficiente de
									productos y servicios de alta calidad respaldados por un
									equipo humano capacitado y comprometido.
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
										color='#fff'
										fontSize={{ base: '40px', md: '56px' }}
									>
										Visión
									</Heading>
									<Box
										width='40px'
										height='12px'
										bgColor='#b41f1b'
										position='absolute'
										left='0'
										top='-6px'
									/>
								</Flex>
								<Text
									fontSize={['18px', '20px']}
									mt='26px'
									w={['100%', '90%']}
									color='#fff'
								>
									Proveer la mejor experiencia personalizada con un equipo
									humano de primer nivel.
								</Text>
							</Box>
							<Box>
								<Image
									src='/img_vision.jpeg'
									alt=''
									width='100%'
									objectFit='cover'
									verticalAlign='top'
								/>
							</Box>
						</Grid>
					</Box>
				</Box>

				<Box pt='0' pb='64px'>
					<Box maxW='1220px' m='0 auto' w='90%'>
						<Grid
							gridTemplateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
							gap={{ base: '48px 0', md: '0 72px' }}
							alignItems='center'
						>
							<Box>
								<Flex display='inline-flex' position='relative'>
									<Heading
										fontWeight='black'
										color='#fff'
										fontSize={{ base: '40px', md: '56px' }}
									>
										Valores
									</Heading>
									<Box
										width='45px'
										height='12px'
										bgColor='#b41f1b'
										position='absolute'
										left='0'
										top='-6px'
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
								<Image src='/valores.jpeg' alt='' />
							</Box>
						</Grid>
					</Box>
				</Box>

				<Box
					as='article'
					mb='32px'
					maxW='1220px'
					w='90%'
					m='0 auto'
					pt='96px'
					pb='128px'
				>
					<Grid
						gridTemplateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
						gap={{ base: '48px 0', md: '0 64px' }}
					>
						<Box>
							<Flex display='inline-flex' position='relative'>
								<Heading
									fontWeight='black'
									color='#fff'
									fontSize={{ base: '40px', md: '56px' }}
								>
									Infraestructura
								</Heading>
								<Box
									width='40px'
									height='12px'
									bgColor='#b41f1b'
									position='absolute'
									left='0'
									top='-6px'
								/>
							</Flex>
							<Text
								fontSize={['18px', '20px']}
								mt='26px'
								w={['100%', '90%']}
								color='#fff'
							>
								Cuenta con un plantel altamente capacitado. El área logística
								dispone de unidades de transporte de 0,7 a 15 toneladas y un
								depósito techado para 1.500.000 litros, garantizando el perfecto
								estado de los productos.
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
				<Grid placeItems='center' maxW='1000px' w='90%' m='0 auto'>
					<Box textAlign='center' mb='56px'>
						<Flex display='inline-flex' position='relative'>
							<Heading
								fontWeight='black'
								color='#015796'
								fontSize={{ base: '32px', md: '42px' }}
							>
								Vídeo Institucional
							</Heading>
							<Box
								width='25px'
								height='12px'
								bgColor='#b41f1b'
								position='absolute'
								right='0'
								bottom='-12px'
							/>
						</Flex>
					</Box>

					<iframe
						width='100%'
						height='500px'
						src='https://www.youtube.com/embed/u4LOdB_ELtc'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						// allowFullscreen
					></iframe>
				</Grid>
			</Box>

			<Box py='96px' maxW='1220px' m='0 auto' w='90%'>
				<Box textAlign='center' mb='56px'>
					<Flex display='inline-flex' position='relative'>
						<Heading
							fontWeight='black'
							color='#015796'
							fontSize={{ base: '32px', md: '42px' }}
						>
							Representantes exclusivos
						</Heading>
						<Box
							width='25px'
							height='12px'
							bgColor='#b41f1b'
							position='absolute'
							right='0'
							bottom='-12px'
						/>
					</Flex>
				</Box>

				<Grid
					gridTemplateColumns={['1fr', 'repeat(2,1fr)', 'repeat(3,1fr)']}
					gap={['72px 0', '32px 110px']}
				>
					<Grid placeItems='center' px='32px'>
						<Image
							src='/logo-mobil-atp.png'
							alt=''
							width='100%'
							objectFit='cover'
							verticalAlign='top'
						/>
					</Grid>
					<Grid placeItems='center' px='32px'>
						<Image
							src='/logo-route-atp.png'
							alt=''
							width='100%'
							objectFit='cover'
							verticalAlign='top'
						/>
					</Grid>
					<Grid placeItems='center' px='32px'>
						<Image
							src='/logo-vox-atp.png'
							alt=''
							width='100%'
							objectFit='cover'
							verticalAlign='top'
						/>
					</Grid>
				</Grid>
			</Box>
		</Layout>
	);
};

export default About;
