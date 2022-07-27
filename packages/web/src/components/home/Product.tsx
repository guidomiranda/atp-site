import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Image,
	Link,
	Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ProductProps {
	product: any;
}

const Product: React.FC<ProductProps> = ({ product }) => {
	const router = useRouter();

	return (
		<Box
			bgImage='url("/bg-products.png")'
			bgSize='cover'
			bgPos='center'
			mb='140px'
		>
			<Grid
				color='#fff'
				gridTemplateColumns={{ base: '100%', lg: '1.5fr 1fr' }}
				alignItems='center'
				gap={{ base: '32px 0', lg: '0' }}
			>
				<Flex
					p={{
						base: '20px',
						lg: '32px 50px 44px 50px',
					}}
					flexDir='column'
					justifyContent='space-between'
				>
					<Box>
						<Flex mb='24px' display='inline-flex' position='relative'>
							<Heading
								color='#fff'
								fontSize={['32px', '62px']}
								fontWeight={['bold', 'black']}
							>
								{product.title}
							</Heading>
							<Box
								position='absolute'
								w='35px'
								height='12px'
								bgColor='#b41f1b'
								top='-6px'
								left='0'
							/>
						</Flex>
						<Box>
							{product.description.map(text => (
								<Text
									key={text}
									color='#fff'
									fontSize={['16px', '20px']}
									width='100%'
									textAlign='justify'
									mb='10px'
								>
									{text}
								</Text>
							))}
						</Box>
					</Box>

					{product.more_info && (
						<Box mt='20px'>
							<Text fontSize='20px' fontWeight='bold'>
								¿Necesitas más información?
							</Text>
							<Text fontSize='20px'>
								Visita de forma directo el sitio web oficial de la marca.
							</Text>
						</Box>
					)}

					<Box mt='26px'>
						{product.target === true ? (
							<Link
								href={product.path}
								// width={{ base: '100%', lg: 'auto' }}
								display='inline-flex'
								bgColor='#b41f1b'
								rounded='full'
								height='60px'
								px='42px'
								alignItems='center'
								_hover={{ bgColor: '#dd2622' }}
								_active={{ bgColor: '#841715' }}
								target='_blank'
							>
								<Text>VISITAR SITIO WEB OFICIAL</Text>
								<Text as='span' color='#fff' ml='10px'>
									<FaArrowRight />
								</Text>
							</Link>
						) : (
							<Button
								width={{ base: '100%', lg: 'auto' }}
								display='flex'
								bgColor='#b41f1b'
								rounded='full'
								height='60px'
								px='42px'
								alignItems='center'
								_hover={{ bgColor: '#dd2622' }}
								_active={{ bgColor: '#841715' }}
								onClick={() => router.push(product.path)}
							>
								<Text fontWeight='normal' textTransform='uppercase'>
									Ver productos
								</Text>
								<Text as='span' color='#fff' ml='10px'>
									<FaArrowRight />
								</Text>
							</Button>
						)}
					</Box>
				</Flex>
				<Box
					alignSelf='flex-start'
					p={{ base: '20px', lg: '0' }}
					pb={{ base: '40px', lg: '0' }}
					transform={{ base: 'translate(0, 0)', lg: 'translate(60px, -60px)' }}
				>
					<Box>
						<Image
							src={product.image}
							alt=''
							width='100%'
							objectFit='cover'
							verticalAlign='top'
						/>
					</Box>
				</Box>
			</Grid>
		</Box>
	);
};

export default Product;
