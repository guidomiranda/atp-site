import React from 'react';
import NextLink from 'next/link';
import { Link as LinkChakraUI } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Text from '../../components/admin/Text';

interface LinkProps {
	icon: JSX.Element;
	name: string;
	path: string;
}

const Link: React.FC<LinkProps> = ({ icon, name, path }) => {
	const router = useRouter();

	console.log(path);

	return (
		<NextLink href={path} passHref>
			<LinkChakraUI
				bgColor={router.pathname === path ? 'gray.300' : 'transparent'}
				rounded='md'
				display='flex'
				alignItems='center'
				p='8px 12px'
				mb='10px'
				_hover={{ textDecor: 'none' }}
				_focus={{ shadow: 'none' }}
			>
				<Text
					color={router.pathname === path ? 'gray.600' : '#6B7280'}
					fontSize='26px'
				>
					{icon}
				</Text>
				<Text
					ml='10px'
					fontWeight='medium'
					fontSize='14px'
					color={router.pathname === path ? 'gray.600' : '#6B7280'}
				>
					{name}
				</Text>
			</LinkChakraUI>
		</NextLink>
	);
};

export default Link;
