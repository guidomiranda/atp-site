import React from 'react';
import { Box, Button, Grid, Input, Text } from '@chakra-ui/react';
import { AiOutlinePaperClip } from 'react-icons/ai';

import Layout from '../layout';

const trabajaConNosotros = () => {
	return (
		<Layout>
			<Box
				py='72px'
				bg='linear-gradient(180deg, rgba(12,21,38,1) 0%, rgba(74,77,79,1) 100%)'
				borderBottom='32px solid #d21a28'
			>
				<Box maxW='1220px' m='0 auto' w='90%'>
					<Box>
						<Text fontSize='42px' color='#fff' fontWeight='bold'>
							Trabaja con nosotro
							<Text as='span' textDecor='underline'>
								s
							</Text>
						</Text>
					</Box>

					<Box as='form'>
						<Grid
							gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
							gap='56px 32px'
							mt='32px'
						>
							<Box>
								<Input
									border='0'
									borderBottom='3px solid #d21a28'
									placeholder='Nombre y Apellido'
									rounded='0'
									color='#fff'
									_hover={{ borderColor: '#d21a28' }}
									pl='10px'
									fontWeight='normal'
									_focus={{ borderColor: 'hsl(355, 77%, 60%)' }}
									_placeholder={{ color: '#fff', fontWeight: 'medium' }}
								/>
							</Box>
							<Box>
								<Input
									border='0'
									borderBottom='3px solid #d21a28'
									placeholder='Teléfono'
									rounded='0'
									color='#fff'
									_hover={{ borderColor: '#d21a28' }}
									pl='10px'
									fontWeight='normal'
									_focus={{ borderColor: 'hsl(355, 77%, 60%)' }}
									_placeholder={{ color: '#fff', fontWeight: 'medium' }}
								/>
							</Box>
							<Box>
								<Input
									border='0'
									borderBottom='3px solid #d21a28'
									placeholder='Correo Electrónico'
									rounded='0'
									color='#fff'
									_hover={{ borderColor: '#d21a28' }}
									pl='10px'
									fontWeight='normal'
									_focus={{ borderColor: 'hsl(355, 77%, 60%)' }}
									_placeholder={{ color: '#fff', fontWeight: 'medium' }}
								/>
							</Box>
							<Box>
								{/* <Input type='file' /> */}
								<Button
									border='0'
									borderBottom='3px solid #d21a28'
									rounded='0'
									_hover={{ borderColor: '#d21a28' }}
									pl='10px'
									bgColor='transparent'
									minW='initial'
									alignItems='center'
									h='auto'
									pb='10px'
									display='flex'
									justifyContent='space-between'
									w='full'
									textAlign='left'
									fontWeight='normal'
									_focus={{ borderColor: 'hsl(355, 77%, 60%)' }}
									_active={{ bgColor: 'transparent' }}
								>
									<Text color='#fff'>Adjuntar Currículum Vitae</Text>
									<Text color='#fff' fontSize='22px'>
										<AiOutlinePaperClip />
									</Text>
								</Button>
								<Text color='#fff' fontSize='sm' mt='3px' pl='10px'>
									nombre-archivo.pdf
								</Text>
							</Box>
						</Grid>
						<Box mt='32px'>
							<Button
								minW='initial'
								h='auto'
								bgColor='#d21a28'
								color='#fff'
								rounded='none'
								p='8px 32px'
								_hover={{ bgColor: '#d21a28' }}
								_active={{ bgColor: '#d21a28' }}
							>
								Enviar
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default trabajaConNosotros;
