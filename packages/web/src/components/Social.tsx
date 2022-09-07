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
			display={{ base: 'flex', lg: 'block' }}
			w={{ base: 'full', lg: 'initial' }}
			justifyContent='center'
			alignItems='center'
			href={url}
			target='_blank'
			color='#fff'
			// border={{ base: '1px solid #fff', lg: 0 }}
			fontSize={['26px', '28px']}
			h={{ base: 'full', lg: 'initial' }}
		>
			{icon}
		</Link>
	);
};

const Social: React.FC = () => {
	return (
		<Flex
			bgColor='#d21a28'
			// display={{ base: 'grid', lg: 'flex' }}
			// gridTemplateColumns={{ base: 'repeat(4, 1fr)', lg: 'initial' }}
			flexDir={{ base: 'row', lg: 'column' }}
			p={{ base: '15px', lg: '20px 10px' }}
			rounded={{ base: '15px', lg: '20px' }}
			alignItems='center'
			justifyContent='space-between'
			border='1px solid #fff'
			justifyItems='center'
			// h={{ base: '60px', lg: 'initial' }}
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
