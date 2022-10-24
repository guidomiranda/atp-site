import React, { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import Pdf from 'react-to-pdf';

export const Voucher = ({
	data,
	setHiddenForm,
	setHiddenVoucher,
	hiddenVoucher,
	setFormData,
	initialState,
	setProductoNombre,
	setProductoId,
}) => {
	const ref = React.createRef();
	const options = {
		//orientation: 'landscape',
		unit: 'in',
		format: [5, 5],
	};
	const initialDimension = {
		dimX: -0.09,
		dimY: 1,
		vScale: 0.57,
	};
	const [{ dimX, dimY, vScale }, setDimensions] = useState(initialDimension);

	const fileName = `voucher#${data.voucherCodigo}.pdf`;

	useEffect(() => {
		console.log('useEfect funcando');
		let navegador = navigator.userAgent;
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			// console.log('Estás usando un dispositivo móvil!!');
			setDimensions({
				dimX: 1.66,
				dimY: 1,
				vScale: 0.5,
			});
		} else {
			// console.log('No estás usando un móvil');
			setDimensions(initialDimension);
		}
	}, []);

	const handleReturn = () => {
		setHiddenForm(false);
		setHiddenVoucher(true);
		setFormData(initialState);
		setProductoNombre('');
		setProductoId('');
		document.getElementById('productos').value = 0;
	};

	return (
		<>
			<Box
				id='container'
				className='voucher-layout'
				hidden={hiddenVoucher}
				maxW='960px'
				m='0 auto'
				w='90%'
				p='4% 0 4% 0'
			>
				<Box
					id='container-pdf'
					className='voucher-layout-pdf'
					ref={ref}
					maxW='960px'
					m='0 auto'
					w='90%'
				>
					<Image className='voucher-img' src='/logo-mobil-route.png' />
					<Box className='voucher-layout-body css-0'>
						<h2 className='chakra-heading voucher-header css-1dklj6k'>
							{data.nombre}
						</h2>
						<p className='chakra-text voucher-label css-0'>tu Voucher</p>
						<p className='chakra-text voucher-data css-0'>
							{data.productoNombre}
						</p>
						<p className='chakra-text voucher-label css-0'>
							se ha generado exitosamente
						</p>
						<p className='chakra-text voucher-label-l css-0'>
							Tu ID para canjear el producto es:
						</p>
						<p className='chakra-text voucher-data-l css-0'>
							# {data.voucherCodigo}
						</p>
					</Box>
				</Box>

				<Pdf
					targetRef={ref}
					filename={fileName}
					onComplete={handleReturn}
					options={options}
					x={dimX}
					y={dimY}
					scale={vScale}
				>
					{({ toPdf }) => (
						<button
							style={{
								minWidth: 'initial',
								height: '45px',
								backgroundColor: '#d21a28',
								color: '#fff',
								padding: '0 48px',
								marginLeft: '5%',
							}}
							onClick={toPdf}
						>
							Descargar PDF
						</button>
					)}
				</Pdf>
			</Box>
		</>
	);
};

export async function getServerSideProps(context) {
	const window = window;
	const navigator = navigator;
	return { window, navigator };
}
