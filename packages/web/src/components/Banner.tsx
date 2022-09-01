import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = ({ banners }) => {
	return (
		<Box mt='-100px' width='100%' height={{ base: '200px', lg: '100vh' }}>
			<Swiper
				navigation={true}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				modules={[Navigation, Autoplay]}
				className='mySwiper-slide'
			>
				{banners?.map((banner: any) => (
					<SwiperSlide
						key={banner.id}
						style={{
							backgroundImage: `url(${banner.bg})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
					>
						<Flex
							display={{ base: 'none', lg: 'flex' }}
							maxW='1220px'
							m='0 auto'
							w='90%'
							height='100%'
							alignItems='center'
							flexDir={{ base: 'column', lg: 'row' }}
							justifyContent={{ base: 'center', lg: 'space-between' }}
						>
							<Box flex={{ base: 'initial', lg: '1' }}>
								<Text
									fontWeight='bold'
									fontSize={['20px', '32px', '56px']}
									textAlign={['center', 'left']}
									lineHeight={['16px', '32px', '56px']}
									color='white'
									mb='25px'
								>
									{banner.title}
								</Text>

								<Box>
									{banner.description &&
										banner.description.map(item => (
											<Text mt='15px' textAlign='left' key={item} color='#fff'>
												{item}
											</Text>
										))}
								</Box>
							</Box>
							<Box flex={{ base: 'initial', lg: '1' }}>
								{banner.image && (
									<Image
										src={banner.image}
										alt=''
										width={{ base: '50px', lg: '100%' }}
										height={{ base: 'initial', lg: '100%' }}
									/>
								)}
							</Box>
						</Flex>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Banner;
