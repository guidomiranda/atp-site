import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/swiper.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import theme from '../styles/theme';

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
