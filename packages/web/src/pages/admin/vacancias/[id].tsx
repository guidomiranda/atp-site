import React, { useEffect, useState } from 'react';
import produce from 'immer';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import {
	Box,
	Button,
	Flex,
	Grid,
	Input,
	Switch,
	Text,
	Textarea,
} from '@chakra-ui/react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';

import AdminLayout from '../../../layout/admin';
import axios from '../../../config/axios';
import { updateVacancia } from '../../../utils/vacancias';

function usePost(id: string) {
	return useQuery(['post'], async () => {
		const data = await axios({
			method: 'GET',
			url: `/vacancias/${id}`,
		});

		return data.data.data;
	});
}

const VacanciaAdminEdit = ({ id }) => {
	const router = useRouter();

	const {
		data: vacanciaInfo,
		isFetching,
		error,
	} = usePost(router?.query?.id as string);

	const [vacancia, setVacancia] = useState<any>(
		isFetching ? null : vacanciaInfo
	);
	const [vacanciaEstado, setVacanciaEstado] = useState<boolean>(
		vacanciaInfo?.estado
	);
	const [preguntasArray, setPreguntasArray] = useState<any>(
		vacanciaInfo?.preguntas
	);
	const [vigenciaInfo, setVigenciaInfo] = useState<string>(
		vacanciaInfo?.vigencia
	);
	const [requisitosArray, setRequisitosArray] = useState<any>(
		vacanciaInfo?.requisitos
	);

	useEffect(() => {
		setVacancia(vacanciaInfo);
		setPreguntasArray(vacanciaInfo?.preguntas);
		setVigenciaInfo(vacanciaInfo?.vigencia);
		setRequisitosArray(vacanciaInfo?.requisitos);
	}, [vacanciaInfo]);

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
		if (!vacancia.titulo || preguntasArray.length === 0) {
			return toast('Todos los campos son obligatorios!', {
				icon: '🤨',
			});
		}

		const result = preguntasArray?.some(item => item === '');

		if (result) {
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

		const vacanciaUpdated = {
			...vacancia,
			preguntas: preguntasArray,
			requisitos: requisitosArray,
			vigencia: vigenciaInfo,
			estado: vacanciaEstado,
		};
		delete vacanciaUpdated.id;

		const response = await updateVacancia(vacancia.id, vacanciaUpdated);

		if (response.success) {
			toast.success('Actualizado correctamente!');
			return router.push('/admin/vacancias');
		} else {
			toast.error('Hubo un problema al actualizar');
			router.push('/admin/vacancias');
		}
	};

	if (!vacanciaInfo || !vacanciaInfo.titulo)
		return (
			<Grid w='100vw' h='100vh' placeItems='center'>
				<Box>
					<Text>Ha ocurrido un error al cargar</Text>
					<Flex justifyContent='center'>
						<Button mt={`15px`} onClick={() => router.push('/admin/vacancias')}>
							Volver
						</Button>
					</Flex>
				</Box>
			</Grid>
		);

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
									Preguntas
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
							</Box>
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
							</Box>
						</Grid>

						<Box w={['100%', '20%']} mb='20px'>
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
								type='date'
								value={vigenciaInfo}
								onChange={e => setVigenciaInfo(e.target.value)}
							/>
						</Box>

						<Flex>
							<Flex alignItems='center' mr='20px'>
								<Text mr='12px'>Estado:</Text>
								<Switch
									id='email-alerts'
									size={`lg`}
									defaultChecked={vacanciaEstado}
									onChange={() => setVacanciaEstado(!vacanciaEstado)}
								/>
							</Flex>
							<Flex alignItems='center'>
								<Text mr='12px'>Orden:</Text>
								<Input
									w='100px'
									value={vacancia?.orden}
									onChange={e =>
										setVacancia({
											...vacancia,
											orden: Number(e.target.value),
										})
									}
								/>
							</Flex>
						</Flex>

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
								Actualizar información
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</AdminLayout>
	);
};

export default VacanciaAdminEdit;
