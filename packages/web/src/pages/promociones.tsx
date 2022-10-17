import React from 'react';
import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Radio,
	RadioGroup,
	Text,
} from '@chakra-ui/react';
import Input from '../components/Input';
import LayoutMin from '../components/LayoutMin';
import Select from '../components/Select';
import { useState } from 'react';
import axios from '../config/axios';
import dateFormat from '../helpers/dateFormat'
import { Voucher } from '../components/Voucher';
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
