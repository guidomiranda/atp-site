import { Box } from '@chakra-ui/react';
import React from 'react';

const Aside: React.FC = () => {
	return (
		<Box
			w='300px'
			boxShadow='0px 0px 3px 2px rgba(0,0,0,0.1)'
			m='22px'
			rounded='md'
			p='12px 16px'
		>
			<Box>Info extra</Box>
		</Box>
	);
};

export default Aside;
