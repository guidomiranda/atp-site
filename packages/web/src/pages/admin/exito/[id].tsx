import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import produce from 'immer';
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
import { FaPlus, FaTrash } from 'react-icons/fa';

import AdminLayout from '../../../layout/admin';
import { getSuccess, updateSuccess } from '../../../utils';

export const getServerSideProps: GetServerSideProps = async context => {
	const success = await getSuccess(context.query.id as string);
	return { props: { success: success.info } };
};

const ExitoAdminEdit = ({ success }) => {
	const router = useRouter();

	const [successInfo, setSuccessInfo] = useState<any>(success);
	const [descriptionArray, setDescriptionArray] = useState<any>(
		success.description
	);

	const handleAddDescriptionArray = () => {
		setDescriptionArray([...descriptionArray, '']);
	};

	const handleDeleteDescriptionArray = (body: any) => {
		setDescriptionArray((current: any) =>
			current.filter((item: any) => item !== body)
		);
	};

	const handleUpdateSuccessInfo = async () => {
		const successInfoUpdated = {
			...successInfo,
			description: descriptionArray,
		};

		delete successInfoUpdated.id;

		const response = await updateSuccess(successInfo.id, successInfoUpdated);
		console.log(response);
	};

	return (
		<AdminLayout
			title={successInfo.title}
			back={
				<Box>
					<Button
						minW='initial'
						h='45px'
						rounded='3px'
						bgColor='#e5e7eb'
						onClick={() => router.push('/admin/exito')}
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
								Título
							</Text>
							<Input
								rounded='3px'
								value={successInfo.title}
								onChange={e =>
									setSuccessInfo({ ...successInfo, title: e.target.value })
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
									defaultChecked={successInfo.status}
									onChange={() =>
										setSuccessInfo({
											...successInfo,
											status: !successInfo.status,
										})
									}
								/>
							</Flex>
							<Flex alignItems='center'>
								<Text mr='12px'>Orden:</Text>
								<Input
									w='100px'
									value={successInfo.order}
									onChange={e =>
										setSuccessInfo({
											...successInfo,
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
								onClick={handleUpdateSuccessInfo}
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

export default ExitoAdminEdit;
