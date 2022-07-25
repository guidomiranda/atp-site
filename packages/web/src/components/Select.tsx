import React from 'react';
import { Select as SelectChakraUI, SelectProps } from '@chakra-ui/react';

const Select: React.FC<SelectProps> = ({ ...rest }) => {
	return (
		<SelectChakraUI
			className='select-chakraui-form'
			{...rest}
			border='0'
			borderBottom='1px solid #fff'
			rounded='0'
			_focus={{ shadow: 0 }}
			color='#fff'
			// p='0px'
			m='0'
			paddingInlineStart={0}
			paddingInlineEnd='0'
		>
			<option value=''>Departamento*</option>
		</SelectChakraUI>
	);
};

export default Select;
