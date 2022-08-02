import React from 'react';
import { Input as InputChakraUI, InputProps } from '@chakra-ui/react';

const Input: React.FC<InputProps> = ({ ...rest }) => {
	return (
		<InputChakraUI
			{...rest}
			border='0'
			borderBottom='1px solid #015796'
			rounded='0'
			color='#015796'
			pb='3px'
			px='5px'
			bgColor='transparent'
			_placeholder={{ color: '#015796', opacity: 0.8 }}
			_focus={{ shadow: 0, borderColor: '#b41f1b' }}
		/>
	);
};

export default Input;
