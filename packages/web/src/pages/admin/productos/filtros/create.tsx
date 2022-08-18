import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Box, Button, Flex, Image, Grid, Input, Text } from '@chakra-ui/react';
import { BsArrowLeftShort } from 'react-icons/bs';

import AdminLayout from '../../../../layout/admin';
import { FileType } from '../../../../interfaces/image';
import { useImage } from '../../../../hooks/useImage';
import { createFiltro, updateFiltro } from '../../../../utils';

const CreateFiltroAdmin = () => {
	const router = useRouter();

	const [filtroInfo, setFiltroInfo] = useState<any>({
		altura: '',
		dia_ext: '',
		dia_int: '',
		estado: true,
		imagen: '',
		linea: '',
		modelo: '',
		nombre: '',
		orden: 1,
		rosca: '',
		tipo: '',
		val_ali: '',
		val_anti_ret: '',
	});

	const inputImgRef = useRef(null);
	const [imageExist, setImageExist] = useState(null);
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

	const handleUpdateSuccessInfo = async () => {
		if (image) {
			const responseImage = await useImage(fileImage as string, 'filtros');

			const filtroInfoUpdated = {
				...filtroInfo,
				imagen: responseImage,
			};

			delete filtroInfoUpdated.id;
			const response = await createFiltro(filtroInfoUpdated);

			if (response.success) {
				toast.success('Actualizado correctamente!');
				return router.push('/admin/productos/filtros');
			} else {
				toast.error('Hubo un problema al actualizar');
				return router.push('/admin/productos/filtros');
			}
		} else {
			const filtroInfoUpdated = {
				...filtroInfo,
			};

			delete filtroInfoUpdated.id;
			const response = await updateFiltro(filtroInfo.id, filtroInfoUpdated);

			if (response.success) {
				toast.success('Actualizado correctamente!');
				return router.push('/admin/productos/filtros');
			} else {
				toast.error('Hubo un problema al actualizar');
				return router.push('/admin/productos/filtros');
			}
		}
	};

	return (
		<AdminLayout
			title={filtroInfo.title}
			back={
				<Box>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						onClick={() => router.push(`/admin/productos/filtros`)}
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
				<Box w={['100%', '90%', '80%']}>
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
									value={filtroInfo.nombre}
									onChange={e =>
										setFiltroInfo({ ...filtroInfo, nombre: e.target.value })
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
									Altura
								</Text>
								<Input
									rounded='3px'
									value={filtroInfo.altura}
									onChange={e =>
										setFiltroInfo({ ...filtroInfo, altura: e.target.value })
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
									Linea
								</Text>
								<Input
									rounded='3px'
									value={filtroInfo.linea}
									onChange={e =>
										setFiltroInfo({ ...filtroInfo, linea: e.target.value })
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
									Modelo
								</Text>
								<Input
									rounded='3px'
									value={filtroInfo.modelo}
									onChange={e =>
										setFiltroInfo({ ...filtroInfo, modelo: e.target.value })
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
									Rosca
								</Text>
								<Input
									rounded='3px'
									value={filtroInfo.rosca}
									onChange={e =>
										setFiltroInfo({ ...filtroInfo, rosca: e.target.value })
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
									Tipo
								</Text>
								<Input
									rounded='3px'
									value={filtroInfo.tipo}
									onChange={e =>
										setFiltroInfo({ ...filtroInfo, tipo: e.target.value })
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
									Válvula alívio
								</Text>
								<Input
									rounded='3px'
									value={filtroInfo.val_ali}
									onChange={e =>
										setFiltroInfo({ ...filtroInfo, val_ali: e.target.value })
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
									Válvula anti retorno SI
								</Text>
								<Input
									rounded='3px'
									value={filtroInfo.val_anti_ret}
									onChange={e =>
										setFiltroInfo({
											...filtroInfo,
											val_anti_ret: e.target.value,
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
									Dia Int
								</Text>
								<Input
									rounded='3px'
									value={filtroInfo.dia_int}
									onChange={e =>
										setFiltroInfo({
											...filtroInfo,
											dia_int: e.target.value,
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
									Dia Ext
								</Text>
								<Input
									rounded='3px'
									value={filtroInfo.dia_ext}
									onChange={e =>
										setFiltroInfo({
											...filtroInfo,
											dia_ext: e.target.value,
										})
									}
								/>
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

							{!image && (
								<Text fontSize='12px' color='#555' textTransform='uppercase'>
									No hay imagen seleccionada
								</Text>
							)}
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

						<Flex>
							{/* <Flex alignItems='center' mr='20px'>
								<Text mr='12px'>Estado:</Text>
								<Switch
									id='email-alerts'
									size={`lg`}
									defaultChecked={filtroInfo.estado}
									onChange={() =>
										setFiltroInfo({
											...filtroInfo,
											estado: !filtroInfo.estado,
										})
									}
								/>
							</Flex> */}
							{/* <Flex alignItems='center'>
								<Text mr='12px'>Orden:</Text>
								<Input
									w='100px'
									value={filtroInfo.orden}
									onChange={e =>
										setFiltroInfo({
											...filtroInfo,
											orden: Number(e.target.value),
										})
									}
								/>
							</Flex> */}
						</Flex>

						<Box>
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

export default CreateFiltroAdmin;
