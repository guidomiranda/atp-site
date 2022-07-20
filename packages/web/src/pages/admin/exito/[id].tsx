import React, { useState } from 'react';
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

import AdminLayout from '../../../layout/admin';

const ExitoAdminEdit = () => {
	const router = useRouter();

	const [statusValue, setStatusValue] = useState<boolean>(true);

	return (
		<AdminLayout
			title='Título'
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
				<Grid gridTemplateColumns='repeat(2, 1fr)'>
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
							<Input rounded='3px' />
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
								<Textarea rounded='3px' resize='none' />
							</Box>
						</Box>

						<Flex>
							<Flex alignItems='center' mr='20px'>
								<Text mr='12px'>Estado:</Text>
								<Switch
									id='email-alerts'
									size={`lg`}
									defaultChecked={statusValue}
									onChange={() => setStatusValue(!statusValue)}
								/>
							</Flex>
							<Flex alignItems='center'>
								<Text mr='12px'>Orden:</Text>
								<Input w='100px' />
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
							>
								Actualizar información
							</Button>
						</Box>
					</Box>
				</Grid>
			</Box>
		</AdminLayout>
	);
};

export default ExitoAdminEdit;
