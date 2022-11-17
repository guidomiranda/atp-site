import React from 'react';
import { PromocionPrueba } from '../components/PromocionPrueba';

interface PromocionesProps {
	promociones: any;
}

const Promociones: React.FC<PromocionesProps> = ():any => {

	return (
			<PromocionPrueba hiddenForm={false}/>
	);
};

export default Promociones;
