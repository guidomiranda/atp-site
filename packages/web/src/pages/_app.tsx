import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';
import '../styles/swiper.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
