import React, { useEffect, useRef, useState } from 'react';
import produce from 'immer';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import {
	Box,
	Button,
	Flex,
	Grid,
	Image,
	Input,
	Select,
	Switch,
	Text,
	Textarea,
} from '@chakra-ui/react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { FaPlus, FaTrash } from 'react-icons/fa';

import AdminLayout from '../../../layout/admin';
import { createVacancia } from '../../../utils/vacancias';
import { FileType } from '../../../interfaces/image';
import { useImage } from '../../../hooks/useImage';

const profiles = [
	{ id: '2', title: 'Administración', value: 'administracion' },
	{ id: '4', title: 'Comercial', value: 'comercial' },
	{ id: '5', title: 'Logística', value: 'logistica' },
	{ id: '6', title: 'RRHH', value: 'rrhh' },
	{ id: '7', title: 'Marketing', value: 'marketing' },
	{ id: '8', title: 'Servicios Generales', value: 'serv-generales' },
];

const VacanciaAdminCreate = () => {
	const router = useRouter();

	const [vacancia, setVacancia] = useState<any>({});

	const [preguntasArray, setPreguntasArray] = useState<any>(['']);
	const [vigenciaInfo, setVigenciaInfo] = useState<string>('');
	const [requisitosArray, setRequisitosArray] = useState<any>(['']);

	const inputImgRef = useRef(null);
	const [imageExist, setImageExist] = useState<string>('');
	const [image, setImage] = useState<string | null>(null);
	const [fileImage, setFileImage] = useState<FileType | string | Blob>();

	const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.currentTarget as HTMLInputElement;
		const file = target.files[0];
		const image = URL.createObjectURL(file);
		setImage(image);
		setImageExist(image);
		setFileImage(file);
	};

	useEffect(() => {
		setImage(null);
		setFileImage(null);
	}, []);

	const handleAddDescriptionArray = () => {
		setPreguntasArray([...preguntasArray, '']);
	};

	const handleDeleteDescriptionArray = (body: any) => {
		setPreguntasArray((current: any) =>
			current.filter((item: any) => item !== body)
		);
	};

	const handleAddRequisitosArray = () => {
		setRequisitosArray([...requisitosArray, '']);
	};

	const handleDeleteRequisitosArray = (body: any) => {
		setRequisitosArray((current: any) =>
			current.filter((item: any) => item !== body)
		);
	};

	const handleVacancialUpdate = async () => {
		if (!vacancia.titulo) {
			return toast('El título es obligatorio!', {
				icon: '🤨',
			});
		}

		const result = preguntasArray?.some(item => item === '');

		if (result) {
			return toast('Todos los campos son obligatorios!', {
				icon: '🤨',
			});
		}

		if (!image || !fileImage) {
			return toast('Todos los campos son obligatorios!', {
				icon: '🤨',
			});
		}

		const result2 = requisitosArray?.some(item => item === '');

		if (result) {
			return toast('Todos los campos son obligatorios!', {
				icon: '🤨',
			});
		}

		if (result2) {
			return toast('Todos los campos son obligatorios!', {
				icon: '🤨',
			});
		}

		const responseImage = await useImage(fileImage as string, 'vacancias');

		const vacanciaUpdated = {
			...vacancia,
			preguntas: preguntasArray,
			requisitos: requisitosArray,
			vigencia: vigenciaInfo,
			imagen: responseImage,
		};

		const response = await createVacancia(vacanciaUpdated);

		if (response.success) {
			toast.success('Creado correctamente!');
			return router.push('/admin/vacancias');
		} else {
			toast.error('Hubo un problema al crear');
			router.push('/admin/vacancias');
		}
	};

	return (
		<AdminLayout
			title={vacancia?.titulo}
			back={
				<Box>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						onClick={() => router.push('/admin/vacancias')}
						display='flex'
						alignItems='center'
					>
						<Text fontSize='22px' mr='5px'>
							<BsArrowLeftShort />
						</Text>
						<Text color='#3B4A67' fontWeight='medium'>
							Volver
						</Text>
					</Button>
				</Box>
			}
		>
			<Box padding='20px'>
				<Box w={['100%']}>
					<Box>
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Título
							</Text>
							<Input
								rounded='3px'
								value={vacancia?.titulo}
								onChange={e =>
									setVacancia({ ...vacancia, titulo: e.target.value })
								}
							/>
						</Box>

						<Grid gap='32px' mb='20px' gridTemplateColumns='repeat(2, 1fr)'>
							<Box>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Requisitos
								</Text>
								<Box>
									{requisitosArray?.map((item: any, index: number) => (
										<Grid
											gridTemplateColumns='1fr repeat(2, auto)'
											key={index}
											gap='0 10px'
											alignItems='center'
											mb='15px'
										>
											<Textarea
												rounded='3px'
												h='10rem'
												resize='none'
												value={item}
												onChange={e => {
													const text = e.target.value;
													setRequisitosArray(currentDescription =>
														produce(currentDescription, v => {
															v[index] = text;
														})
													);
												}}
											/>
											<Button
												display='block'
												minW='initial'
												h='10rem'
												bgColor='gray.200'
												color='blue.700'
												p='0 15px'
												_hover={{ bgColor: 'gray.200' }}
												onClick={handleAddRequisitosArray}
											>
												<FaPlus />
											</Button>
											<Button
												display='block'
												minW='initial'
												h='10rem'
												bgColor='gray.600'
												color='#fff'
												p='0 15px'
												_hover={{ bgColor: 'gray.600' }}
												onClick={() => handleDeleteRequisitosArray(item)}
											>
												<FaTrash />
											</Button>
										</Grid>
									))}
								</Box>

								<Button
									minW='initial'
									h='3rem'
									mt='10px'
									bgColor='gray.200'
									rounded='2px'
									color='blue.700'
									p='0 15px'
									_hover={{ bgColor: 'gray.200' }}
									onClick={() => handleAddDescriptionArray()}
									display={requisitosArray.length > 0 ? 'none' : 'block'}
								>
									Agregar requisito
								</Button>
							</Box>
							<Box>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Ofrecemos
								</Text>
								<Box>
									{preguntasArray?.map((item: any, index: number) => (
										<Grid
											gridTemplateColumns='1fr repeat(2, auto)'
											key={index}
											gap='0 10px'
											alignItems='center'
											mb='15px'
										>
											<Textarea
												rounded='3px'
												h='10rem'
												resize='none'
												value={item}
												onChange={e => {
													const text = e.target.value;
													setPreguntasArray(currentDescription =>
														produce(currentDescription, v => {
															v[index] = text;
														})
													);
												}}
											/>
											<Button
												display='block'
												minW='initial'
												h='10rem'
												bgColor='gray.200'
												color='blue.700'
												p='0 15px'
												_hover={{ bgColor: 'gray.200' }}
												onClick={handleAddDescriptionArray}
											>
												<FaPlus />
											</Button>
											<Button
												display='block'
												minW='initial'
												h='10rem'
												bgColor='gray.600'
												color='#fff'
												p='0 15px'
												_hover={{ bgColor: 'gray.600' }}
												onClick={() => handleDeleteDescriptionArray(item)}
											>
												<FaTrash />
											</Button>
										</Grid>
									))}
								</Box>

								<Button
									minW='initial'
									h='3rem'
									mt='10px'
									bgColor='gray.200'
									rounded='2px'
									color='blue.700'
									p='0 15px'
									_hover={{ bgColor: 'gray.200' }}
									onClick={() => handleAddRequisitosArray()}
									display={preguntasArray.length > 0 ? 'none' : 'block'}
								>
									Agregar item
								</Button>
							</Box>
						</Grid>

						<Flex mb='20px' alignItems='center'>
							<Box mr='20px'>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Vigencia
								</Text>
								<Input
									width='200px'
									type='date'
									value={vigenciaInfo}
									onChange={e => setVigenciaInfo(e.target.value)}
								/>
							</Box>
							<Box>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Área
								</Text>
								<Select
									onChange={e =>
										setVacancia({ ...vacancia, area: e.target.value })
									}
								>
									<option value={null}>Seleccione un área</option>
									{profiles.map(item => (
										<option key={item.id} value={item.value}>
											{item.title}
										</option>
									))}
								</Select>
							</Box>
						</Flex>

						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Imagen
							</Text>

							<Box>
								{image && (
									<Image
										src={image}
										h='200px'
										verticalAlign='top'
										alt='Dan Abramov'
										objectFit='contain'
									/>
								)}
							</Box>

							<Text color='#333' fontSize='12px' mt='20px'>
								Tamaño recomendado 800px x 800px
							</Text>

							<Box mt='15px'>
								<Button
									bgColor='transparent'
									borderRadius={`3px`}
									h={`50px`}
									minW={`initial`}
									p={`0 28px`}
									border='1px solid #3B4A67'
									_focus={{ shadow: 0 }}
									color='#3B4A67'
									fontWeight={`normal`}
									_hover={{ backgroundColor: `#FFF` }}
									_active={{ backgroundColor: `#FFF` }}
									onClick={() => {
										console.log('hello');
										return inputImgRef.current.click();
									}}
								>
									{image ? 'Cambiar imagen' : 'Añadir imagen'}
								</Button>
								<Input
									ref={inputImgRef}
									type='file'
									onChange={handleChangeImage}
									display='none'
								/>
							</Box>
						</Box>

						<Box mt='30px'>
							<Button
								fontWeight='medium'
								rounded='3px'
								h='50px'
								bgColor='#8C95A6'
								color='#fff'
								px='32px'
								_hover={{ bgColor: '#8C95A6' }}
								onClick={handleVacancialUpdate}
							>
								Crear información
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</AdminLayout>
	);
};

export default VacanciaAdminCreate;
