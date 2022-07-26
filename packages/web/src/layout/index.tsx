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
			</head>
			<Navbar />
			{children}
			<Footer />

			<Box
				position='fixed'
				right='10px'
				top='50%'
				transform='translateY(-50%)'
				// bgColor='#fff'
				zIndex='20'
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
				bottom='32px'
				right='48px'
				fontSize='20px'
				onClick={handleToUp}
			>
				<FaAngleUp />
			</Button>
		</>
	);
};

export default Layout;
