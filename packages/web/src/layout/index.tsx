import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface LayoutProps {
	children: React.ReactNode;
	title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	return (
		<>
			<head>
				<title>{title ? `ATP - ${title}` : 'ATP'}</title>
			</head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
