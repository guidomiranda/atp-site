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
import { getBattery, updateBattery } from '../../../../utils';

export const getServerSideProps: GetServerSideProps = async context => {
	const battery = await getBattery(context.query.id as string);
	return { props: { battery: battery.product } };
};

const BatteryAdminEdit = ({ battery }) => {
	const router = useRouter();

	const [batteryInfo, setBatteryInfo] = useState<any>(battery);

	const inputImgRef = useRef(null);
	const [imageExist, setImageExist] = useState(battery.image);
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
			const responseImage = await useImage(fileImage as string, 'baterias');

			const bannerInfoUpdated = {
				...batteryInfo,
				image: responseImage,
			};

			delete bannerInfoUpdated.id;
			const response = await updateBattery(batteryInfo.id, bannerInfoUpdated);

			if (response.success) {
				toast.success('Actualizado correctamente!');
				return router.push('/admin/productos/baterias');
			} else {
				toast.error('Hubo un problema al actualizar');
				return router.push('/admin/productos/baterias');
			}
		} else {
			const bannerInfoUpdated = {
				...batteryInfo,
			};

			delete bannerInfoUpdated.id;
			const response = await updateBattery(batteryInfo.id, bannerInfoUpdated);

			if (response.success) {
				toast.success('Actualizado correctamente!');
				return router.push('/admin/productos/baterias');
			} else {
				toast.error('Hubo un problema al actualizar');
				return router.push('/admin/productos/baterias');
			}
		}
	};

	return (
		<AdminLayout
			title={battery.title}
			back={
				<Box>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						onClick={() => router.push(`/admin/productos/baterias`)}
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
									Título
								</Text>
								<Input
									rounded='3px'
									value={batteryInfo.title}
									onChange={e =>
										setBatteryInfo({ ...batteryInfo, title: e.target.value })
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
									Capacidad
								</Text>
								<Input
									rounded='3px'
									value={batteryInfo.capacity}
									onChange={e =>
										setBatteryInfo({ ...batteryInfo, capacity: e.target.value })
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
									Categoría
								</Text>
								<Input
									rounded='3px'
									value={batteryInfo.category}
									onChange={e =>
										setBatteryInfo({ ...batteryInfo, category: e.target.value })
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
									CCA 10
								</Text>
								<Input
									rounded='3px'
									value={batteryInfo.cca10}
									onChange={e =>
										setBatteryInfo({ ...batteryInfo, cca10: e.target.value })
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
									value={batteryInfo.height}
									onChange={e =>
										setBatteryInfo({ ...batteryInfo, height: e.target.value })
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
									Largo
								</Text>
								<Input
									rounded='3px'
									value={batteryInfo.large}
									onChange={e =>
										setBatteryInfo({ ...batteryInfo, large: e.target.value })
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
									Polaridad
								</Text>
								<Input
									rounded='3px'
									value={batteryInfo.polarity}
									onChange={e =>
										setBatteryInfo({ ...batteryInfo, polarity: e.target.value })
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
									Ancho
								</Text>
								<Input
									rounded='3px'
									value={batteryInfo.width}
									onChange={e =>
										setBatteryInfo({ ...batteryInfo, width: e.target.value })
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

							<Box>
								{battery.image && (
									<Image
										src={image || battery.image}
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
									defaultChecked={batteryInfo.status}
									onChange={() =>
										setBatteryInfo({
											...batteryInfo,
											status: !batteryInfo.status,
										})
									}
								/>
							</Flex>
							<Flex alignItems='center'>
								<Text mr='12px'>Orden:</Text>
								<Input
									w='100px'
									value={batteryInfo.order}
									onChange={e =>
										setBatteryInfo({
											...batteryInfo,
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

export default BatteryAdminEdit;
