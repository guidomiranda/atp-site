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

import { getVoucher, updateVoucher } from '../../../../utils/vouchers';
import AdminLayout from '../../../../layout/admin/index';

export const getServerSideProps: GetServerSideProps = async context => {
	const client = await getVoucher(context.query.id as string);
	return { props: { client: client.data } };
};

const ClientAdminEdit = ({ client }) => {
	const router = useRouter();

	const [clientInfo, setClientInfo] = useState<any>(client);

	const handleUpdateClientInfo = async () => {
		if (!clientInfo.codigo) {
			return toast('Todos los campos son obligatorios!', {
				icon: '🤨',
			});
		}

		{
			const clientInfoUpdated = {
					codigo: clientInfo.codigo,
					fecha: clientInfo.fecha,
					canjeado: clientInfo.canjeado='true'?true:false,
					canjeadoFecha: clientInfo.canjeadoFecha,
					promocionId: clientInfo.promocionVoucher.id,
					productoId: clientInfo.promocionProducto.id,
					cantidad: parseInt(clientInfo.cantidad),
					usuarioId: clientInfo.usuario.id,
			};

			const response = await updateVoucher(clientInfo.id, clientInfoUpdated);

			if (response.success) {
				toast.success('Actualizado correctamente!');
				return router.push('/admin/promociones/vouchers');
			} else {
				toast.error('Hubo un problema al actualizar');
				router.push('/admin/promociones/vouchers');
			}
		}
	};

	return (
		<AdminLayout
			title={clientInfo.codigo}
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

						{/* CODIGO */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								codigo
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.codigo}
								onChange={e =>
									setClientInfo({ ...clientInfo, codigo: e.target.value })
								}
							/>
						</Box>

						{/* PRODUCTO */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Producto
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.promocionProducto.id}
								onChange={e =>
									setClientInfo({ ...clientInfo, productoId: e.target.value })
								}
							/>
							<Input
								rounded='3px'
								value={clientInfo.promocionProducto.nombre}
								onChange={e =>
									setClientInfo({ ...clientInfo, nombre: e.target.value })
								}
							/>						
						</Box>



						{/* CANTIDAD */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Cantidad
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.cantidad}
								onChange={e =>
									setClientInfo({ ...clientInfo, cantidad: e.target.value })
								}
							/>					
						</Box>

						{/* RAIDER */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Raider
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.usuario.id}
								onChange={e =>
									setClientInfo({ ...clientInfo, id: e.target.value })
								}
							/>	
							<Input
								rounded='3px'
								value={clientInfo.usuario.codigo}
								onChange={e =>
									setClientInfo({ ...clientInfo, codigo: e.target.value })
								}
							/>	
							<Input
								rounded='3px'
								value={clientInfo.usuario.nombre}
								onChange={e =>
									setClientInfo({ ...clientInfo, nombre: e.target.value })
								}
							/>					
						</Box>

						{/* CANJEADO */}
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Canjeado
							</Text>
							<Input
								rounded='3px'
								value={clientInfo.canjeado}
								onChange={e =>
									setClientInfo({ ...clientInfo, canjeado: e.target.value })
								}
							/>	
							<Input
								rounded='3px'
								value={clientInfo.canjeadoFecha}
								onChange={e =>
									setClientInfo({ ...clientInfo, canjeadoFecha: e.target.value })
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
