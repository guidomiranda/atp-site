import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
	const image = '/banner-index.jpg';

	return (
		<Box mt='-100px' width='100%' height='100vh' bgColor='red.700'>
			<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
				<SwiperSlide style={{ backgroundImage: `url(${image})` }}>
					<Flex
						maxW='1220px'
						m='0 auto'
						w='90%'
						height='100%'
						alignItems='center'
						justifyContent='space-between'
					>
						<Box flex='1'>
							<Text
								fontWeight='bold'
								fontSize='48px'
								textAlign='left'
								lineHeight='50px'
								color='white'
							>
								Lubricantes con super protección para todos los autos
							</Text>
						</Box>
						<Box flex='1'>
							<Image
								src='/img-lubricantes-banner.png'
								alt=''
								width='100%'
								height='100%'
							/>
						</Box>
					</Flex>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};

export default Banner;
