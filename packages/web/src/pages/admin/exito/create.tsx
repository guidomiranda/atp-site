import React, { useState } from 'react';
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

import AdminLayout from '../../../layout/admin';
import toast from 'react-hot-toast';
import { createSuccess } from '../../../utils';
import { FaPlus, FaTrash } from 'react-icons/fa';
import produce from 'immer';

const ExitoAdminCreate = () => {
	const router = useRouter();

	const [successInfo, setSuccessInfo] = useState<any>({
		title: '',
		status: true,
		order: 1,
	});
	const [descriptionArray, setDescriptionArray] = useState<any[]>(['']);

	const handleAddDescriptionArray = () => {
		setDescriptionArray([...descriptionArray, '']);
	};

	const handleDeleteDescriptionArray = (body: any) => {
		setDescriptionArray((current: any) =>
			current.filter((item: any) => item !== body)
		);
	};

	const handleCreateSuccessInfo = async () => {
		if (!successInfo.title || descriptionArray.length === 0) {
			return toast('Todos los campos son obligatorios!', {
				icon: '🤨',
			});
		}

		const result = descriptionArray.some(item => item === '');

		if (result) {
			return toast('Todos los campos son obligatorios!', {
				icon: '🤨',
			});
		}

		const successInfoCreated = {
			...successInfo,
			description: descriptionArray,
		};

		const response = await createSuccess(successInfoCreated);

		if (response.success) {
			toast.success('Creado correctamente!');
			return router.push('/admin/exito');
		} else {
			toast.error('Hubo un problema al crear');
			router.push('/admin/exito');
		}
	};

	return (
		<AdminLayout
			title='Crear caso de éxito'
			back={
				<Box>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						onClick={() => router.push('/admin/exito')}
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
								value={successInfo.title}
								onChange={e =>
									setSuccessInfo({ ...successInfo, title: e.target.value })
								}
							/>
						</Box>

						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Descripción
							</Text>
							<Box>
								{descriptionArray?.map((item: any, index: number) => (
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
												setDescriptionArray(currentDescription =>
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

						<Flex>
							{/* <Flex alignItems='center' mr='20px'>
								<Text mr='12px'>Estado:</Text>
								<Switch
									id='email-alerts'
									size={`lg`}
									defaultChecked={statusValue}
									onChange={() => setStatusValue(!statusValue)}
								/>
							</Flex> */}
							<Flex alignItems='center'>
								<Text mr='12px'>Orden:</Text>
								<Input
									w='100px'
									value={successInfo.order}
									onChange={e =>
										setSuccessInfo({
											...successInfo,
											order: Number(e.target.value),
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
								onClick={handleCreateSuccessInfo}
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

export default ExitoAdminCreate;
