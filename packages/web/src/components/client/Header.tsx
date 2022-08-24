import React from 'react';
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

interface HeaderProps {
	title: string;
	image: string;
	bg?: string;
	description?: string[];
}

const Header: React.FC<HeaderProps> = ({ title, image, description }) => {
	return (
		<Box
			mt='-100px'
			height={{ base: '100%', lg: '100vh' }}
			bgImage='url("/fondo-2.jpg")'
		>
			<Grid
				gridTemplateColumns={['1fr', '1fr', '1fr 1.3fr']}
				gridTemplateRows={['repeat(2,auto)', 'initial']}
				gap={['32px 0', '0 64px']}
				height='100%'
				maxW='1370px'
				m='0 auto'
				w='90%'
				pt={{ base: '100px', lg: '13%' }}

				// alignItems='center'
			>
				<Box alignSelf={['flex-end', 'flex-end', 'initial']}>
					<Flex position='relative' display='inline-flex'>
						<Box>
							<Heading
								fontSize={['32px', '42px']}
								fontWeight='black'
								color='#fff'
							>
								{title}
							</Heading>
							{!description
								? null
								: description.map(text => (
										<Text
											key={text}
											color='#fff'
											fontSize={{ base: '14px', lg: '20px' }}
											mt='32px'
										>
											{text}
										</Text>
								  ))}
							<Box
								position='absolute'
								width='30px'
								height='14px'
								bgColor='#b41f1b'
								left='0'
								top='-16px'
							/>
						</Box>
					</Flex>
				</Box>
				<Box alignSelf='flex-end'>
					<Image
						src={image}
						alt=''
						width={['initial', '100%']}
						objectFit='contain'
						h={['100%', '600px']}
						objectPosition='bottom'
					/>
				</Box>
			</Grid>
		</Box>
	);
};

export default Header;
