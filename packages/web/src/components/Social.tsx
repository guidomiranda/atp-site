import React from 'react';
import { Flex, Link, LinkProps } from '@chakra-ui/react';
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedin,
	FaWhatsapp,
} from 'react-icons/fa';

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
			fontSize={['28px', '24px']}
		>
			{icon}
		</Link>
	);
};

const Social: React.FC = () => {
	return (
		<Flex
			bgColor='#d21a28'
			flexDir={{ base: 'row', lg: 'column' }}
			p={{ base: '12px 20px', lg: '20px 10px' }}
			rounded='20px'
			alignItems='center'
			justifyContent='space-between'
			border='1px solid #fff'
		>
			<LinkSocial
				mb={{ base: '0', lg: '20px' }}
				icon={<FaWhatsapp />}
				url='https://wa.me/+595971599000'
			/>
			<LinkSocial
				mb={{ base: '0', lg: '20px' }}
				icon={<FaFacebookF />}
				url='https://www.facebook.com/ATP.PY'
			/>
			<LinkSocial
				mb={{ base: '0', lg: '20px' }}
				icon={<FaInstagram />}
				url='https://www.instagram.com/atp.paraguay/'
			/>
			<LinkSocial
				icon={<FaLinkedin />}
				url='https://www.linkedin.com/company/atp-paraguay/'
			/>
		</Flex>
	);
};

export default Social;
