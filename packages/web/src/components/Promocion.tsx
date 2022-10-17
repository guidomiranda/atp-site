import React, { useState, useEffect } from 'react';
import {
	Box,
	Button,
	Flex,
	Heading,
	Radio,
	RadioGroup,
	Text,
} from '@chakra-ui/react';
import Input from '../components/Input';
import LayoutMin from '../components/LayoutMin';
import Select from '../components/Select';
import axios from '../config/axios';
import dateFormat from '../helpers/dateFormat';
import { Voucher } from '../components/Voucher';

export const Promocion = ({ hiddenForm }) => {
	const initialState = {
		promocionId: '63408a498b1a57b742cc11d1',
		promocionNombre: 'PROMOCION PEDIDOS YA',
		productoId: '',
		productoNombre: 'ccc',
		promocionPorcentaje: '30',
		empresaNombre: 'PEDIDOS YA',
		nombre: '',
		usuarioCodigo: '',
		usuarioId: '',
		fecha: '',
		voucherCodigo: '',
	};
	const [formData, setFormData] = useState(initialState);
	const [isDisabled, setDisabled] = useState(false);
	const [isHiddenForm, setHiddenForm] = useState(hiddenForm);
	const [hiddenVoucher, setHiddenVoucher] = useState(true);

	const [producto, setProducto] = useState([]);
	const [productoId, setProductoId] = useState('');
	const [productoNombre, setProductoNombre] = useState('');

	useEffect(() => {
		const getProducto = async () => {
			const data = await axios({
				method: 'GET',
				url: `/productos`,
			});
			const resProducto = data.data.data;
			setProducto(resProducto);
		};
		getProducto();
	}, []);

	const handleChangeProducto = e => {
		const getProductoid = e.target.value;
		if (getProductoid == 0) {
			setProductoId('');
		} else {
			setProductoId(getProductoid);
		}
		setFormData({
			...formData,
			productoId,
			productoNombre,
		});
		e.preventDefault();
	};

	const getProductoNombre = async () => {
		const data = await axios({
			method: 'GET',
			url: `/productos/${productoId}`,
		});
		const resProductoNombre = await data.data.data.nombre;

		await setProductoNombre(resProductoNombre);
	};

	useEffect(() => {
		if (productoId == '') {
			setProductoNombre('');
		} else {
			getProductoNombre();
		}
		setFormData({
			...formData,
			productoId,
			productoNombre,
		});
	}, [productoId]);

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!formData.nombre) {
			alert('Complete todos los campos con *');
			return;
		}

		if (!formData.productoId) {
			alert('Complete todos los campos con *');
			return;
		}

		const voucher = createVaucher(formData);

		voucher.then(v => {
			setFormData({
				...formData,
				fecha: dateFormat.format(v.fecha),
				voucherCodigo: v.codigo,
				productoId,
				productoNombre,
			});
		});
		setHiddenForm(true);
		setHiddenVoucher(false);
	};

	const handleCancel = e => {
		e.preventDefault();
		setFormData(initialState);
	};

	const fetchUsuario = async (usuarioCodigo: string) => {
		const data = await axios({
			method: 'GET',
			url: `/usuarios/codigo/${usuarioCodigo}`,
		});
		const usuario = data.data.data;

		setFormData({
			...formData,
			nombre: usuario?.nombre,
			usuarioCodigo: usuario?.codigo,
			usuarioId: usuario?.id,
		});
	};

	const handleChangeUsuarioCodigo = e => {
		const usuarioCodigo = e.target.value || '0';
		fetchUsuario(usuarioCodigo);
	};

	const createVaucher = async formData => {
		const voucher = {
			promocionId: formData.promocionId,
			usuarioId: formData.usuarioId,
			productoId,
		};

		const data = await axios({
			method: 'POST',
			url: '/vouchers/create/',
			data: voucher,
		});

		return data.data.data;
	};

	return (
		<LayoutMin title='Promocion'>
			<Box py='72px' borderBottom='32px solid #d21a28' hidden={isHiddenForm}>
				<Box maxW='960px' m='0 auto' w='90%' id='main'>
					<Box>
						<Flex position='relative' display='inline-flex'>
							<Heading
								fontSize={{ base: '32px', lg: '48px' }}
								fontWeight='black'
								color='#015796'
							>
								PROMOCIONES
							</Heading>
							<Box
								position='absolute'
								width='30px'
								height='12px'
								bgColor='#b41f1b'
								left='0'
								top='-8px'
							/>
						</Flex>

						<Box textAlign='center'>
							<Text
								color='#000'
								fontWeight='bold'
								fontSize='18px'
								mt='20px'
								pb='7px'
							>
								Generá tu voucher de descuento y canjea en cualquiera de
								nuestros puntos de venta habilitados
							</Text>
						</Box>
					</Box>

					<Box as='form'>
						<Box w={{ base: '100%', lg: '60%' }}>
							<Text color='#015796' mt='20px' pb='7px' fontWeight='bold'>
								Número de Documento:
							</Text>
							<RadioGroup
								display='grid'
								name='identifier_type'
								gap={{ base: '20px', lg: '0' }}
								gridTemplateColumns={[
									'1fr',
									'repeat(2, 1fr)',
									'repeat(3, auto)',
								]}
							>
								<Flex mt='10px' alignItems='center'>
									<Text
										as='label'
										color='#015796'
										mr='10px'
										htmlFor='ci'
										fontSize='14px'
										fontWeight='bold'
									>
										RiderID
									</Text>
									<Radio colorScheme='red' id='ci' value='ci' />
								</Flex>
								<Flex>
									<Input
										isRequired
										name='identifier_number'
										onChange={handleChangeUsuarioCodigo}
										type='number'
										placeholder='Número*'
										value={formData.usuarioCodigo}
									/>
								</Flex>
							</RadioGroup>
						</Box>

						<Box mt='20px' w={{ base: '100%', lg: '60%' }}>
							<Box>
								<Input
									isRequired
									color='#015796'
									name='name'
									placeholder='Nombre y Apellido*'
									isReadOnly={true}
									value={formData.nombre}
									onChange={handleChange}
								/>
							</Box>
						</Box>

						<Box mt='20px' w={{ base: '100%', lg: '60%' }}>
							<Text
								as='label'
								color='#015796'
								mr='10px'
								htmlFor='ci'
								fontSize='14px'
								fontWeight='bold'
							>
								Empresa
							</Text>
							<Box>
								<Select w='full' name='empresa' isRequired>
									<option value='0'>PEDIDOS YA</option>
								</Select>
							</Box>
						</Box>

						<Box mt='20px' w={{ base: '100%', lg: '60%' }}>
							<Text
								as='label'
								color='#015796'
								mr='10px'
								htmlFor='ci'
								fontSize='14px'
								fontWeight='bold'
							>
								Producto
							</Text>

							<Box
								as='label'
								color='#015796'
								mr='10px'
								fontSize='25px'
								fontWeight='Bold'
							>
								<select
									className='select-promotion'
									id='productos'
									name='productos'
									onChange={e => handleChangeProducto(e)}
								>
									<option value={0}>
										--Selecciona tu producto en promoción *--
									</option>
									{producto.map(getProduto => (
										<option key={getProduto.id} value={getProduto.id}>
											{' '}
											{getProduto.nombre}
										</option>
									))}
								</select>
							</Box>
						</Box>

						<Box mt='32px'>
							<Button
								type={`submit`}
								minW='initial'
								h='45px'
								bgColor='#d21a28'
								color='#fff'
								rounded='none'
								p='0 48px'
								_hover={{ bgColor: '#d21a28' }}
								_active={{ bgColor: '#d21a28' }}
								disabled={isDisabled}
								onClick={handleSubmit}
							>
								Enviar
							</Button>
							<Button
								type={`submit`}
								minW='initial'
								h='45px'
								bgColor='#d21a28'
								color='#fff'
								rounded='none'
								p='0 48px'
								_hover={{ bgColor: '#d21a28' }}
								_active={{ bgColor: '#d21a28' }}
								disabled={isDisabled}
								onClick={handleCancel}
								ml={'7px'}
							>
								Cancelar
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>

			<Voucher
				data={formData}
				setHiddenForm={setHiddenForm}
				setHiddenVoucher={setHiddenVoucher}
				hiddenVoucher={hiddenVoucher}
				setFormData={setFormData}
				initialState={initialState}
				setProductoNombre={setProductoNombre}
				setProductoId={setProductoId}
			/>
		</LayoutMin>
	);
};
