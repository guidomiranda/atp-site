import { Box, Button, Flex, Grid, Image, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Text from '../../components/admin/Text';
import { UserContext } from '../../context/UserContext';
import { UserAuth } from '../../hooks/useAuth';

import { loginUser } from '../../utils/user';

const Login = () => {
	const router = useRouter();
	const { user, login } = UserAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLoginUser = async e => {
		e.preventDefault();

		if (!email || !password) {
			return toast.error('Todos los campos son obligatorios');
		}

		const data = { email, password };

		const response = await login(data);

		if (response.success) {
			toast.success('Sesión iniciada correctamente');
			router.push('/admin');
		}
	};

	if (user) {
		return (
			<Flex
				alignItems={`center`}
				justifyContent={`center`}
				height={`100vh`}
				overflow={`hidden`}
				flexDir={`column`}
			>
				<Text>Tienes una cuenta iniciada</Text>
				<Button mt={`15px`} onClick={() => router.push('/admin')}>
					Volver al inicio
				</Button>
			</Flex>
		);
	}

	return (
		<Box height={`100vh`} overflow={`hidden`}>
			<Grid
				gridTemplateColumns={{ base: `1fr`, md: `1fr 400px` }}
				gridTemplateRows={{ base: `30vh 70vh`, md: `1fr` }}
				height={`100%`}
			>
				<Box height={{ base: `auto`, md: `100vh` }}>
					<Image
						src={`https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
						alt='Fondo'
						width={`100%`}
						height={`100%`}
						objectFit={`cover`}
						loading='eager'
					/>
				</Box>
				<Flex
					height={{ base: `auto`, md: `100vh` }}
					padding={{ base: `50px 20px`, md: `0 30px` }}
					flexDirection={`column`}
					justifyContent={{ base: `flex-start`, md: `center` }}
				>
					<Grid placeItems={`center`} marginBottom={`20px`}>
						<Image src={`/favicon.png`} w='60px' alt='' />
					</Grid>
					<Box as='form' onSubmit={handleLoginUser}>
						<Input
							type={`email`}
							display={`block`}
							width={`100%`}
							borderRadius={`3px`}
							_focus={{ shadow: 0 }}
							height={`45px`}
							color={`gray.800`}
							marginBottom={`15px`}
							placeholder={`Correo`}
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<Input
							type={`password`}
							display={`block`}
							width={`100%`}
							borderRadius={`3px`}
							_focus={{ shadow: 0 }}
							height={`45px`}
							color={`gray.800`}
							placeholder={`Contraseña`}
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>

						<Button
							type={`submit`}
							backgroundColor={`#115f9d`}
							borderRadius={`3px`}
							width={`100%`}
							marginTop={`20px`}
							height={`45px`}
							color={`#fff`}
							_hover={{ bgColor: '#115f9d' }}
							_focus={{ bgColor: '#115f9d' }}
						>
							Ingresar
						</Button>
					</Box>
				</Flex>
			</Grid>
		</Box>
	);
};

export default Login;
