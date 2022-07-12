import React from 'react';
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../layout';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

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
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14439.579209630665!2d-57.5261383!3d-25.2067699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2322dd063698196!2sATP%20Paraguay!5e0!3m2!1sen!2spy!4v1657651488139!5m2!1sen!2spy'
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
		<Layout>
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

				<Box maxW='1220px' m='0 auto' w='90%' color='#fff' mt='100px' py='56px'>
					<Box>
						<Heading fontSize='36px'>Estamos aquí</Heading>
					</Box>

					<Box mt='32px'>
						<BodyContactInfo
							title='Casa Central'
							name='Mariano Roque Alonso'
							email='info@atp.com.py'
							phone1='+595 21 238 6800'
							phone2='+595 971 599 000'
							address='Ruta 9 Dr. Carlos A. López km. 17,5 esquina Avda. Gral Díaz.'
							image='/sucursales-contacto-central.jpg'
							theme='dark'
							urlLocation=''
						/>
					</Box>
				</Box>
			</Box>

			<Box maxW='1220px' m='0 auto' w='90%' pt='56px'>
				<BodyContactInfo
					title='Sucursal ATP Ciudad del Este'
					name='Ciudad del Este, Alto Paraná'
					email=''
					phone1='+595 21 674 900'
					phone2=''
					address='Av Mariscal Lopez, Edificio Mainumby'
					image='/sucursales-contacto-02.jpg'
					theme='light'
					urlLocation=''
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
					urlLocation=''
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
					urlLocation=''
				/>
			</Box>

			<Box pb='0' ml='-15px' mt='-20px'>
				<Image src='/aceite-splash-copia.png' mb='-40px' alt='' width='700px' />
			</Box>
		</Layout>
	);
};

export default Contacto;
