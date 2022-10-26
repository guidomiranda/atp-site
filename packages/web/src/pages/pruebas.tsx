import React from 'react';
import { Prueba }  from '../components/Prueba';

interface PruebasProps {
	pruebas: any;
}

const Pruebas: React.FC<PruebasProps> = ():any => {

	return (
			<Prueba />
	);
};

export default Pruebas;