import React from 'react';
import { Flex, Link, LinkProps } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface LinkSocialProps extends LinkProps {
	icon: JSX.Element;
	url: string;
}

const LinkSocial: React.FC<LinkSocialProps> = ({ icon, url, ...rest }) => {
	return (
		<Link
			{...rest}
			display='block'
			href={url}
			target='_blank'
			color='#fff'
			fontSize='24px'
		>
			{icon}
		</Link>
	);
};

const Social: React.FC = () => {
	return (
		<Flex bgColor='#d21a28' flexDir='column' p='20px 10px' rounded='20px'>
			<LinkSocial
				mb='20px'
				icon={<FaWhatsapp />}
				url='https://wa.me/+595971599000'
			/>
			<LinkSocial
				mb='20px'
				icon={<FaFacebookF />}
				url='https://www.facebook.com/ATP.PY'
			/>
			<LinkSocial
				icon={<FaInstagram />}
				url='https://www.instagram.com/atp.paraguay/'
			/>
		</Flex>
	);
};

export default Social;
