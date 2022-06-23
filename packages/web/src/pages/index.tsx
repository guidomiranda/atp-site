import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import Layout from '../layout';
import Banner from '../components/Banner';

const Home: React.FC = () => {
	return (
		<Layout>
			<Banner />

			<Box>
				<Heading>Hello</Heading>
			</Box>
		</Layout>
	);
};

export default Home;
