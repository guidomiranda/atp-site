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
		//unit: 'in',
		//format: [10, 5],
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
				<Box id='container-pdf' ref={ref} className='voucher-layout-pdf'>
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
					// x={700}
					// y={700}
					// scale={0.8}
				>
					{({ toPdf }) => (
						<button
							style={{
								minWidth: 'initial',
								height: '45px',
								backgroundColor: '#d21a28',
								color: '#fff',
								padding: '0 48px',
								marginLeft: '10%',
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
