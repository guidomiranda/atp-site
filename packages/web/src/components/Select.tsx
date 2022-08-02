import React from 'react';
import { Select as SelectChakraUI, SelectProps } from '@chakra-ui/react';

const Select: React.FC<SelectProps> = ({ children, ...rest }) => {
	return (
		<SelectChakraUI
			className='select-chakraui-form'
			{...rest}
			border='0'
			borderBottom='1px solid #015796'
			rounded='0'
			_focus={{ shadow: 0 }}
			color='#015796'
			m='0'
			paddingInlineStart={0}
			paddingInlineEnd='0'
		>
			{children}
		</SelectChakraUI>
	);
};

export default Select;
