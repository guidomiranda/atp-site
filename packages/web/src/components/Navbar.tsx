import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import { FaTimes, FaBars } from 'react-icons/fa';
import router, { useRouter } from 'next/router';

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
						color={{ base: 'black', lg: 'white' }}
						fontWeight='medium'
						ml={{ base: '0', lg: '20px' }}
						mb={{ base: '15px', lg: '0' }}
						fontSize={{ base: '24px', lg: '14px' }}
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
					color={{ base: 'black', lg: 'white' }}
					fontWeight='medium'
					ml={{ base: '0', lg: '20px' }}
					mb={{ base: '15px', lg: '0' }}
					fontSize={{ base: '24px', lg: '14px' }}
				>
					{text}
				</Text>
			)}
		</>
	);
};

const Navbar = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [showSubmenuProduct, setShowSubmenuProduct] = useState<boolean>(false);

	const { pathname } = useRouter();

	const handleMouseEnter = () => setShowSubmenuProduct(true);
	const handleMouseLeave = () => setShowSubmenuProduct(false);

	const handleOpenMenu = () => setShowMenu(true);
	const handleCloseMenu = () => setShowMenu(false);

	useEffect(() => setShowMenu(false), []);

	return (
		<Box
			height='100px'
			position='relative'
			zIndex='20'
			bgColor={
				pathname === '/contacto' || pathname === '/trabaja-con-nosotros'
					? '#111'
					: 'transparent'
			}
		>
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

				<Flex
					display={
						showMenu
							? { base: 'flex', lg: 'flex' }
							: { base: 'none', lg: 'flex' }
					}
					position={{ base: 'fixed', lg: 'relative' }}
					bgColor={{ base: 'white', lg: 'transparent' }}
					left={{ base: '0', lg: 'initial' }}
					top={{ base: '0', lg: 'initial' }}
					w={{ base: '100vw', lg: 'initial' }}
					h={{ base: '100vh', lg: 'initial' }}
					flexDir={{ base: 'column', lg: 'row' }}
					alignItems={{ base: 'center', lg: 'baseline' }}
					justifyContent={{ base: 'center', lg: 'initial' }}
				>
					<NavLink text='Inicio' link='/' />
					<NavLink text='Nosotros' link='/nosotros' />
					<Box
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						position='relative'
						pb={{ base: '0', lg: '10px' }}
						cursor='pointer'
					>
						<NavLink isLink text='Productos' link='/product/aire' />

						<Box
							display={showSubmenuProduct ? 'block' : 'none'}
							rounded='5px'
							position='absolute'
							top='100%'
							w='200px'
							bgColor='white'
							boxShadow='0px 0px 10px 0px rgba(0,0,0,0.6)'
							p='10px'
						>
							<NextLink
								href='/product/lubricantes/lub-veh-liviano#main'
								passHref
							>
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
					<NavLink text='Contacto' link='/contacto' />
					<Button
						onClick={() => router.push('/trabaja-con-nosotros')}
						fontSize={['22px', '14px']}
						bgColor='#d21a28'
						minW='initial'
						p='5px 10px'
						color='#fff'
						h='initial'
						ml={['0', '20px']}
						_hover={{ backgroundColor: '#d21a28' }}
						_active={{ backgroundColor: 'hsl(355, 77%, 62%)', outline: 'none' }}
						_focus={{ outline: 'none' }}
					>
						Trabaja con nosotros
					</Button>
				</Flex>

				<Button
					display={{ base: 'block', lg: 'none' }}
					onClick={() => {
						if (showMenu) {
							handleCloseMenu();
						} else {
							handleOpenMenu();
						}
					}}
				>
					{showMenu ? <FaTimes /> : <FaBars />}
				</Button>
			</Flex>
		</Box>
	);
};

export default Navbar;
