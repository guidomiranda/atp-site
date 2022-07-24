import React from 'react';
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import {
	FaEnvelope,
	FaFacebookF,
	FaInstagram,
	FaPhoneAlt,
	FaTwitter,
	FaWhatsapp,
} from 'react-icons/fa';

const Footer: React.FC = () => {
	return (
		<Box>
			<Box
				py='72px'
				bgImage='url("/bg-products.png")'
				bgPos='center'
				bgSize='cover'
			>
				<Box maxW='1220px' m='0 auto' w='90%'>
					<Box>
						<Flex>
							<Box>
								<Image src='/logo-atp-blanco.png' alt='' w='160px' />
							</Box>
							<Box>
								<Image src='/logo-brands.png' alt='' />
							</Box>
						</Flex>
					</Box>

					<Flex
						flexDir={{ base: 'column', md: 'row' }}
						mt='56px'
						alignItems={{ base: 'flex-start', md: 'center' }}
						justifyContent='space-between'
					>
						<Box mb={{ base: '20px', md: '0' }}>
							<Text color='white'>
								Ruta 9 Dr. Carlos A. López km. 17,5 – Esquina Avda.
							</Text>
							<Text color='white'>
								Gral. Díaz. Mariano Roque Alonso, Paraguay.
							</Text>
						</Box>

						<Flex alignItems='flex-start'>
							<Box mr={{ base: '0', md: '20px' }}>
								<Link
									href=''
									display='flex'
									alignItems='center'
									_hover={{ textDecoration: 'none' }}
									mb='10px'
								>
									<Text color='white' mr='5px'>
										<FaEnvelope />
									</Text>
									<Text fontWeight='medium' color='white'>
										info@atp.com.py
									</Text>
								</Link>
								<Link
									href=''
									display='flex'
									alignItems='center'
									_hover={{ textDecoration: 'none' }}
								>
									<Text color='white' mr='5px'>
										<FaPhoneAlt />
									</Text>
									<Text fontWeight='medium' color='white'>
										+595 21 238 6800
									</Text>
								</Link>
							</Box>
							<Flex alignItems='center'>
								<Link
									href='https://www.facebook.com/ATP.PY'
									fontSize='20px'
									color='white'
									ml='14px'
									target='_blank'
								>
									<FaFacebookF />
								</Link>
								<Link
									href='https://www.instagram.com/atp.paraguay/'
									fontSize='20px'
									color='white'
									ml='14px'
									target='_blank'
								>
									<FaInstagram />
								</Link>
								{/* <Link href='/' fontSize='20px' color='white' ml='14px'>
									<FaTwitter />
								</Link> */}
								<Link
									href='https://wa.me/+595971599000'
									fontSize='20px'
									color='white'
									ml='14px'
									target='_blank'
								>
									<FaWhatsapp />
								</Link>
							</Flex>
						</Flex>
					</Flex>

					<Box mt='48px'>
						<Text
							color='white'
							fontSize='12px'
							textAlign='center'
							w={{ base: '100%', md: '90%' }}
							m='0 auto'
						>
							©2019. Todos los derechos reservados Cosan Lubrificantes e
							Especialidades S.A. Prohibida la reproducción o distribución sin
							autorización. Mobil y Mobil Super son marcas o marcas registradas
							de Exxon Mobil Corporation o de una de sus subsidiarias,
							utilizadas por Cosan Lubrificantes e Especialidades S.A., o una de
							sus subsidiarias bajo licencia.Otras marcas o nombres de productos
							utilizados en el presente son propiedad de sus respectivos dueños.
						</Text>
					</Box>
				</Box>
			</Box>

			<Box bgColor='#111' py='20px' px={{ base: '20px', lg: '0' }}>
				<Text color='white' fontWeight='medium' textAlign='center'>
					Diseño y desarrollo web por{' '}
					<Link href='https://fincreativo.com' fontWeight='bold'>
						FINCREATIVO
					</Link>
				</Text>
			</Box>
		</Box>
	);
};

export default Footer;
