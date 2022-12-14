import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from 'react-icons/fa';

import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideProps {
	slides: any;
}

const Slides: React.FC<SlideProps> = ({ slides }) => {
	const router = useRouter();

	const pagination = {
		clickable: true,
		renderBullet: function (className: any) {
			return '<span class="' + className + '"></span>';
		},
	};

	return (
		<Box height={{ base: '100%', lg: '100vh' }}>
			<Swiper
				pagination={pagination}
				navigation={true}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Navigation, Pagination]}
				className='mySwiper mySwiper-slide'
			>
				{slides.map((slide: any) => (
					<SwiperSlide
						key={slide.id}
						style={{ backgroundImage: `url(${slide.bg})`, zIndex: -100 }}
					>
						<Flex
							pt={{ base: '64px', lg: '0%' }}
							pb={{ base: '64px', lg: 0 }}
							maxW='1400px'
							m='0 auto'
							w='90%'
							height='100%'
							alignItems='center'
							flexDir={{ base: 'column', lg: 'row' }}
							justifyContent={{ base: 'center', lg: 'space-between' }}
						>
							<Box flex={{ base: 'initial', lg: '0.8' }} mr='20px'>
								<Flex mb='30px'>
									<Heading
										fontWeight='bold'
										fontSize={['32px', '52px']}
										textAlign='left'
										lineHeight={['32px', '48px']}
										color='white'
										w='auto'
										position='relative'
										mb='32px'
									>
										<Text as='span'>{slide.title}</Text>

										<Box
											position='absolute'
											width='32px'
											height='12px'
											bgColor='#b41f1b'
											left='0'
											top='-16px'
										/>
									</Heading>
								</Flex>

								{slide.description.map((text: any) => (
									<Text
										key={text}
										fontSize='18px'
										textAlign='left'
										color='white'
										my='20px'
									>
										{text}
									</Text>
								))}

								<Box mt='32px'>
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
								ml={{ base: '0', lg: '30px' }}
								alignSelf='center'
								position='relative'
								w='full'
							>
								<Image
									// position='absolute'
									// top='0'
									// left='0'
									className='image-slides'
									src={slide.image}
									alt=''
									width='400px'
									objectFit='cover'
									objectPosition='bottom'
									m={['auto', 'initial']}
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
