import React, { useState } from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import { FaTimes, FaBars } from 'react-icons/fa';

interface NavLinkProps {
	text: string;
	link?: string;
	isLink?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ text, link, isLink }) => {
	return (
		<>
			{!isLink && (
				<NextLink href={link} passHref>
					<Link
						_focus={{ outline: 0 }}
						_hover={{ textDecoration: 'none' }}
						textTransform='uppercase'
						color='white'
						fontWeight='medium'
						ml='20px'
					>
						{text}
					</Link>
				</NextLink>
			)}

			{isLink && (
				<Text
					_focus={{ outline: 0 }}
					_hover={{ textDecoration: 'none' }}
					textTransform='uppercase'
					color='white'
					fontWeight='medium'
					ml='20px'
				>
					{text}
				</Text>
			)}
		</>
	);
};

const Navbar = () => {
	const [showSubmenuProduct, setShowSubmenuProduct] = useState<boolean>(false);

	const handleMouseEnter = () => setShowSubmenuProduct(true);
	const handleMouseLeave = () => setShowSubmenuProduct(false);

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
					<Box
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						position='relative'
						pb='10px'
						cursor='pointer'
					>
						<NavLink isLink text='Productos' link='/product/aire' />

						<Box
							display={showSubmenuProduct ? 'block' : 'none'}
							rounded='5px'
							position='absolute'
							top='100%'
							w='200px'
							// h='200px'
							bgColor='white'
							boxShadow='0px 0px 10px 0px rgba(0,0,0,0.6)'
							p='10px'
						>
							<NextLink href='/' passHref>
								<Link
									p='5px'
									rounded='4px'
									display='block'
									mb='7px'
									_hover={{ textDecoration: 'none', bgColor: 'gray.100' }}
								>
									Lubricantes
								</Link>
							</NextLink>
							<NextLink href='/product/battery' passHref>
								<Link
									p='5px'
									rounded='4px'
									display='block'
									mb='7px'
									_hover={{ textDecoration: 'none', bgColor: 'gray.100' }}
								>
									Baterías
								</Link>
							</NextLink>
							<NextLink href='/product/filters/liviana/aire#main' passHref>
								<Link
									p='5px'
									rounded='4px'
									display='block'
									_hover={{ textDecoration: 'none', bgColor: 'gray.100' }}
								>
									Filtros
								</Link>
							</NextLink>
						</Box>
					</Box>
					<NavLink text='Servicios' link='/services' />
					<NavLink text='Contacto' link='/' />
				</Flex>

				<Button display={{ base: 'block', lg: 'none' }}>
					<FaBars />
				</Button>
			</Flex>
		</Box>
	);
};

export default Navbar;
