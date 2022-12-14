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
import Input from '../components/Input';
import LayoutMin from '../components/LayoutMin';
import Select from '../components/Select';
import axios from '../config/axios';
import dateFormat from '../helpers/dateFormat';
import { Voucher } from '../components/Voucher';

export const Promocion = ({ hiddenForm }) => {

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

	const [formData, setFormData] = useState(initialState);
	const [isDisabled, setDisabled] = useState(false);
	const [isHiddenForm, setHiddenForm] = useState(hiddenForm);
	const [hiddenVoucher, setHiddenVoucher] = useState(true);
	const [empresaInit, setEmpresaInit] = useState({id:'',nombre:''});
	// const [promocionesInit, setPromocionesInit] = useState([]);
	// const [promocionesDetalleInit, setPromocionesDetalleInit] = useState([]);

	const [productos, setProductos] = useState([]);
	const [productoId, setProductoId] = useState('');
	const [empresaId, setEmpresaId] = useState('');
	const [promocionId, setPromocionId] = useState('');
	const [productoNombre, setProductoNombre] = useState('');
	const [empresas, setEmpresas] = useState([]);

	const [promociones, setPromociones] = useState([]);
	const [promocionDetalle, setPromocionDetalle] = useState(initPromoDetalle);

	const toast = useToast();

	useEffect(() => {
		// Buscamos todas las empresas activas

		const getEmpresas = async () => {
			const data = await axios({
				method: 'GET',
				url: `/empresas?estado=true`,
			});
			const resEmpresa = await data.data.data;
			await setEmpresas(resEmpresa);
		}
		getEmpresas();
		// console.log('useEffect 1 - empresas: ', empresas);
	}, []);

	useEffect(() => {
		// Buscamos los datos para la empresa inicial
		const datosEmpresaInit = async() => {
			// await console.log('datosEmpresaOrdenCero -empresas: ', empresas);
			const resEmpresaInit = await empresas.filter(empresa => empresa.orden === 0);
			// await console.log('datosEmpresaOrdenCero - empresaInit[0].id: ', empresaInit[0].id);
			if (resEmpresaInit.length){
				setEmpresaInit(await resEmpresaInit[0]);
				await console.log('datosEmpresaInit - empresaInit: ', empresaInit);
			}
		}
		datosEmpresaInit();		
		// console.log('useEffect 2 - empresas: ', empresas);
	}, [empresas])

	useEffect(() => {
		// Buscamos los datos para la promocion inicial
		const datosPromocionesInit = async () => {
			await console.log('datosPromocionesInit - empresaInit: ', empresaInit);
			if(empresaInit){
				const data = await axios({
					method: 'GET',
					url: `/promociones?estado=true&empresaId=${empresaInit.id}`,
				});
				const resPromociones = await data.data.data;
				// await console.log('datosPromocionesInit - empresaInit: ', empresaInit.id);
				if (resPromociones.length){
					setPromociones(await resPromociones)
					await console.log('datosPromocionesInit - promocionesInit: ', promociones);
				}
			}
		}
		datosPromocionesInit();		
	}, [empresaInit])

	useEffect(() => {
		const datosPromocionesDetalleInit = async () => {
				//	await console.log('getPromocionDetalle - promoId: ',promoId);
					if(promociones.length){
						const data = await axios({
							method: 'GET',
							url: `/promocion-detalle/promocion/${promociones[0].id}`,
						});
						const resPromoDetalle = await data.data.data;
						if (resPromoDetalle.length){
							setPromocionDetalle(await resPromoDetalle)
							//await console.log('datosPromocionesInit - promocionesInit: ', promocionesDetalleInit);
						}						
					}
			}
			datosPromocionesDetalleInit();
	}, [promociones])
	
	const dataEmpresaInit = async(pEmpresaId) => {
			const data = await axios({
				method: 'GET',
				url: `/empresas/${pEmpresaId}`,
			});
			const resEmpresa = await data.data.data;
			if (resEmpresa.length){
				setEmpresaInit(await resEmpresa[0]);
				await console.log('datosEmpresaInit - empresaInit: ', empresaInit);
			}
		}












	// useEffect(() => {
	// //	console.log('useEffect - getPromociones');
	// 	if(empresas.length){
	// 		getPromociones(empresas[0].id);
	// 	}

	// 	if(promocion.length){
	// 		getPromocionDetalle(promocion[0].id);
	// 	} else {
	// 		setPromocionDetalle(initPromoDetalle);
	// 	}	
	// }, [empresas]);

	// useEffect(() => {
	// 	//console.log('useEffect promocion: ', promocion.length);
	// 	if(promocion.length){
	// 		getPromocionDetalle(promocion[0].id);
	// 	} else {
	// 		setPromocionDetalle(initPromoDetalle);
	// 	}
	// }, [promocion]);

	// useEffect(() => {
	// 	console.log('---------------------------------------------------------');
	// 	console.log('useEffect VAR - productoId: ',productoId);
	// 	console.log('useEffect VAR - promocionId: ',promocionId);
	// 	console.log('useEffect VAR - empresaId: ',empresaId);
	// 	console.log('---------------------------------------------------------');
	// 	setFormData({
	// 		...formData,
	// 		productoId,
	// 		promocionId,
	// 		empresaId,
	// 	});		
	// }, [empresaId,promocionId,productoId])
	



	// ([{
	// 	promocionId,
	// 	promocionNombre: resPromoDetalle.promocion.nombre,
	// 	productoId: resPromoDetalle.productoId,
	// 	productoNombre: resPromoDetalle.producto.nombre,
	// 	monto: resPromoDetalle.monto,
	// 	porcentaje: resPromoDetalle.porcentaje
	// }])

	// const getProducto = async (productoId) => {
	// 	const data = await axios({
	// 		method: 'GET',
	// 		url: `/producto/codigo/${codigo}`,
	// 	});
	// 	const resProducto = data.data.data;
	// 	setProducto(resProducto);
	// };



	
	const handleChangePromocion = async e => {
		const resPromocionId = await e.target.value;
		console.log('handleChangePromocion - resPromocionId: ',resPromocionId);
		//getPromocionDetalle(await resPromocionId);
		setPromocionId(await resPromocionId);

		if(!resPromocionId.length){
			setProductoId('');
			setPromocionId('');
			setPromocionDetalle(initPromoDetalle);
		}	
	}
	
	const handleChangeProducto = async e => {
		const resProductoId = await e.target.value;
		const resProductoNombre = await getProductoNombre(resProductoId)
		if (resProductoId == 0) {
			await setProductoId('');
			await setProductoNombre('');
		} else {
			await setProductoId(resProductoId);
			await setProductoNombre(resProductoNombre);
		}
		await setFormData({
			...formData,
			productoId: resProductoId,
			productoNombre: resProductoNombre,
		});
		e.preventDefault();
	};

	const getProductoNombre = async (productoId) => {
		const data = await axios({
			method: 'GET',
			url: `/productos/${productoId}`,
		});
		const resProductoNombre = await data.data.data.nombre;
		return resProductoNombre;
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeEmpresa = async e => {
		const resEmpresaId = await e.target.value;
		//await console.log(resEmpresaId)
		//await getPromociones(resEmpresaId);
		setEmpresaId(resEmpresaId);
		dataEmpresaInit(resEmpresaId);
		e.preventDefault();
	}

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
								Gener?? tu voucher de descuento y canjea en cualquiera de
								nuestros puntos de venta habilitados
							</Text>
						</Box>
					</Box>

					<Box as='form'>
						<Box w={{ base: '100%', lg: '60%' }}>
							<Text color='#015796' mt='20px' pb='7px' fontWeight='bold'>
								N??mero de Documento:
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
										placeholder='N??mero*'
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
								<Select 
								w='full' 
								name='empresa'
								onChange={e => handleChangeEmpresa(e)}
								isRequired
								>
									{empresas.map(empresa => (
										<option key={empresa.id} value={empresa.id}>
											{''}
											{empresa.nombre}
										</option>
									))}									
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
								Promocion
							</Text>
							<Box>
								<Select 
									w='full' 
									name='promocion'
									onChange={handleChangePromocion} 
									isRequired>
									{	
										promociones.map( promocion =>(
										<option key={promocion.id} value={promocion.id}>
											{''}
											{promocion.nombre}
										</option>
										))
									}
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
								<Select
									className='select-promotion'
									id='productos'
									name='productos'
									onChange={e => handleChangeProducto(e)}
								>
									<option value={0}>
										--Selecciona tu producto-- *
									</option>
									{promocionDetalle.map((detalle) => (
										<option key={detalle.producto.id} value={detalle.producto.id}>
											{' '}
											{detalle.producto.nombre}
										</option>
									))}
								</Select>
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
