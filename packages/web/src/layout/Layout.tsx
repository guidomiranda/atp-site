import React from 'react';

import { Navbar } from '../components';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};
