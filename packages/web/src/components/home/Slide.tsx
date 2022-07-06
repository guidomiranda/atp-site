import React from 'react';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface SlideProps {
	slides: any;
}

const Slides: React.FC<SlideProps> = ({ slides }) => {
	const router = useRouter();

	return (
		<Box height={{ base: '100%', lg: '700px' }}>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className='mySwiper mySwiper-slide'
			>
				{slides.map(slide => (
					<SwiperSlide style={{ backgroundImage: `url(${slide.bg})` }}>
						<Flex
							pt={{ base: '64px', lg: '0' }}
							maxW='1220px'
							m='0 auto'
							w='90%'
							height='100%'
							alignItems='center'
							flexDir={{ base: 'column', lg: 'row' }}
							justifyContent={{ base: 'center', lg: 'space-between' }}
						>
							<Box flex={{ base: 'initial', lg: '1' }} mr='20px'>
								<Heading
									fontWeight='bold'
									fontSize={['32px', '48px']}
									textAlign='left'
									lineHeight={['32px', '48px']}
									color='white'
								>
									{slide.title}
								</Heading>
								{slide.description.map(text => (
									<Text
										fontSize='18px'
										textAlign='left'
										color='white'
										my='20px'
									>
										{text}
									</Text>
								))}

								<Box mt='26px'>
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
										onClick={() => router.push(slide.path)}
									>
										<Text color='#fff' textTransform='uppercase'>
											Conocer todos
										</Text>
										<Text as='span' color='#fff' ml='10px'>
											<FaArrowRight />
										</Text>
									</Button>
								</Box>
							</Box>
							<Box
								flex={{ base: 'initial', lg: '1' }}
								mt={{ base: '32px', lg: '0' }}
								ml='20px'
								alignSelf='flex-end'
							>
								<Image
									src={slide.image}
									alt=''
									width='100%'
									height='450px'
									objectFit='contain'
								/>
							</Box>
						</Flex>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Slides;
