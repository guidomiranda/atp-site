import { Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Social from '../components/Social';

interface LayoutMinProps {
	children: React.ReactNode;
	title?: string;
}

const LayoutMin: React.FC<LayoutMinProps> = ({ children, title }) => {
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
						__html: `
							<iframe src="https://www.googletagmanager.com/gtag/js?id=G-PGB10Q1D11" height="0" width="0" style="display: none; visibility: hidden;"></iframe>
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-PGB10Q1D11');
						`,
					}}
				></script>
			</head>
			<Box
        		bgColor='#383752'		
			>
				<Navbar />
				
			</Box>
				{children}
			<Box>
				<Footer />
			</Box>
		

			<Box
				position='fixed'
				right={{ base: '0', lg: '1px' }}
				top={{ base: 'initial', lg: '70%' }}
				bottom={{ base: '20px', lg: 'initial' }}
				left={{ base: '0', lg: 'initial' }}
				transform={{ base: 'initial', lg: 'translateY(-50%)' }}
				w={{ base: '300px', lg: 'initial' }}
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
				bottom={{ base: '90px', lg: '32px' }}
				right={{ base: '32px', lg: '32px' }}
				fontSize='20px'
				onClick={handleToUp}
			>
				<FaAngleUp />
			</Button>
		</>
	);
};

export default LayoutMin;
