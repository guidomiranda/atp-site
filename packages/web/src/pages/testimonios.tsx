import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import Header from '../components/client/Header';
import Layout from '../layout';
import { getReviews } from '../utils';

interface ReviewsProps {
	reviews: any;
}
interface ReviewProps {
	review: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const reviews = await getReviews();
	return { props: { reviews } };
};

const ItemReview: React.FC<ReviewProps> = ({ review }) => {
	return (
		<Box as='article' bgColor='#fff' p='32px' mb='56px'>
			<Box mb='15px'>
				{review.body.map(item => (
					<Text key={item} color='black' fontSize={['16px', '20px']}>
						{item}
					</Text>
				))}
			</Box>
			<Text color='black' fontSize={['16px', '20px']}>
				{review.author}
			</Text>
		</Box>
	);
};

const Clientes: React.FC<ReviewsProps> = ({ reviews }) => {
	const testimonios = reviews?.reviews?.filter(item => item.status === true);
	const testimoniosOrdered = testimonios?.sort(
		(a: any, b: any) => a.order - b.order
	);

	return (
		<Layout>
			<Header
				title='Testimonios de quienes nos eligen'
				image='/personas-2.png'
			/>
			<Box bgColor='#155e9d' py='94px'>
				<Box maxW='1220px' w='90%' m='0 auto'>
					{testimoniosOrdered?.map(item => (
						<ItemReview key={item.id} review={item} />
					))}
				</Box>
			</Box>
		</Layout>
	);
};

export default Clientes;
