import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import { FaTimes, FaBars } from 'react-icons/fa';

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

const Navbar = () => {
	return (
		<Box height='100px' position='relative' zIndex='20'>
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
								<Image
									src='/logo.png'
									height={{ base: '60px', lg: '70px' }}
									objectFit='contain'
								/>
							</Link>
						</NextLink>
					</Box>
					<Box display={{ base: 'none', xlg: 'block' }}>
						<Image src='/logo-brands.png' height='60px' objectFit='contain' />
					</Box>
				</Flex>

				<Flex display={{ base: 'none', lg: 'flex' }}>
					<NavLink text='Inicio' link='/' />
					<NavLink text='Nosotros' link='/about' />
					<Box>
						<NavLink text='Productos' link='/product/aire' />
					</Box>
					<NavLink text='Servicios' link='/services' />
					<NavLink text='Contacto' link='' />
				</Flex>

				<Button display={{ base: 'block', lg: 'none' }}>
					<FaBars />
				</Button>
			</Flex>
		</Box>
	);
};

export default Navbar;
