import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, Image, Link } from '@chakra-ui/react';

interface NavLinkProps {
	text: string;
	link: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, link }) => {
	return (
		<NextLink href={link} passHref>
			<Link
				_focus={{ outline: 0 }}
				_hover={{ textDecoration: 'none' }}
				textTransform='uppercase'
				color='white'
				// fontSize='18px'
				fontWeight='medium'
				ml='20px'
			>
				{text}
			</Link>
		</NextLink>
	);
};

export const Navbar = () => {
	return (
		<Box height='100px' bgColor='blue.500'>
			<Flex
				height='100%'
				alignItems='center'
				maxW='1220px'
				w='90%'
				m='0 auto'
				justifyContent='space-between'
			>
				<Flex alignItems='center'>
					<Box>
						<NextLink href='/' passHref>
							<Link _focus={{ outline: 0 }}>
								<Image src='/logo.png' height='90px' objectFit='contain' />
							</Link>
						</NextLink>
					</Box>
					<Box display={{ base: 'none', xlg: 'block' }}>
						<Image src='/logo-brands.png' height='60px' objectFit='contain' />
					</Box>
				</Flex>
				<Flex>
					<NavLink text='Inicio' link='/' />
					<NavLink text='Nosotros' link='/' />
					<Box>
						<NavLink text='Productos' link='/' />
					</Box>
					<NavLink text='Servicios' link='/' />
					<NavLink text='Contacto' link='/' />
				</Flex>
			</Flex>
		</Box>
	);
};
