import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	Switch,
	Text,
} from '@chakra-ui/react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import toast from 'react-hot-toast';

import { getEmpresa, updateEmpresa } from '../../../../utils/empresa';
import AdminLayout from '../../../../layout/admin/index';
import Select from '../../../../components/Select';

export const getServerSideProps: GetServerSideProps = async context => {
	const client = await getEmpresa(context.query.id as string);
	return { props: { client: client.data } };
};

const ClientAdminEdit = ({ client }) => {
	const router = useRouter();

	const [clientInfo, setClientInfo] = useState<any>(client);

	const handleUpdateClientInfo = async () => {
		if (!clientInfo.id) {
			return toast('Todos los campos son obligatorios!', {
				icon: '🤨',
			});
		}

		{
			const clientInfoUpdated = {
				...clientInfo
			};

			delete clientInfoUpdated.id;
			
			const response = await updateEmpresa(clientInfo.id, clientInfoUpdated);

			if (response.success) {
				toast.success('Actualizado correctamente!');
				return router.push('/admin/promociones/empresas');
			} else {
				toast.error('Hubo un problema al actualizar');
				router.push('/admin/promociones/empresas');
			}
		}
	};

	return (
		<AdminLayout
			title={clientInfo.id}
			back={
				<Box>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						onClick={() => router.push('/admin/promociones/empresas')}
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

						{/* id */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								id
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.id}
								readOnly
								onChange={e =>
									setClientInfo({ ...clientInfo, id: e.target.value })
								}
							/>
						</Box>

						{/* nombre */}
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

						{/* estado */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Estado
							</Text>

							<Select
								rounded='3px'
								value={clientInfo.estado}
								onChange={e =>
									setClientInfo({ ...clientInfo, estado: e.target.value })
								}
							>
								<option value={'true'}>
									Activo
								</option>
								<option value={'false'}>
									Inactivo
								</option>
							</Select>

						</Box>

						{/* fecha Inicio */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Inicio
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.fechaInicio}
								onChange={e =>
									setClientInfo({ ...clientInfo, fechaInicio: e.target.value })
								}
							/>				
						</Box>


						{/* Fecha Fin */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Fin
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.fechaFin}
								onChange={e =>
									setClientInfo({ ...clientInfo, fechaFin: e.target.value })
								}
							/>				
						</Box>

						{/* link */}
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

						{/* imagen */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								imagen
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.imagen}
								onChange={e =>
									setClientInfo({ ...clientInfo, imagen: e.target.value })
								}
							/>				
						</Box>	

						{/* orden */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Orden
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.orden}
								onChange={e =>
									setClientInfo({ ...clientInfo, orden: e.target.value })
								}
							/>				
						</Box>							

						{/* BOTON ACTUALIZAR */}
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
								Actualizar información
							</Button>
						</Box>

					</Box>
				</Box>
			</Box>
		</AdminLayout>
	);
};

export default ClientAdminEdit;
