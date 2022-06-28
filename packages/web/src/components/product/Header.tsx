import React from 'react';
import { Box, Text, Heading, Flex, Grid, Image } from '@chakra-ui/react';

interface HeaderProps {
	children?: React.ReactNode;
	bg: string;
	logo: string;
	product: string;
	query: any;
}

const Header: React.FC<HeaderProps> = ({
	bg,
	logo,
	product,
	children,
	query,
}) => {
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
									w={['170px', '300px']}
									objectFit='cover'
								/>
							</Grid>
							<Grid placeItems='center' position='relative'>
								<Image
									position={['initial', 'absolute']}
									bottom='-32px'
									right='0'
									src={product}
									alt=''
									height={['170px', '500px']}
									objectFit={query.category ? 'cover' : 'contain'}
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
			<Box h='180px' bgColor={query.category ? '#3d3425' : '#fe5101'}>
				{children}
			</Box>
		</Box>
	);
};

export default Header;