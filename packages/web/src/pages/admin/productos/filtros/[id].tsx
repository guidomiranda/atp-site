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
} from '@chakra-ui/react';
import { BsArrowLeftShort } from 'react-icons/bs';

import AdminLayout from '../../../../layout/admin';
import { FileType } from '../../../../interfaces/image';
import { useImage } from '../../../../hooks/useImage';
import { getFiltro, updateBattery, updateFiltro } from '../../../../utils';

export const getServerSideProps: GetServerSideProps = async context => {
	const filtro = await getFiltro(context.query.id as string);
	return { props: { filtro: filtro.data } };
};

const FiltroAdminEdit = ({ filtro }) => {
	const router = useRouter();

	const [filtroInfo, setFiltroInfo] = useState<any>(filtro);

	const inputImgRef = useRef(null);
	const [imageExist, setImageExist] = useState(filtro.imagen);
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
			const response = await updateFiltro(filtroInfo.id, filtroInfoUpdated);

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
			title={filtro.title}
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

							{filtroInfo.dia_int && (
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
							)}

							{filtroInfo.dia_ext && (
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
							)}
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
								{filtroInfo.imagen && (
									<Image
										src={image || filtroInfo.imagen}
										// w='200px'
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
									Cambiar imagen
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
							<Flex alignItems='center' mr='20px'>
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
							</Flex>
							<Flex alignItems='center'>
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
								Actualizar información
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</AdminLayout>
	);
};

export default FiltroAdminEdit;
