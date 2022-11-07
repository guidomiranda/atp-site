import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Image, Input, Text } from '@chakra-ui/react';
import { BsArrowLeftShort } from 'react-icons/bs';

import AdminLayout from '../../../../layout/admin';
import toast from 'react-hot-toast';

import { FileType } from '../../../../interfaces/image';
import { useImage } from '../../../../hooks/useImage';
import { createVoucher } from '../../../../utils/vouchers';

const ClientAdminEdit = () => {
	const router = useRouter();

	const [clientInfo, setClientInfo] = useState<any>({
		nombre: '',
		link: '',
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

	const handleUpdateClientInfo = async () => {
		if (!clientInfo.nombre || !image) {
			return toast('Todos los campos son obligatorios!', {
				icon: '🤨',
			});
		}

		const responseImage = await useImage(fileImage as string, 'promociones/vouchers');

		const clientInfoUpdated = {
			...clientInfo,
			imagen: responseImage,
		};

		const response = await createVoucher(clientInfoUpdated);

		if (response.success) {
			toast.success('Creado correctamente!');
			return router.push('/admin/promociones/vouchers');
		} else {
			toast.error('Hubo un problema al crear');
			router.push('/admin/promociones/vouchers');
		}
	};

	return (
		<AdminLayout
			title={clientInfo.nombre}
			back={
				<Box>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						onClick={() => router.push('/admin/promociones/vouchers')}
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
								Nombre
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.nombre}
								onChange={e =>
									setClientInfo({ ...clientInfo, nombre: e.target.value })
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
								Link
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.link}
								onChange={e =>
									setClientInfo({ ...clientInfo, link: e.target.value })
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
								Imagen
							</Text>

							<Box>
								{image && (
									<Image
										src={image || image}
										h='200px'
										verticalAlign='top'
										alt={clientInfo.nombre}
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
								onClick={handleUpdateClientInfo}
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

export default ClientAdminEdit;
