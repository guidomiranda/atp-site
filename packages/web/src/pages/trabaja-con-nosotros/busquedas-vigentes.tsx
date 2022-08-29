import React, { useState } from 'react';
import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import dayjs from 'dayjs';

import Layout from '../../layout';
import router, { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';

function usePosts() {
	return useQuery(['posts'], async () => {
		const data = await axios({
			method: 'GET',
			url: '/vacancias',
		});

		return data.data.data;
	});
}

const articlesData = [
	{
		id: '1',
		title: '',
		body: '<p><strong>Cargo: Coordinador/a de Certificación Forestal Oficina: Concepción – Paraguay</strong></p><p><strong>¿Tenés experiencia desarrollando las siguientes actividades?</strong></p><ul><li>Desarrollando e implementando los procedimientos del sistema de certificación FSC y CERFLOR.</li><li>Realizando auditorías en las unidades de manejo forestal internas y externas.</li><li>Realizando procesos de reclutamiento y selección de personas.</li><li>Brindando capacitaciones vinculadas a los sistemas implementados.</li><li>Gestionando equipos de trabajo.</li></ul><p><strong>Algunos requisitos para este cargo:</strong></p><p>Ingeniería Ambiental.</p><ul><li>Experiencia mínima de 5 años en implementación y mantenimiento de certificaciones forestales.</li><li>Disponibilidad para residir en Concepción.</li><li>Manejo avanzado de Power BI, GIS y Excel.</li><li>Inglés (deseable).</li></ul><p>Vigencia hasta el 31/08/2022</p>',
		image: '/busq.png',
		category: 'comercial',
	},
	{
		id: '2',
		title: '',
		body: '<p><strong>Cargo: Coordinador/a de Certificación Forestal Oficina: Concepción – Paraguay</strong></p><p><strong>¿Tenés experiencia desarrollando las siguientes actividades?</strong></p><ul><li>Desarrollando e implementando los procedimientos del sistema de certificación FSC y CERFLOR.</li><li>Realizando auditorías en las unidades de manejo forestal internas y externas.</li><li>Realizando procesos de reclutamiento y selección de personas.</li><li>Brindando capacitaciones vinculadas a los sistemas implementados.</li><li>Gestionando equipos de trabajo.</li></ul><p><strong>Algunos requisitos para este cargo:</strong></p><p>Ingeniería Ambiental.</p><ul><li>Experiencia mínima de 5 años en implementación y mantenimiento de certificaciones forestales.</li><li>Disponibilidad para residir en Concepción.</li><li>Manejo avanzado de Power BI, GIS y Excel.</li><li>Inglés (deseable).</li></ul><p>Vigencia hasta el 31/08/2022</p>',
		image: '/busq.png',
		category: 'administracion',
	},
	{
		id: '3',
		title: '',
		body: '<p><strong>Cargo: Coordinador/a de Certificación Forestal Oficina: Concepción – Paraguay</strong></p><p><strong>¿Tenés experiencia desarrollando las siguientes actividades?</strong></p><ul><li>Desarrollando e implementando los procedimientos del sistema de certificación FSC y CERFLOR.</li><li>Realizando auditorías en las unidades de manejo forestal internas y externas.</li><li>Realizando procesos de reclutamiento y selección de personas.</li><li>Brindando capacitaciones vinculadas a los sistemas implementados.</li><li>Gestionando equipos de trabajo.</li></ul><p><strong>Algunos requisitos para este cargo:</strong></p><p>Ingeniería Ambiental.</p><ul><li>Experiencia mínima de 5 años en implementación y mantenimiento de certificaciones forestales.</li><li>Disponibilidad para residir en Concepción.</li><li>Manejo avanzado de Power BI, GIS y Excel.</li><li>Inglés (deseable).</li></ul><p>Vigencia hasta el 31/08/2022</p>',
		image: '/busq.png',
		category: 'comercial',
	},
];

const profiles = [
	{ id: '1', title: 'Todas', value: 'todas' },
	{ id: '2', title: 'Administración', value: 'administracion' },
	{ id: '4', title: 'Comercial', value: 'comercial' },
	{ id: '5', title: 'Logística', value: 'logistica' },
	{ id: '6', title: 'RRHH', value: 'rrhh' },
	{ id: '7', title: 'Marketing', value: 'marketing' },
	{ id: '8', title: 'Servicios Generales', value: 'serv-generales' },
];

const NavLink = ({ value, children, setCurrentValue, currentValue }) => {
	return (
		<Button
			p='0'
			paddingBottom='3px'
			borderBottom={
				value === currentValue ? '2px solid #fff' : '2px solid transparent'
			}
			w='auto'
			rounded='0'
			mx='0 auto'
			display='block'
			// w='full'
			bgColor='transparent'
			color='#fff'
			h='auto'
			minW='initial'
			_focus={{ shadow: 0 }}
			_hover={{ bgColor: 'transparent' }}
			_active={{ bgColor: 'transparent' }}
			onClick={() => setCurrentValue(value)}
			mb='15px'
		>
			{children}
		</Button>
	);
};

const ArticleItem = ({ article }) => {
	const router = useRouter();

	return (
		<Grid
			gridTemplateColumns={{ base: '1fr', lg: '1.5fr 2fr' }}
			gap='32px 48px'
			borderTop='10px solid #b41f1b'
			py='56px'
		>
			<Box>
				<Image src={article?.imagen} w='full' alt='' />
			</Box>
			<Box>
				<Box>
					<Text fontWeight='bold'>{article?.titulo}</Text>

					<Box mt='5px'>
						<Text
							fontWeight='bold'
							my='5px'
							display={article?.preguntas?.length === 0 ? 'none' : 'block'}
						>
							¿Tenés experiencia desarrollando las siguientes actividades?
						</Text>
						{article?.preguntas?.map((item: any) => (
							<Text as='li'>{item}</Text>
						))}
					</Box>

					<Box mt='15px'>
						<Text
							display={article?.requisitos?.length === 0 ? 'none' : 'block'}
							fontWeight='bold'
							my='5px'
						>
							Algunos requisitos para este cargo:
						</Text>
						{article?.requisitos?.map((item: any) => (
							<Text as='li'>{item}</Text>
						))}
					</Box>

					<Box mt='20px'>
						<Text>
							Vigencia hasta el {dayjs(article?.vigencia).format('DD/MM/YY')}
						</Text>
					</Box>
				</Box>

				<Box mt='20px'>
					<Button
						bgColor='#b41f1b'
						color='#fff'
						py='6px'
						px='32px'
						rounded='2px'
						onClick={() => router.push('/trabaja-con-nosotros/cv#main')}
					>
						Postular
					</Button>
				</Box>
			</Box>
		</Grid>
	);
};

const BusquedasVigentes = () => {
	const [currentValue, setCurrentValue] = useState<string>('todas');

	const { data: allArticles, isFetching } = usePosts();

	const renderArticles =
		currentValue === 'todas'
			? allArticles
			: allArticles?.filter(item => item.area === currentValue);

	return (
		<Layout>
			<Flex w='full' bgColor='#d9d9d9'>
				<Box w='90%' m='0 auto' maxW='1220px' py='56px'>
					<Flex position='relative' display='inline-flex'>
						<Heading fontSize='48px' fontWeight='black' color='#015796'>
							Trabaja con nosotros
						</Heading>
						<Box
							position='absolute'
							width='30px'
							height='12px'
							bgColor='#b41f1b'
							left='0'
							top='-8px'
						/>
					</Flex>
				</Box>
			</Flex>

			<Flex
				maxW='1220px'
				w='90%'
				m='0 auto'
				mt='96px'
				alignItems='center'
				mb='20px'
			>
				<Heading
					fontSize='26px'
					fontWeight='bold'
					color='#015796'
					textTransform='uppercase'
				>
					Búsquedas Vigentes
				</Heading>
				<Text as='span' ml='7px' color='#333' fontSize='20px' fontWeight='bold'>
					({renderArticles?.length})
				</Text>
			</Flex>
			<Grid
				gridTemplateColumns={{ base: '1fr', md: '2fr 1fr', lg: '1fr 300px' }}
				pb='96px'
				maxW='1220px'
				w='90%'
				m='0 auto'
				gap='32px'
				alignItems='start'
			>
				<Box>
					{renderArticles?.length === 0 ? (
						<Box textAlign='center'>
							<Text>
								Por el momento no existen búsquedas vigentes, de igual manera
								déjanos tu CV
							</Text>
							<Button
								bgColor='#b41f1b'
								color='#fff'
								py='10px'
								px='32px'
								rounded='2px'
								mt='15px'
								_hover={{ bgColor: '#b41f1b' }}
								_active={{ bgColor: '#b41f1b' }}
								onClick={() => router.push('/trabaja-con-nosotros/cv')}
							>
								Déjanos tu CV
								<Text as='span' ml='7px'>
									<FaArrowRight />
								</Text>
							</Button>
						</Box>
					) : isFetching ? (
						<Box>
							<Text>Cargando..</Text>
						</Box>
					) : (
						renderArticles.map(item => (
							<ArticleItem key={item.id} article={item} />
						))
					)}
				</Box>
				<Box bgColor='#b41f1b' p='20px' pb='15px' order={{ base: -1, md: 10 }}>
					<Text
						color='#fff'
						textAlign='center'
						fontWeight='bold'
						fontSize='22px'
						textTransform='uppercase'
						mb='15px'
					>
						Áreas
					</Text>

					<Flex flexDir='column' alignItems='center'>
						{profiles.map(item => (
							<NavLink
								key={item.id}
								currentValue={currentValue}
								value={item.value}
								setCurrentValue={setCurrentValue}
							>
								{item.title}
							</NavLink>
						))}
					</Flex>
				</Box>
			</Grid>
		</Layout>
	);
};

export default BusquedasVigentes;
