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
		<Box mt='-100px' height='100vh' bgImage='url("/fondo-2.jpg")'>
			<Grid
				gridTemplateColumns={['1fr', '1fr', 'repeat(2,1fr)']}
				gridTemplateRows={['repeat(2,1fr)', 'initial']}
				gap={['32px 0', '0 64px']}
				height='100%'
				maxW='1220px'
				m='0 auto'
				w='90%'
				alignItems='center'
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
										<Text key={text} color='#fff' fontSize='20px' mt='32px'>
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
						h={['450px', '600px']}
						objectPosition='bottom'
					/>
				</Box>
			</Grid>
		</Box>
	);
};

export default Header;
