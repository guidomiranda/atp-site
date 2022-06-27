import React from 'react';
import { Box, Text, Heading, Flex, Grid, Image } from '@chakra-ui/react';

interface HeaderProps {
	bg: string;
	logo: string;
	product: string;
}

const Header: React.FC<HeaderProps> = ({ bg, logo, product }) => {
	return (
		<Box h='100vh' mt='-100px'>
			<Box
				height='calc(100vh - 180px)'
				bgImage={`url('/${bg}')`}
				bgSize='cover'
				bgPos='center'
			>
				<Flex
					maxW='1220px'
					w='90%'
					m='0 auto'
					flexDir='column'
					justifyContent='space-between'
					pt='100px'
					height='full'
					pb='40px'
				>
					<Box height='full'>
						<Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)']} height='full'>
							<Grid alignItems='center' justifyContent={['center', 'initial']}>
								<Image
									src={logo}
									alt=''
									w={['200px', '300px']}
									objectFit='cover'
								/>
							</Grid>
							<Grid placeItems='center' position='relative'>
								<Image
									position={['initial', 'absolute']}
									bottom='-32px'
									src={product}
									alt=''
									// width={['300px', '200px']}
									height={['200px', '420px']}
									objectFit='cover'
									verticalAlign='top'
								/>
							</Grid>
						</Grid>
					</Box>

					<Box>
						<Flex display='inline-flex' position='relative'>
							<Heading
								color='white'
								fontSize={{ base: '40px', lg: '48px' }}
								fontWeight='black'
							>
								Productos
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
					</Box>
				</Flex>
			</Box>
			<Box h='180px' bgColor='#3d3425'>
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
						w={{ base: '100%', md: '90%' }}
						fontSize={['14px', '20px']}
						color='white'
						fontWeight='medium'
					>
						description
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default Header;
