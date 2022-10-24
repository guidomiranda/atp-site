import React from 'react';
import { Promocion } from '../components/Promocion';

interface PromocionesProps {
	promociones: any;
}

const Promociones: React.FC<PromocionesProps> = ():any => {

	return (
			<Promocion hiddenForm={false}/>
	);
};

export default Promociones;
