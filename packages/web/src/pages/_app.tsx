import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import "bootstrap/dist/css/bootstrap.css";
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from '../styles/theme';
import { UserProvider } from '../context/UserContext';

import '../styles/swiper.css';
import '../styles/styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const queryClient = new QueryClient();

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<UserProvider>
				<ChakraProvider theme={theme}>
					<Toaster position='top-center' reverseOrder={false} />
					<Component {...pageProps} />
				</ChakraProvider>
			</UserProvider>
		</QueryClientProvider>
	);
};

export default MyApp;
