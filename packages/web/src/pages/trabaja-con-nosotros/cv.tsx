import React from 'react';
import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Radio,
	RadioGroup,
	Text,
} from '@chakra-ui/react';
import { AiOutlinePaperClip } from 'react-icons/ai';

import Input from '../../components/Input';

import Layout from '../../layout';
import Select from '../../components/Select';
import { cities } from '../../data/cities';
import { dptos } from '../../data/dptos';
import Header from '../../components/Header';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendMailWork } from '../../utils/mails';

const TrabajaConNosotrosCV = () => {
	const initialState = {
		identifier_type: 'ci',
		identifier_number: '',
		name: '',
		birthday: '',
		marital_status: 'soltero',
		gender: 'hombre',
		children: '0',
		phone: '',
		email: '',
		direction: '',
		state: '',
		city: '',
		profession: '',
		position: '',
		department: '',
		salary_expectation: '',
		linkedin: '',
	};
	const [data, setData] = useState(initialState);
	const [fileData, setFile] = useState({});

	const handleChange = (e) => {
		const target = e.target;
		setData({
			...data,
			[target.name]: target.value
		})
	}

	const handleFileChange = (e) => {
		setFile({
			file: e.target.files[0],
			name: e.target.files[0].name
		});
	}

	const handleClick = () => {
		document.getElementById('file').click();
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		let formData = new FormData();
		for (let key in data ) {
			formData.append(key, data[key]);
		}
		formData.append('resume', fileData.file, fileData.name);

		const response = await sendMailWork(formData);

		if (!response.success) {
			toast.error('Se ha producido un error');
		}

		if (response.success) {
			toast.success('Datos enviados correctamente');
		}
	}

	return (
		<Layout title='Trabaja con nosotros'>
			<Header
				bg='banner-nosotros.jpg'
				title='Trabaja con nosotros'
				description='Forma parte del equipo humano de ATP. Si consideras que tenés lo necesario para unirte y aportarnos de tu conocimiento y talento, por favor completa el formulario para considerar tu postulación. Somos personas ambiciosas, comprometidas y con muchas ganas de seguir creciendo.'
			/>

			<Box
				py='72px'
				// bg='linear-gradient(180deg, rgba(12,21,38,1) 0%, rgba(74,77,79,1) 100%)'
				borderBottom='32px solid #d21a28'
			>
				<Box maxW='960px' m='0 auto' w='90%' id='main'>
					<Box>
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

						<Text
							color='#015796'
							fontWeight='bold'
							fontSize='22px'
							mt='20px'
							borderBottom='3px solid #d21a28'
							pb='7px'
						>
							DÉJANOS TU CV
						</Text>

						<Text color='#015796' mt='20px' pb='7px'>
							Número de Documento*:
						</Text>
					</Box>

					<Box as='form' onSubmit={handleSubmit}>
						<Grid gap='32px' mt='10px'>
							<Box w={{ base: '100%', lg: '60%' }}>
								<RadioGroup
									display='grid'
									name='identifier_type'
									value={data.identifier_type}
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
											color='#015796'
											mr='10px'
											htmlFor='passport'
										>
											Pasaporte
										</Text>
										<Radio onChange={e => handleChange(e) } colorScheme='red' id='passport' value='passport' />
									</Flex>
									<Flex alignItems='center'>
										<Text
											as='label'
											color='#015796'
											mr='10px'
											htmlFor='ci'
											fontSize='14px'
										>
											C.I
										</Text>
										<Radio onChange={e => handleChange(e) } colorScheme='red' id='ci' value='ci' />
									</Flex>
									<Flex>
										<Input isRequired name='identifier_number' onChange={e => handleChange(e)} type='number' placeholder='Número*' />
									</Flex>
								</RadioGroup>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input isRequired name='name' onChange={e => handleChange(e)} placeholder='Nombre y Apellido*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Text color='#015796' pb='7px'>
										Fecha de nacimiento*
									</Text>
									<Input isRequired name='birthday' onChange={e => handleChange(e)} type='date' placeholder='Fecha de nacimiento*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Text color='#015796' pb='7px'>
									Estado civil*:
								</Text>

								<RadioGroup
									display='grid'
									name='marital_status'
									value={data.marital_status}
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
											color='#015796'
											mr='10px'
											htmlFor='soltero'
										>
											Soltero/a
										</Text>
										<Radio onChange={e => handleChange(e)} colorScheme='red' id='soltero' value='soltero' />
									</Flex>

									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#015796'
											mr='10px'
											htmlFor='casado'
										>
											Casado/a
										</Text>
										<Radio onChange={e => handleChange(e)} colorScheme='red' id='casado' value='casado' />
									</Flex>

									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#015796'
											mr='10px'
											htmlFor='viudo'
										>
											Viudo/a
										</Text>
										<Radio onChange={e => handleChange(e)} colorScheme='red' id='viudo' value='viudo' />
									</Flex>

									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#015796'
											mr='10px'
											htmlFor='otro-estado'
										>
											Otro
										</Text>
										<Radio
											onChange={e => handleChange(e)} colorScheme='red'
											id='otro-estado'
											value='otro-estado'
										/>
									</Flex>

									{/* <Flex>
										<Input placeholder='Especificar' />
									</Flex> */}
								</RadioGroup>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Text color='#015796' pb='7px'>
									Género*:
								</Text>

								<RadioGroup
									display='grid'
									name='gender'
									value={data.gender}
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
											color='#015796'
											mr='10px'
											htmlFor='hombre'
										>
											Hombre
										</Text>
										<Radio onChange={e => handleChange(e)} colorScheme='red' id='hombre' value='hombre' />
									</Flex>

									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#015796'
											mr='10px'
											htmlFor='mujer'
										>
											Mujer
										</Text>
										<Radio onChange={e => handleChange(e)} colorScheme='red' id='mujer' value='mujer' />
									</Flex>

									<Flex alignItems='center'>
										<Text
											fontSize='14px'
											as='label'
											color='#015796'
											mr='10px'
											htmlFor='otro-genero'
										>
											Otro
										</Text>
										<Radio
											onChange={e => handleChange(e)} colorScheme='red'
											id='otro-genero'
											value='otro-genero'
										/>
									</Flex>

									{/* <Flex>
										<Input placeholder='Especificar' />
									</Flex> */}
								</RadioGroup>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Select name='children' onChange={e => handleChange(e)} isRequired>
										<option value=''>Cantidad de hijos</option>
										<option value='0'>Ninguno</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>3+</option>
									</Select>
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input isRequired name='phone' onChange={e => handleChange(e)} type='number' placeholder='Teléfono/celular*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input isRequired name='email' onChange={e => handleChange(e)} type='email' placeholder='E-mail*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input isRequired name='direction' onChange={e => handleChange(e)} placeholder='Dirección*' />
								</Box>
							</Box>

							<Grid
								gridTemplateColumns='repeat(2, 1fr)'
								w={{ base: '100%', lg: '60%' }}
								gap='32px'
							>
								<Select name='state' onChange={e => handleChange(e)} isRequired>
									<option value=''>Departamento*</option>
									{dptos.map((dpto, key) => (
										<option id={`dpto-${key}`} value={dpto}>{dpto}</option>
									))}
								</Select>

								<Select name='city' onChange={e => handleChange(e)} isRequired>
									<option value=''>Ciudad*</option>
									{cities.map((city, key) => (
										<option id={`city-${key}`} value={city}>{city}</option>
									))}
								</Select>
							</Grid>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input isRequired name='profession' onChange={e => handleChange(e)} placeholder='Profesión*' />
								</Box>
							</Box>

							<Box w='100%'>
								<Box w='100%' h='4px' bgColor='#d21a28' mt='48px' />
							</Box>

							<Text color='#015796' fontWeight='bold' fontSize='22px' pb='7px'>
								CARGO AL QUE SE POSTULA
							</Text>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input isRequired name='position' onChange={e => handleChange(e)} placeholder='Cargo*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Select name='department' onChange={e => handleChange(e)} isRequired>
									<option value=''>Departamento*</option>
									<option value='administracion'>Administración</option>
									<option value='comercial'>Comercial</option>
									<option value='logistica'>Logística</option>
									<option value='rrhh'>RRHH</option>
									<option value='marketing'>Marketing</option>
									<option value='servicios-generales'>Servicios Generales</option>
								</Select>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input isRequired name='salary_expectation' onChange={e => handleChange(e)} type='number' placeholder='Expectativa salarial*' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Box>
									<Input isRequired name='linkedin' onChange={e => handleChange(e)} type='url' placeholder='Link URL de perfil de LinkedIn' />
								</Box>
							</Box>

							<Box w={{ base: '100%', lg: '60%' }}>
								<Input isRequired id='file' accept='application/pdf' name='file' onChange={(e) => handleFileChange(e)} display='none' type='file' />
								<Button
									onClick={() => handleClick()}
									border='0'
									borderBottom='1px solid #015796'
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
									<Text color='#015796'>Adjuntar archivo y/o CV*</Text>
									<Text color='#015796' fontSize='22px'>
										<AiOutlinePaperClip />
									</Text>
								</Button>
								<Text color='#015796' fontSize='sm' mt='3px' pl='10px'>
									{/* nombre-archivo.pdf */}
								</Text>
							</Box>
						</Grid>

						<Box mt='32px'>
							<Button
								type={`submit`}
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
