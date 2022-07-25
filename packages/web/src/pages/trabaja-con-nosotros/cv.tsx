import React from 'react';
import {
	Box,
	Button,
	Flex,
	Grid,
	Radio,
	RadioGroup,
	Text,
} from '@chakra-ui/react';
import { AiOutlinePaperClip } from 'react-icons/ai';

import Input from '../../components/Input';

import Layout from '../../layout';
import Select from '../../components/Select';

const TrabajaConNosotrosCV = () => {
	return (
		<Layout title='Trabaja con nosotros'>
			<Box
				py='72px'
				bg='linear-gradient(180deg, rgba(12,21,38,1) 0%, rgba(74,77,79,1) 100%)'
				borderBottom='32px solid #d21a28'
			>
				<Box maxW='960px' m='0 auto' w='90%'>
					<Box>
						<Text fontSize='42px' color='#fff' fontWeight='bold'>
							Trabaja con nosotro
							<Text as='span' textDecor='underline'>
								s
							</Text>
						</Text>

						<Text
							color='#fff'
							fontWeight='bold'
							fontSize='22px'
							mt='20px'
							borderBottom='3px solid #d21a28'
							pb='7px'
						>
							DÉJANOS TU CV
						</Text>

						<Text color='#fff' mt='20px' pb='7px'>
							Número de Documento*:
						</Text>
					</Box>

					<Box as='form'>
						<Grid gap='32px' mt='10px'>
							<Box w={{ base: '100%', lg: '60%' }}>
								<RadioGroup
									display='grid'
									name='doc'
									gap={{ base: '20px', lg: '0' }}
									gridTemplateColumns={[
										'1fr',
										'repeat(2, 1fr)',
										'repeat(3, auto)',
									]}
								>
									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#fff'
											mr='10px'
											htmlFor='passport'
										>
											Pasaporte
										</Text>
										<Radio colorScheme='red' id='passport' value='passport' />
									</Flex>
									<Flex alignItems='center'>
										<Text
											as='label'
											color='#fff'
											mr='10px'
											htmlFor='ci'
											fontSize='14px'
										>
											C.I
										</Text>
										<Radio colorScheme='red' id='ci' value='ci' />
									</Flex>
									<Flex>
										<Input placeholder='Número*' />
									</Flex>
								</RadioGroup>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input placeholder='Nombre y Apellido*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input placeholder='Fecha de nacimiento*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Text color='#fff' pb='7px'>
									Estado civil*:
								</Text>

								<RadioGroup
									display='grid'
									name='doc'
									gap={{ base: '20px', lg: '0 20px' }}
									gridTemplateColumns={[
										'1fr',
										'repeat(2, 1fr)',
										'repeat(5, auto)',
									]}
								>
									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#fff'
											mr='10px'
											htmlFor='soltero'
										>
											Soltero/a
										</Text>
										<Radio colorScheme='red' id='soltero' value='soltero' />
									</Flex>

									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#fff'
											mr='10px'
											htmlFor='casado'
										>
											Casado/a
										</Text>
										<Radio colorScheme='red' id='casado' value='casado' />
									</Flex>

									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#fff'
											mr='10px'
											htmlFor='viudo'
										>
											Viudo/a
										</Text>
										<Radio colorScheme='red' id='viudo' value='viudo' />
									</Flex>

									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#fff'
											mr='10px'
											htmlFor='otro-estado'
										>
											Otro
										</Text>
										<Radio
											colorScheme='red'
											id='otro-estado'
											value='otro-estado'
										/>
									</Flex>

									<Flex>
										<Input placeholder='Especificar' />
									</Flex>
								</RadioGroup>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Text color='#fff' pb='7px'>
									Género*:
								</Text>

								<RadioGroup
									display='grid'
									name='doc'
									gap={{ base: '20px', lg: '0 20px' }}
									gridTemplateColumns={[
										'1fr',
										'repeat(2, 1fr)',
										'repeat(4, auto)',
									]}
								>
									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#fff'
											mr='10px'
											htmlFor='hombre'
										>
											Hombre
										</Text>
										<Radio colorScheme='red' id='hombre' value='hombre' />
									</Flex>

									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#fff'
											mr='10px'
											htmlFor='mujer'
										>
											Mujer
										</Text>
										<Radio colorScheme='red' id='mujer' value='mujer' />
									</Flex>

									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#fff'
											mr='10px'
											htmlFor='otro-genero'
										>
											Otro
										</Text>
										<Radio
											colorScheme='red'
											id='otro-genero'
											value='otro-genero'
										/>
									</Flex>

									<Flex>
										<Input placeholder='Especificar' />
									</Flex>
								</RadioGroup>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input placeholder='Cantidad de hijos' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input placeholder='Teléfono/celular*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input placeholder='E-mail*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input placeholder='Dirección*' />
								</Box>
							</Box>

							<Grid
								gridTemplateColumns='repeat(2, 1fr)'
								w={{ base: '100%', lg: '60%' }}
								gap='32px'
							>
								<Select></Select>
								<Select></Select>
							</Grid>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input placeholder='Profesión*' />
								</Box>
							</Box>

							<Box w='100%'>
								<Box w='100%' h='4px' bgColor='#d21a28' mt='48px' />
							</Box>

							<Text color='#fff' fontWeight='bold' fontSize='22px' pb='7px'>
								CARGO AL QUE SE POSTULA
							</Text>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Select></Select>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Select></Select>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input placeholder='Expectativa salarial*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input placeholder='Link URL de perfil de LinkedIn' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Input display='none' type='file' />
								<Button
									border='0'
									borderBottom='1px solid #fff'
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

						<Box w={{ base: '100%', lg: '60%' }} mt='32px'>
							<Text color='#d9d9d9'>
								Obs. Todas las opciones marcadas con un * deben ser de rellenado
								obligatorio.
							</Text>
						</Box>

						<Box mt='32px'>
							<Button
								minW='initial'
								h='45px'
								bgColor='#d21a28'
								color='#fff'
								rounded='none'
								p='0 48px'
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

export default TrabajaConNosotrosCV;
