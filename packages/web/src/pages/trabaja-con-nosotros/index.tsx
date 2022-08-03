import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

import Layout from '../../layout';
import { useRouter } from 'next/router';

const TrabajaConNosotros = () => {
	const router = useRouter();

	return (
		<Layout>
			<Box
				bgSize='cover'
				bgPos='center'
				py={{ base: '4rem', lg: '6rem 6rem 7rem 6rem' }}
				borderBottom='15px solid #b41f1b'
			>
				<Box maxW='1220px' w='90%' m='0 auto' h='full'>
					<Flex
						justifyContent='center'
						h='full'
						// alignItems='center'
						flexDir='column'
					>
						<Box ml={['0', '72px']}>
							<Flex position='relative' display='inline-flex'>
								<Heading fontSize='48px' fontWeight='black' color='#015796'>
									Trabaja con nosotros
								</Heading>
								<Box
									position='absolute'
									width='30px'
									height='12px'
									bgColor='#b41f1b'
									left='0'
									top='-8px'
								/>
							</Flex>
						</Box>

						<Flex mt='50px' flexDir={['column', 'row']} justifyContent='center'>
							<Box mx={['0', '32px']}>
								<Button
									w={['100%', '300px']}
									textTransform='uppercase'
									color='white'
									bgColor='#b41f1b'
									rounded='0'
									h='150px'
									p='0'
									textAlign='center'
									_hover={{ bgColor: '#b41f1b' }}
									_active={{ bgColor: '#b41f1b' }}
									onClick={() =>
										router.push('/trabaja-con-nosotros/busquedas-vigentes')
									}
								>
									Búsquedas
									<br /> Vigentes
								</Button>
							</Box>
							<Box mx={['0', '32px']} mt={['20px', '0']}>
								<Button
									w={['100%', '300px']}
									textTransform='uppercase'
									color='white'
									bgColor='#b41f1b'
									rounded='0'
									h='150px'
									p='0'
									textAlign='center'
									_hover={{ bgColor: '#b41f1b' }}
									_active={{ bgColor: '#b41f1b' }}
									onClick={() => router.push('/trabaja-con-nosotros/cv')}
								>
									DÉJANOS
									<br /> TU CV
								</Button>
							</Box>
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Layout>
	);
};

export default TrabajaConNosotros;
