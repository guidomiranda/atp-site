import React, { useEffect, useRef, useState } from 'react';
import produce from 'immer';
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
import { FaPlus, FaTrash } from 'react-icons/fa';

import AdminLayout from '../../../layout/admin';
import { getBanner, updateBanner } from '../../../utils';
import { FileType } from '../../../interfaces/image';
import { useImage } from '../../../hooks/useImage';

export const getServerSideProps: GetServerSideProps = async context => {
	const banner = await getBanner(context.query.id as string);
	return { props: { banner: banner.banner } };
};

const BannerAdminEdit = ({ banner }) => {
	const router = useRouter();

	const [bannerInfo, setBannerInfo] = useState<any>(banner);
	const [descriptionArray, setDescriptionArray] = useState<any[]>(
		banner.description
	);

	const inputImgRef = useRef(null);
	const [imageExist, setImageExist] = useState(banner.bg);
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
		setDescriptionArray([...descriptionArray, '']);
	};

	const handleDeleteDescriptionArray = (body: any) => {
		setDescriptionArray((current: any) =>
			current.filter((item: any) => item !== body)
		);
	};

	const handleUpdateSuccessInfo = async () => {
		if (image) {
			const responseImage = await useImage(fileImage as string, 'banner');

			const bannerInfoUpdated = {
				...bannerInfo,
				bg: responseImage,
				description: descriptionArray,
			};

			delete bannerInfoUpdated.id;

			const response = await updateBanner(bannerInfo.id, bannerInfoUpdated);

			if (response.success) {
				toast.success('Actualizado correctamente!');
				return router.push('/admin/banner');
			} else {
				toast.error('Hubo un problema al actualizar');
				return router.push('/admin/banner');
			}
		} else {
			const bannerInfoUpdated = {
				...bannerInfo,
				description: descriptionArray,
			};

			delete bannerInfoUpdated.id;

			const response = await updateBanner(bannerInfo.id, bannerInfoUpdated);

			if (response.success) {
				toast.success('Actualizado correctamente!');
				return router.push('/admin/banner');
			} else {
				toast.error('Hubo un problema al actualizar');
				return router.push('/admin/banner');
			}
		}
	};

	return (
		<AdminLayout
			title={bannerInfo.title}
			back={
				<Box>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						onClick={() => router.push('/admin/banner')}
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
								value={bannerInfo.title}
								onChange={e =>
									setBannerInfo({ ...bannerInfo, title: e.target.value })
								}
							/>
						</Box>

						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='10px'
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

								{descriptionArray.length === 0 && (
									<Button
										display='block'
										minW='initial'
										h='auto'
										rounded='3px'
										border='1px solid #8C95A6'
										color='#8C95A6'
										bgColor='#fff'
										p='15px 32px'
										fontWeight='medium'
										_hover={{ bgColor: '#fff' }}
										onClick={handleAddDescriptionArray}
									>
										Agregar descripción
									</Button>
								)}
							</Box>
						</Box>

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
								{banner.bg && (
									<Image
										src={image || bannerInfo.bg}
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
									defaultChecked={bannerInfo.status}
									onChange={() =>
										setBannerInfo({
											...bannerInfo,
											status: !bannerInfo.status,
										})
									}
								/>
							</Flex>
							<Flex alignItems='center'>
								<Text mr='12px'>Orden:</Text>
								<Input
									w='100px'
									value={bannerInfo.order}
									onChange={e =>
										setBannerInfo({
											...bannerInfo,
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

export default BannerAdminEdit;
