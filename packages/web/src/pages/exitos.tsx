import React from 'react';
import { GetServerSideProps } from 'next';
import { Box, Heading, Text } from '@chakra-ui/react';

import Layout from '../layout';
import Header from '../components/client/Header';
import { getSuccesses } from './success';

interface SuccessesProps {
	successes: any;
}

interface SuccessProps {
	success: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const successes = await getSuccesses();
	return { props: { successes } };
};

const ItemReview: React.FC<SuccessProps> = ({ success }) => {
	return (
		<Box as='article' p='32px'>
			<Heading
				bgColor='#155e9d'
				fontSize='32px'
				fontWeight='normal'
				color='white'
				textAlign='center'
				py='24px'
				// textTransform='uppercase'
			>
				{success.title}
			</Heading>
			<Box px='26px' pb='26px' bgColor='#333'>
				{success.description.map(item => (
					<Text color='white' fontSize={['16px', '20px']} pt='20px' key={item}>
						{item}
					</Text>
				))}
			</Box>
		</Box>
	);
};

const Clientes: React.FC<SuccessesProps> = ({ successes }) => {
	return (
		<Layout>
			<Header title='Casos de éxito' image='/personas-2.png' />
			<Box py='94px'>
				<Box maxW='1220px' w='90%' m='0 auto'>
					{successes?.infos?.map(item => (
						<ItemReview key={item.id} success={item} />
					))}
				</Box>
			</Box>
		</Layout>
	);
};

export default Clientes;
