import React from 'react';
import { Text as TextChakraUI, TextProps } from '@chakra-ui/react';

const Text: React.FC<TextProps> = ({ children, ...rest }) => {
	return (
		<TextChakraUI fontFamily='Inter, sans-serif' {...rest}>
			{children}
		</TextChakraUI>
	);
};

export default Text;
