import React, { useState, useEffect, useRef } from 'react';
import {
	Box,
	Button,
	Flex,
	Heading,
	Radio,
	RadioGroup,
	Text,
	HStack,
	useToast,
	useNumberInput
} from '@chakra-ui/react';
import Input from './Input';
import LayoutMin from './LayoutMin';
import Select from './Select';
import axios from '../config/axios';
import dateFormat from '../helpers/dateFormat';
import { Voucher } from './Voucher';
import { SelectList } from './SelectList';
import { useFetch } from '../hooks/useFetch';
import { SelectListNested } from './SelectListNested';

export const PromocionPrueba = ({ hiddenForm }) => {

	const initialState = {
		promocionId: '',
		promocionNombre: '',
		productoId: '',
		productoNombre: '',
		cantidad: 1,
		promocionPorcentaje: '',
		empresaId: '',
		empresaNombre:'',
		nombre: '',
		usuarioCodigo: '',
		usuarioId: '',
		fecha: '',
		voucherCodigo: '',
	};
	const initPromoDetalle = [{
		id: '',
		promocion: {
			id: '',
			nombre: '',
		},
		producto: {
			id: '',
			nombre: '',
		},
		porcentaje: 0,
		monto: 0
	}];

	const toast = useToast();

	const [formData, setFormData] = useState(initialState);
	const [isDisabled, setDisabled] = useState(false);
	const [isHiddenForm, setHiddenForm] = useState(hiddenForm);
	const [hiddenVoucher, setHiddenVoucher] = useState(true);
	//const [empresaInit, setEmpresaInit] = useState({id:'',nombre:''});
	// const [promocionesInit, setPromocionesInit] = useState([]);
	// const [promocionesDetalleInit, setPromocionesDetalleInit] = useState([]);

	const [productos, setProductos] = useState([]);
	const [productoId, setProductoId] = useState('');
	const [empresaId, setEmpresaId] = useState('');
	const [promocionId, setPromocionId] = useState(0);
	const [productoNombre, setProductoNombre] = useState('');
	const [empresas, setEmpresas] = useState([]);

	const [promociones, setPromociones] = useState([]);
	const [promocionDetalle, setPromocionDetalle] = useState(initPromoDetalle);
	// const {data,error,isLoading} = useFetch('empresas/init/0');


	
	// useEffect(() => {
	// 	const dataInit=async (data) =>{
	// 		if(!data) return;
	// 		setEmpresaId(await data.data.id);
	// 		console.log('empresaInit: ',data.data.id);
	// 	}
	// 	dataInit(data);
	// }, [data]);




	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};



	const updateCounter = (step) => {

		const vCantidad = formData.cantidad+step;
		if (vCantidad < 1) return;

		setFormData({
			...formData,
			cantidad: vCantidad
		})
	}

	const handleSubmit = async e => {
		e.preventDefault();
		if (!formData.nombre) {
			return toast({
                title: 'Complete todos los campos con *',
                status: 'error',
				position: 'top',				
                isClosable: true,
              });
		}

		if (!formData.productoId || !formData.promocionId) {
			return toast({
                title: 'Complete todos los campos con *',
                status: 'error',
				position: 'top',
                isClosable: true,
              });
		}

		const voucher = await createVaucher(formData);


		await setFormData({
			...formData,
			fecha: dateFormat.format(voucher.fecha),
			voucherCodigo: voucher.codigo,
		});

		await setHiddenForm(true);
		await setHiddenVoucher(false);
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

		setFormData({
			...formData,
			productoId,
			promocionId,
			empresaId,
		});	
	};

	const createVaucher = async formData => {
		const voucher = {
			promocionId: formData.promocionId,
			usuarioId: formData.usuarioId,
			productoId,
			cantidad: formData.cantidad
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
								fontFamily='Montserrat,sans-serif'
							>
								PROMOCIONES - PRUEBA
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
							 <SelectList
								title="empresa"
								url={`empresas?estado=true`}
								handleChange={(e) => {
									setEmpresaId(e.target.value);
								}}
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
								Promocion
							</Text>
							<Box>
							 <SelectList
								title="promocion"
								url={`promociones?estado=true&empresaId=${empresaId}`}
								handleChange={(e) => {
									setPromocionId(e.target.value);
									console.log(promocionId)
								}}
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
								Producto
							</Text>

							<Box
								as='label'
								color='#015796'
								mr='10px'
								fontSize='25px'
								fontWeight='Bold'
							>
							 <SelectListNested
								title="producto"
								url={`promocion-detalle/promocion/${promocionId}`}
								value={productoId}
								handleChange={(e) => {
									setProductoId(e.target.value);
								}}
      						/> 
							</Box>
						</Box>

						<Box>
							<Text
									as='label'
									color='#015796'
									mr='10px'
									htmlFor='ci'
									fontSize='14px'
									fontWeight='bold'
								>
									Cantidad
							</Text>							
							<Flex>		
								<Button onClick={()=>updateCounter(1)}>+</Button>						
								<Input maxW={'60px'} fontStyle={'bold'} textAlign={'center'}
								name='cantidad'													
								fontWeight='bold'
								value={formData.cantidad}
								onChange={handleChange}
								/>
								<Button onClick={()=>updateCounter(-1)}>-</Button>
							</Flex>
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
						</Box>
					</Box>
				</Box>
				{/* <pre>
					<code>
						{data}
						{error}
						{isLoading}
					</code>
				</pre> */}

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
