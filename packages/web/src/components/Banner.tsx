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
		<Box mt='-100px' width='100%' height='100vh'>
			<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
				<SwiperSlide style={{ backgroundImage: `url(${image})` }}>
					<Flex
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
								fontSize={['32px', '48px']}
								textAlign='left'
								lineHeight={['32px', '48px']}
								color='white'
							>
								Lubricantes con super protección para todos los autos
							</Text>
						</Box>
						<Box flex={{ base: 'initial', lg: '1' }}>
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
