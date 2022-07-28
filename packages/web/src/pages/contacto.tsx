import React from 'react';
import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Image,
	Input,
	Text,
	Textarea,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

import Layout from '../layout';

interface BodyContactInfo {
	theme: string;
	title: string;
	name: string;
	address: string;
	phone1: string;
	phone2?: string;
	email?: string;
	image: string;
	urlLocation: string;
}

const BodyContactInfo = ({
	theme,
	title,
	name,
	address,
	phone1,
	phone2,
	email,
	image,
	urlLocation,
}) => {
	return (
		<Box mb='96px'>
			<Box borderBottom='4px solid #d21a28' pb='7px'>
				<Text
					fontSize='20px'
					fontWeight='bold'
					color={theme === 'light' ? '#076098' : '#fff'}
				>
					{title}
				</Text>
			</Box>

			<Grid
				gridTemplateColumns={['1fr', '2fr repeat(2, 1fr)']}
				mt='15px'
				gap={['20px 0', '0 32px']}
			>
				<Box>
					<Flex alignItems='center'>
						<Text color={theme === 'light' ? 'black' : '#fff'} mr='7px'>
							<FaMapMarkerAlt />
						</Text>
						<Text>{name}</Text>
					</Flex>
					<Text>{address}</Text>
				</Box>
				<Box>
					<Flex alignItems='center'>
						<Text color={theme === 'light' ? 'black' : '#fff'} mr='7px'>
							<FaPhoneAlt />
						</Text>
						<Text>{phone1}</Text>
					</Flex>
					{phone2 && (
						<Flex alignItems='center'>
							<Text color={theme === 'light' ? 'black' : '#fff'} mr='7px'>
								<FaPhoneAlt />
							</Text>
							<Text>{phone2}</Text>
						</Flex>
					)}
				</Box>
				<Box>{email && <Text>{email}</Text>}</Box>
			</Grid>

			<Grid
				gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
				mt='32px'
			>
				<Box>
					<Image
						src={image}
						h={['initial', '390px']}
						w='100%'
						objectFit='cover'
						alt=''
					/>
				</Box>
				<Box>
					<iframe
						src={urlLocation}
						width='100%'
						height={390}
						style={{ border: 0 }}
						allowFullScreen={true}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					/>
				</Box>
			</Grid>
		</Box>
	);
};

