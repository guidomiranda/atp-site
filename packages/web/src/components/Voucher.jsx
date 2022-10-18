import React from 'react';
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
		format: [6, 5],
	};
	const fileName = `voucher#${data.voucherCodigo}.pdf`;

	const handleReturn = () => {
		document.getElementById('productos').value = 0;
		setHiddenForm(false);
		setHiddenVoucher(true);
		setFormData(initialState);
		setProductoNombre('');
		setProductoId('');
	};

	return (
		<>
			<Box id='container' className='voucher-layout' hidden={hiddenVoucher}>
				<Box id='container-pdf' className='voucher-layout-pdf' ref={ref}>
					<Image className='voucher-img' src='/logo-mobil-route.png' />
					<Box>
						<div>
							<div className='voucher-layout css-0'>
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
							</div>
						</div>
					</Box>
				</Box>

				<Pdf
					targetRef={ref}
					filename={fileName}
					onComplete={handleReturn}
					options={options}
					y={1}
					scale={0.6}
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
