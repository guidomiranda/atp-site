import React from 'react';
import { Input as InputChakraUI, InputProps } from '@chakra-ui/react';

const Input: React.FC<InputProps> = ({ ...rest }) => {
	return (
		<InputChakraUI
			{...rest}
			border='0'
			borderBottom='1px solid #fff'
			rounded='0'
			color='#fff'
			pb='3px'
			px='5px'
			bgColor='transparent'
			_placeholder={{ color: '#fff', opacity: 0.8 }}
			_focus={{ shadow: 0, borderColor: '#b41f1b' }}
		/>
	);
};

export default Input;
