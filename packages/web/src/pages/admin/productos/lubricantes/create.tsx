import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import {
	Box,
	Button,
	Flex,
	Image,
	Grid,
	Input,
	Switch,
	Text,
	Textarea,
} from '@chakra-ui/react';
import { BsArrowLeftShort } from 'react-icons/bs';

import AdminLayout from '../../../../layout/admin';
import { FileType } from '../../../../interfaces/image';
import { useImage } from '../../../../hooks/useImage';
import { updateFiltro } from '../../../../utils';

import produce from 'immer';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { createLubricante } from '../../../../utils/lubricants';

const LubricantesAdminCreate = () => {
	const router = useRouter();

	const [lubricantesInfo, setLubricantesInfo] = useState<any>({
		aprobado: '',
		atiende_excede: '',
		especificacion: '',
		imagen: '',
		indicado_para: '',
		linea: '',
		nombre: '',
		presentacion: '',
		rec_exxon_mob: '',
		rec_honda: false,
	});

	const inputImgRef = useRef(null);
	const [imageExist, setImageExist] = useState(null);
	const [image, setImage] = useState<string | null>(null);
	const [fileImage, setFileImage] = useState<FileType | string | Blob>();
	const [descriptionArray, setDescriptionArray] = useState<any[]>(
		lubricantesInfo.description || []
	);
	const [caracteristicas, setCaracteristicas] = useState<any[]>(
		lubricantesInfo.caracteristicas || []
	);

	const handleAddDescriptionArray = () => {
		setDescriptionArray([...descriptionArray, '']);
	};

	const handleDeleteDescriptionArray = (body: any) => {
		setDescriptionArray((current: any) =>
			current.filter((item: any) => item !== body)
		);
	};

	const handleAddCaracteristicasArray = () => {
		setCaracteristicas([...caracteristicas, '']);
	};

	const handleDeleteCaracteristicasArray = (body: any) => {
		setCaracteristicas((current: any) =>
			current.filter((item: any) => item !== body)
		);
	};

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

	const handleUpdateSuccessInfo = async () => {
		if (image) {
			const responseImage = await useImage(fileImage as string, 'lubricantes');

			const lubricantesInfoUpdated = {
				...lubricantesInfo,
				imagen: responseImage,
				caracteristicas,
				descripcion: descriptionArray,
			};

			const response = await createLubricante(lubricantesInfoUpdated);

			if (response.success) {
				toast.success('Creado correctamente!');
				return router.push('/admin/productos/lubricantes');
			} else {
				toast.error('Hubo un problema al crear');
				return router.push('/admin/productos/lubricantes');
			}
		} else {
			const lubricantesInfoUpdated = {
				...lubricantesInfo,
				caracteristicas,
				descripcion: descriptionArray,
			};

			const response = await createLubricante(lubricantesInfoUpdated);

			if (response.success) {
				toast.success('Creado correctamente!');
				return router.push('/admin/productos/lubricantes');
			} else {
				toast.error('Hubo un problema al crear');
				return router.push('/admin/productos/lubricantes');
			}
		}
	};

	return (
		<AdminLayout
			title={lubricantesInfo.nombre}
			back={
				<Box>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						onClick={() => router.push(`/admin/productos/lubricantes`)}
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
			<Box padding='20px 20px 40px 20px'>
				<Box w={['100%']}>
					<Box>
						<Grid
							gridTemplateColumns={{
								base: '1fr',
								md: 'repeat(2, 1fr)',
								lg: 'repeat(3, 1fr)',
							}}
							gap='16px 32px'
						>
							<Box as='article' mb='20px'>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Nombre
								</Text>
								<Input
									rounded='3px'
									value={lubricantesInfo.nombre}
									onChange={e =>
										setLubricantesInfo({
											...lubricantesInfo,
											nombre: e.target.value,
										})
									}
								/>
							</Box>

							<Box as='article' mb='20px'>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Aprobado
								</Text>
								<Input
									rounded='3px'
									value={lubricantesInfo.aprobado || ''}
									onChange={e =>
										setLubricantesInfo({
											...lubricantesInfo,
											aprobado: e.target.value,
										})
									}
								/>
							</Box>

							<Box as='article' mb='20px'>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Atiende excede
								</Text>
								<Input
									rounded='3px'
									value={lubricantesInfo.atiende_excede || ''}
									onChange={e =>
										setLubricantesInfo({
											...lubricantesInfo,
											atiende_excede: e.target.value,
										})
									}
								/>
							</Box>

							<Box as='article' mb='20px'>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Especificación
								</Text>
								<Input
									rounded='3px'
									value={lubricantesInfo.especificacion || ''}
									onChange={e =>
										setLubricantesInfo({
											...lubricantesInfo,
											especificacion: e.target.value,
										})
									}
								/>
							</Box>

							<Box as='article' mb='20px'>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Indicado para
								</Text>
								<Input
									rounded='3px'
									value={lubricantesInfo.indicado_para || ''}
									onChange={e =>
										setLubricantesInfo({
											...lubricantesInfo,
											indicado_para: e.target.value,
										})
									}
								/>
							</Box>

							<Box as='article' mb='20px'>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Línea
								</Text>
								<Input
									rounded='3px'
									value={lubricantesInfo.linea || ''}
									onChange={e =>
										setLubricantesInfo({
											...lubricantesInfo,
											linea: e.target.value,
										})
									}
								/>
							</Box>

							<Box as='article' mb='20px'>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Presentación
								</Text>
								<Input
									rounded='3px'
									value={lubricantesInfo.presentacion || ''}
									onChange={e =>
										setLubricantesInfo({
											...lubricantesInfo,
											presentacion: e.target.value,
										})
									}
								/>
							</Box>

							<Box as='article' mb='20px'>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='5px'
									color='#555'
								>
									Recomendado por ExxonMobil para
								</Text>
								<Input
									rounded='3px'
									value={lubricantesInfo.rec_exxon_mob || ''}
									onChange={e =>
										setLubricantesInfo({
											...lubricantesInfo,
											rec_exxon_mob: e.target.value,
										})
									}
								/>
							</Box>
						</Grid>

						<Grid
							gap='32px'
							gridTemplateColumns='repeat(2, 1fr)'
							mt='10px'
							mb='20px'
						>
							<Box>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='10px'
									color='#555'
								>
									Descripción
								</Text>

								{!descriptionArray || descriptionArray.length === 0 ? (
									<Box>
										<Text fontSize='14px' textTransform='uppercase'>
											No hay descripción
										</Text>

										<Button
											maxW='initial'
											h='50px'
											border='1px solid #d9d9d9'
											bgColor='#fff'
											fontWeight='regular'
											color='#555'
											borderRadius='3px'
											mt='10px'
											_hover={{ bgColor: '#fff' }}
											onClick={handleAddDescriptionArray}
										>
											Agregar descripción
										</Button>
									</Box>
								) : (
									descriptionArray?.map((item: any, index: number) => (
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
									))
								)}
							</Box>
							<Box>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mb='10px'
									color='#555'
								>
									Características
								</Text>

								{!caracteristicas || caracteristicas.length === 0 ? (
									<Box>
										<Text fontSize='14px' textTransform='uppercase'>
											No hay descripción
										</Text>

										<Button
											maxW='initial'
											h='50px'
											border='1px solid #d9d9d9'
											bgColor='#fff'
											fontWeight='regular'
											color='#555'
											borderRadius='3px'
											mt='10px'
											_hover={{ bgColor: '#fff' }}
											onClick={handleAddCaracteristicasArray}
										>
											Agregar descripción
										</Button>
									</Box>
								) : (
									caracteristicas?.map((item: any, index: number) => (
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
													setCaracteristicas(currentDescription =>
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
												onClick={handleAddCaracteristicasArray}
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
												onClick={() => handleDeleteCaracteristicasArray(item)}
											>
												<FaTrash />
											</Button>
										</Grid>
									))
								)}
							</Box>
						</Grid>

						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Fondo
							</Text>

							<Box>
								{image && (
									<Image
										src={image}
										// w='200px'
										h='200px'
										verticalAlign='top'
										alt='Dan Abramov'
										objectFit='contain'
									/>
								)}
							</Box>

							<Box mt='20px'>
								<Button
									bgColor='transparent'
									borderRadius={`3px`}
									h={`50px`}
									minW={`initial`}
									p={`0 28px`}
									border='1px solid #3B4A67'
									onClick={() => inputImgRef.current.click()}
									_focus={{ shadow: 0 }}
									color='#3B4A67'
									fontWeight={`normal`}
									_hover={{ backgroundColor: `#FFF` }}
									_active={{ backgroundColor: `#FFF` }}
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

						<Flex alignItems='center'>
							{/* <Flex alignItems='center' mr='20px'>
								<Text mr='12px'>Estado:</Text>
								<Switch
									id='email-alerts'
									size={`lg`}
									defaultChecked={lubricantesInfo.estado}
									onChange={() =>
										setLubricantesInfo({
											...lubricantesInfo,
											estado: !lubricantesInfo.estado,
										})
									}
								/>
							</Flex>
							<Flex alignItems='center'>
								<Text mr='12px'>Orden:</Text>
								<Input
									w='100px'
									value={lubricantesInfo.orden}
									onChange={e =>
										setLubricantesInfo({
											...lubricantesInfo,
											orden: Number(e.target.value),
										})
									}
								/>
							</Flex> */}

							<Flex ml='20px' alignItems='center' mr='20px'>
								<Text
									fontSize='12px'
									fontWeight='medium'
									textTransform='uppercase'
									mr='20px'
									color='#555'
								>
									Recomendado
									<br /> por honda:
								</Text>
								<Switch
									id='rec_honda'
									size={`lg`}
									defaultChecked={lubricantesInfo.rec_honda}
									onChange={() =>
										setLubricantesInfo({
											...lubricantesInfo,
											rec_honda: !lubricantesInfo.rec_honda,
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
								onClick={handleUpdateSuccessInfo}
							>
								Crear producto
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</AdminLayout>
	);
};

export default LubricantesAdminCreate;
