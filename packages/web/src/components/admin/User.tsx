import React from 'react';
import { Box, Button, Flex, Grid, Image } from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';

import Text from '../../components/admin/Text';
import { useRouter } from 'next/router';

interface UserIprops {
	user: any;
}

const User: React.FC<UserIprops> = ({ user }) => {
	const router = useRouter();

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
						{user?.name}
					</Text>
					<Text color='#A4AFC6' fontSize='12px' fontWeight='medium'>
						{user?.email}
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
						fontSize='32px'
						color='#3B4A67'
						_hover={{ bgColor: 'transparent' }}
						_active={{ bgColor: 'transparent' }}
						_focus={{ shadow: 'none' }}
						border='1px solid hsla(219, 27%, 31%, 0.5)'
						onClick={() => router.push('/admin/settings')}
					>
						<Text fontSize='16px'>
							<FiSettings />
						</Text>
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};

export default User;
