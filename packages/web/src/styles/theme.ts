import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
	sm: '30em',
	md: '48em',
	lg: '62em',
	xlg: '72em',
	xl: '80em',
	'2xl': '96em'
};

const theme = extendTheme({
	styles: {
		global: {
			body: {
				fontFamily: 'Montserrat, sans-serif'
			}
		}
	},
	colors: {
		primary: {
			light: '#f7fafc',
			dark: '#1a202c'
		},
		secondary: 'rgb(211,75,21)'
	},
	breakpoints
});

export default theme;