const Contacto = () => {
	return (
		<Layout title='Contacto'>
			<Box mt='-100px' alignItems='center' h='100%' position='relative'>
				<Grid
					gridTemplateRows='3fr 1fr'
					h='100%'
					position='absolute'
					left='0'
					top='0'
					w='100%'
					zIndex='-1'
				>
					<Box h='100%' bgColor='#0c1526'></Box>
					<Box h='100%' bgColor='#d21a28'></Box>
				</Grid>

				<Box
					maxW='1220px'
					m='0 auto'
					w='90%'
					color='#fff'
					mt='100px'
					py='64px'
					pt={{ base: '32px', '2xl': '72px' }}
				>
					<Box>
						<Heading fontSize='36px'>Estamos aquí</Heading>
					</Box>

					<Box mt={{ base: '32px', '2xl': '48px' }}>
						{/* <Box mt='32px'> */}
						<BodyContactInfo
							title='Casa Central'
							name='Mariano Roque Alonso'
							email='info@atp.com.py'
							phone1='+595 21 238 6800'
							phone2='+595 971 599 000'
							address='Ruta 9 Dr. Carlos A. López km. 17,5 esquina Avda. Gral Díaz.'
							image='/sucursales-contacto-central.jpg'
							theme='dark'
							urlLocation='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7219.789598883976!2d-57.526138!3d-25.20677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2322dd063698196!2sATP%20Paraguay!5e0!3m2!1ses-419!2spy!4v1658949668539!5m2!1ses-419!2spy'
						/>
					</Box>
				</Box>
			</Box>

			<Box maxW='1220px' m='0 auto' w='90%' pt='96px'>
				<BodyContactInfo
					title='Sucursal ATP Ciudad del Este'
					name='Ciudad del Este, Alto Paraná'
					email=''
					phone1='+595 21 674 900'
					phone2=''
					address='Av Mariscal Lopez, Edificio Mainumby'
					image='/sucursales-contacto-02.jpg'
					theme='light'
					urlLocation='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57617.72340443044!2d-54.635955!3d-25.501454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x19dece88df51f516!2sMobil%20Lubricantes%20CDE!5e0!3m2!1ses!2spy!4v1658949776145!5m2!1ses!2spy'
				/>

				<BodyContactInfo
					title='Cooperativa Colonias Unidas'
					name='Obligado, Itapúa'
					email=''
					phone1='+595 71 218 1000'
					phone2=''
					address='Av. Dr. Gaspar R. de Francia Nº 64'
					image='/sucursales-contacto-03.jpg'
					theme='light'
					urlLocation='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14211.857680734556!2d-55.635742!3d-27.062871000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd508fc56135094d3!2sCooperativa%20Colonias%20Unidas!5e0!3m2!1ses!2spy!4v1658949809087!5m2!1ses!2spy'
				/>

				<BodyContactInfo
					title='Cooperativa Chortitzer Ltda.'
					name='Loma Plata, Boquerón'
					email=''
					phone1='+595 492 418 268'
					phone2=''
					address='Calle Fred Engen esq. Av. Central - Surtidor'
					image='/sucursales-contacto-04.jpg'
					theme='light'
					urlLocation='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14757.227807365756!2d-59.838004!3d-22.379783000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4fa22233292123d1!2sComplejo%20Industrial%20Cooperativa%20Chortitzer!5e0!3m2!1ses!2spy!4v1658949836105!5m2!1ses!2spy'
				/>
			</Box>

			<Box
				bgImage='linear-gradient(rgb(13, 20, 38), rgb(87, 86, 84))'
				py='72px'
				mt='128px'
				position='relative'
			>
				<Box
					pb='0'
					ml='-15px'
					mt='-20px'
					position='absolute'
					left='0'
					bottom='0'
					// transform='translateY(-50%)'
				>
					<Image
						src='/aceite-splash-copia.png'
						mb='-40px'
						alt=''
						width='700px'
					/>
				</Box>
				<Grid
					gridTemplateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
					maxW='1220px'
					m='0 auto'
					w='90%'
				>
					<Box />
					<Box>
						<Text fontWeight='bold' color='#fff' fontSize='26px' mb='15px'>
							Contáctenos
						</Text>

						<Box mb='20px'>
							<Input
								rounded='2px'
								border='2px solid'
								color='#fff'
								borderColor='#076098'
								placeholder='Nombre y Apellido*'
								_placeholder={{ color: '#fff' }}
							/>
						</Box>
						<Box mb='20px'>
							<Input
								rounded='2px'
								border='2px solid'
								color='#fff'
								borderColor='#076098'
								placeholder='Email'
								_placeholder={{ color: '#fff' }}
							/>
						</Box>
						<Box mb='20px'>
							<Input
								rounded='2px'
								border='2px solid'
								color='#fff'
								borderColor='#076098'
								placeholder='Teléfono*'
								_placeholder={{ color: '#fff' }}
							/>
						</Box>
						<Box mb='20px'>
							<Input
								rounded='2px'
								border='2px solid'
								color='#fff'
								borderColor='#076098'
								placeholder='Asunto*'
								_placeholder={{ color: '#fff' }}
							/>
						</Box>
						<Box mb='20px'>
							<Textarea
								rounded='2px'
								border='2px solid'
								color='#fff'
								borderColor='#076098'
								placeholder='Escriba su mensaje aquí*'
								height='7rem'
								_placeholder={{ color: '#fff' }}
							/>
						</Box>
						<Box>
							<Button
								minW='initial'
								h='45px'
								bgColor='#076098'
								px='32px'
								py='0'
								color='#fff'
								rounded='2px'
								_hover={{ bgColor: '#076098' }}
							>
								Enviar
							</Button>
						</Box>
					</Box>
				</Grid>
			</Box>
		</Layout>
	);
};

export default Contacto;
