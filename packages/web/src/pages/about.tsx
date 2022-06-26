import React from 'react';
import { Box } from '@chakra-ui/react';

import Layout from '../layout';
import Header from '../components/Header';

const About = () => {
	return (
		<Layout>
			<Header />
			<Box maxW='1220px' m='0 auto' w='90%' py='128px'>
				<Box>hllo</Box>
			</Box>
		</Layout>
	);
};

export default About;
