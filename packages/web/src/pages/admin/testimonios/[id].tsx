import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import {
	Box,
	Button,
	Flex,
	Grid,
	Input,
	Switch,
	Text,
	Textarea,
} from '@chakra-ui/react';
import { BsArrowLeftShort } from 'react-icons/bs';
import produce from 'immer';

import AdminLayout from '../../../layout/admin';
import { getReview, updateReview } from '../../../utils';
import { FaPlus, FaTrash } from 'react-icons/fa';

export const getServerSideProps: GetServerSideProps = async context => {
	const testimonio = await getReview(context.query.id as string);
	return { props: { testimonio: testimonio.review } };
};

const TestimonioAdminEdit = ({ testimonio }) => {
	const router = useRouter();

	const [testimonial, setTestimonial] = useState<any>(testimonio);
	const [descriptionArray, setDescriptionArray] = useState<any>(
		testimonio.body
	);

	const handleAddDescriptionArray = () => {
		setDescriptionArray([...descriptionArray, '']);
	};

	const handleDeleteDescriptionArray = (body: any) => {
		setDescriptionArray((current: any) =>
			current.filter((item: any) => item !== body)
		);
	};

	const handleTestimonialUpdate = async () => {
		const testimonialUpdated = {
			...testimonial,
			body: descriptionArray,
		};
		delete testimonialUpdated.id;

		const response = await updateReview(testimonial.id, testimonialUpdated);

		if (response.status) {
			console.log('actualizado');
			router.push('/admin/testimonios');
		} else {
			console.log('error');
			router.push('/admin/testimonios');
		}
	};

	return (
		<AdminLayout
			title='Nombre del autor'
			back={
				<Box>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						onClick={() => router.push('/admin/testimonios')}
						display='flex'
						alignItems='center'
					>
						<Text fontSize='22px' mr='5px'>
							<BsArrowLeftShort />
						</Text>
						<Text color='#3B4A67' fontWeight='medium'>
							Volver
						</Text>
					</Button>
				</Box>
			}
		>
			<Box padding='20px'>
				<Box w={['100%', '90%', '80%']}>
					<Box>
						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Autor
							</Text>
							<Input
								rounded='3px'
								value={testimonial.author}
								onChange={e =>
									setTestimonial({ ...testimonial, author: e.target.value })
								}
							/>
						</Box>

						<Box mb='20px'>
							<Text
								fontSize='12px'
								fontWeight='medium'
								textTransform='uppercase'
								mb='5px'
								color='#555'
							>
								Descripción
							</Text>
							<Box>
								{descriptionArray?.map((item: any, index: number) => (
									<Grid
										gridTemplateColumns='1fr repeat(2, auto)'
										key={index}
										gap='0 10px'
										alignItems='center'
										mb='15px'
									>
										<Textarea
											rounded='3px'
											h='10rem'
											resize='none'
											value={item}
											onChange={e => {
												const text = e.target.value;
												setDescriptionArray(currentDescription =>
													produce(currentDescription, v => {
														v[index] = text;
													})
												);
											}}
										/>
										<Button
											display='block'
											minW='initial'
											h='10rem'
											bgColor='gray.200'
											color='blue.700'
											p='0 15px'
											_hover={{ bgColor: 'gray.200' }}
											onClick={handleAddDescriptionArray}
										>
											<FaPlus />
										</Button>
										<Button
											display='block'
											minW='initial'
											h='10rem'
											bgColor='gray.600'
											color='#fff'
											p='0 15px'
											_hover={{ bgColor: 'gray.600' }}
											onClick={() => handleDeleteDescriptionArray(item)}
										>
											<FaTrash />
										</Button>
									</Grid>
								))}
							</Box>
						</Box>

						<Flex>
							<Flex alignItems='center' mr='20px'>
								<Text mr='12px'>Estado:</Text>
								<Switch
									id='email-alerts'
									size={`lg`}
									defaultChecked={testimonial.status}
									onChange={() =>
										setTestimonial({
											...testimonial,
											status: !testimonial.status,
										})
									}
								/>
							</Flex>
							<Flex alignItems='center'>
								<Text mr='12px'>Orden:</Text>
								<Input
									w='100px'
									value={testimonial.order}
									onChange={e =>
										setTestimonial({
											...testimonial,
											order: Number(e.target.value),
										})
									}
								/>
							</Flex>
						</Flex>

						<Box mt='30px'>
							<Button
								fontWeight='medium'
								rounded='3px'
								h='50px'
								bgColor='#8C95A6'
								color='#fff'
								px='32px'
								_hover={{ bgColor: '#8C95A6' }}
								onClick={handleTestimonialUpdate}
							>
								Actualizar información
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</AdminLayout>
	);
};

export default TestimonioAdminEdit;
