import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

interface HeaderProps {
	title: string;
	bg: string;
	description: string;
	page?: string;
}

const Header: React.FC<HeaderProps> = ({ bg, title, description, page }) => {
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
							{title}
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
			<Box h='180px' bgColor={page === 'services' ? '#0c1427' : '#015796'}>
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
						w={
							page === 'services'
								? { base: '100%', md: '90%' }
								: { base: '100%', md: '70%' }
						}
						fontSize={page === 'services' ? ['14px', '20px'] : ['16px', '20px']}
						color='white'
						fontWeight='medium'
					>
						{description}
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default Header;
