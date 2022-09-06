import { Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Social from '../components/Social';

interface LayoutProps {
	children: React.ReactNode;
	title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	const handleToUp = () => window.scrollTo(0, 0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<head>
				<title>{title ? `ATP - ${title}` : 'ATP'}</title>
				<script
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/gtag/js?id=G-PGB10Q1D11" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
					}}
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-PGB10Q1D11');
						`,
					}}
				></script>
			</head>
			<Navbar />
			{children}
			<Footer />

			<Box
				position='fixed'
				right={{ base: '0', lg: '10px' }}
				top={{ base: 'initial', lg: '50%' }}
				bottom={{ base: '48px', lg: 'initial' }}
				left={{ base: '0', lg: 'initial' }}
				transform='translateY(-50%)'
				w={{ base: '240px', lg: 'initial' }}
				zIndex='20'
				m='auto'
			>
				<Social />
			</Box>

			<Button
				display={scrollPosition > 1800 ? 'grid' : 'none'}
				placeItems='center'
				minW='initial'
				w='45px'
				h='45px'
				bgColor='#d21a28'
				color='#fff'
				rounded='full'
				_hover={{ bgColor: '#d21a28' }}
				position='fixed'
				zIndex='20'
				bottom={{ base: '78px', lg: '32px' }}
				right={{ base: '32px', lg: '48px' }}
				fontSize='20px'
				onClick={handleToUp}
			>
				<FaAngleUp />
			</Button>
		</>
	);
};

export default Layout;
