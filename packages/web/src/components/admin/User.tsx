import React from 'react';
import { Box, Button, Flex, Grid, Image } from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import Text from '../../components/admin/Text';

const User: React.FC = () => {
	return (
		<Grid gridTemplateColumns='40px 1fr' alignItems='center' cursor='pointer'>
			<Box w='40px' h='40px'>
				<Image
					src='/avatar.jpg'
					alt=''
					w='100%'
					h='100%'
					rounded='full'
					objectFit='cover'
					verticalAlign='top'
				/>
			</Box>
			<Grid
				gridTemplateColumns='max-content min-content'
				ml='10px'
				justifyContent='space-between'
				// w='full'
				alignItems='center'
			>
				<Box>
					<Text fontSize='14px' fontWeight='medium' color='#3B4A67'>
						Lucas Lamas
					</Text>
					<Text color='#A4AFC6' fontSize='12px' fontWeight='medium'>
						lucas@correo.com
					</Text>
				</Box>

				<Box h='full'>
					<Button
						display='flex'
						flexDir='column'
						minW='initial'
						p='0 10px'
						h='full'
						bgColor='transparent'
						fontSize='26px'
						color='#3B4A67'
						_hover={{ bgColor: 'transparent' }}
						_active={{ bgColor: 'transparent' }}
						_focus={{ shadow: 'none' }}
					>
						<Text fontSize='16px'>
							<FaAngleUp />
						</Text>
						<Text fontSize='16px' mt='-4px'>
							<FaAngleDown />
						</Text>
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};

export default User;
