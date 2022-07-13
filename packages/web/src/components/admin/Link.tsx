import React from 'react';
import NextLink from 'next/link';
import { Link as LinkChakraUI, Text } from '@chakra-ui/react';

interface LinkProps {
	icon: JSX.Element;
	name: string;
	path: string;
}

const Link: React.FC<LinkProps> = ({ icon, name, path }) => {
	return (
		<NextLink href={path} passHref>
			<LinkChakraUI
				display='flex'
				alignItems='center'
				p='5px'
				mb='14px'
				_hover={{ textDecor: 'none' }}
			>
				<Text color='#6B7280' fontSize='26px'>
					{icon}
				</Text>
				<Text
					ml='10px'
					fontWeight='medium'
					fontSize='14px'
					color='#6B7280'
					// textTransform='uppercase'
				>
					{name}
				</Text>
			</LinkChakraUI>
		</NextLink>
	);
};

export default Link;
