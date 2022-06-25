import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
	return (
		<Box h='100vh' mt='-100px'>
			<Box
				height='calc(100vh - 180px)'
				bgImage="url('/banner-atp-nosotros.jpg')"
				bgSize='cover'
				bgPos='center'
			>
				<Flex
					maxW='1220px'
					w='90%'
					m='0 auto'
					alignItems='flex-end'
					height='full'
					pb='40px'
				>
					<Flex display='inline-flex' position='relative'>
						<Heading
							color='white'
							fontSize={{ base: '40px', lg: '48px' }}
							fontWeight='black'
						>
							Quienes somos
						</Heading>

						<Box
							position='absolute'
							bottom='-15px'
							w='60px'
							right='0'
							h='15px'
							bgColor='#b41f1b'
						></Box>
					</Flex>
				</Flex>
			</Box>
			<Box h='180px' bgColor='#015796'>
				<Flex
					alignItems='center'
					justifyContent='center'
					h='full'
					maxW='1220px'
					m='0 auto'
					w='90%'
				>
					<Text
						textAlign='center'
						w={{ base: '100%', md: '70%' }}
						fontSize='20px'
						color='white'
						fontWeight='medium'
					>
						ATP es una empresa con más de 40 años en el mercado que
						<br /> se encarga de distribuir productos y servicios de alta
						calidad.
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default Header;
