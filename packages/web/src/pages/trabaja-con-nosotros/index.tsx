import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

import Layout from '../../layout';
import { useRouter } from 'next/router';

const TrabajaConNosotros = () => {
	const router = useRouter();

	return (
		<Layout>
			<Box
				bgImage="url('/fondo-2.jpg')"
				bgSize='cover'
				bgPos='center'
				h='500px'
			>
				<Box maxW='1220px' w='90%' m='0 auto' h='full'>
					<Flex position='relative' display='inline-flex'>
						<Heading fontSize='48px' fontWeight='black' color='#fff'>
							Trabaja con nosotros
						</Heading>
						<Box
							position='absolute'
							width='25px'
							height='12px'
							bgColor='#b41f1b'
							right='0'
							bottom='-12px'
						/>
					</Flex>

					<Flex alignItems='center' justifyContent='center' h='full'>
						<Box mx='32px'>
							<Button
								textTransform='uppercase'
								color='white'
								bgColor='#b41f1b'
								rounded='0'
								h='45px'
								p='0 32px'
								textAlign='center'
								_hover={{ bgColor: '#b41f1b' }}
								_active={{ bgColor: '#b41f1b' }}
							>
								Búsquedas Vigentes
							</Button>
						</Box>
						<Box mx='32px'>
							<Button
								textTransform='uppercase'
								color='white'
								bgColor='#b41f1b'
								rounded='0'
								h='45px'
								p='0 32px'
								textAlign='center'
								_hover={{ bgColor: '#b41f1b' }}
								_active={{ bgColor: '#b41f1b' }}
								onClick={() => router.push('/trabaja-con-nosotros/cv')}
							>
								DÉJANOS TU CV
							</Button>
						</Box>
					</Flex>
				</Box>
			</Box>
		</Layout>
	);
};

export default TrabajaConNosotros;
