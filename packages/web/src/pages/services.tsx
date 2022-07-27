import React from 'react';
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../layout';
import Header from '../components/Header';
import { FaAngleDoubleRight } from 'react-icons/fa';

interface ArticleItemProps {
	title: string;
	description?: string;
	image: string;
	children?: React.ReactNode;
	isBackground?: boolean;
}

interface ValuesQuoteProps {
	description: string;
}

const ValuesQuote: React.FC<ValuesQuoteProps> = ({ description }) => {
	return (
		<Box position='relative' as='article' mb='12px'>
			<Box ml='36px'>
				<Text>{description}</Text>
			</Box>
			<Box position='absolute' top='0' left='0'>
				<Text color='#b41f1b' fontSize='22px'>
					<FaAngleDoubleRight />
				</Text>
			</Box>
		</Box>
	);
};

const ArticleItem: React.FC<ArticleItemProps> = ({
	title,
	description,
	image,
	children,
	isBackground,
}) => {
	return (
		<Box
			bgImage={
				isBackground
					? 'linear-gradient(rgb(236, 236, 237), rgb(254, 255, 254))'
					: 'initial'
			}
		>
			<Grid
				py='96px'
				gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
				gap={['32px 0', '0 72px']}
				alignItems='center'
				maxW='1220px'
				w='90%'
				m='0 auto'
			>
				<Box>
					<Box>
						<Flex position='relative' display='inline-flex'>
							<Heading
								fontSize={['32px', '42px']}
								fontWeight='black'
								color={isBackground ? '#015796' : '#fff'}
							>
								{title}
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
					<Box mt='32px' color={isBackground ? '#000' : '#fff'}>
						{children || description}
					</Box>
				</Box>

				<Grid placeItems='center'>
					<Image
						src={image}
						alt=''
						width='300px'
						height='300px'
						objectFit='cover'
						verticalAlign='top'
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

const Services = () => {
	return (
		<Layout title='Servicios'>
			<Header
				page='services'
				title='Servicios'
				description='Las necesidades de cada cliente son únicas por eso nuestros servicios están orientados a desarrollar una solución específica para su necesidad, pensado y ejecutado para perfeccionar áreas identificadas conjuntamente y orientadas a reducir costos y aumentar la productividad.'
				bg='banner-atp-servicios.jpg'
			/>

			<Box>
				<Box bgImage='linear-gradient(rgb(13, 20, 38), rgb(87, 86, 84))'>
					<ArticleItem
						title='Capacitación'
						description='Creemos en la capacitación continua de nuestros clientes y sus empleados, y para ello ofrecemos cursos y charlas de capacitación en lubricantes. Estos cursos se realizan durante todo el año y en distintas partes del país. Los temas incluyen tipos de lubricantes, lubricación, almacenamiento, manoseo y descarte, divididos.'
						image='/servicios-1.jpg'
					/>
					<ArticleItem
						title=' Estudio de Planta'
						description='Nuestra excelencia se refleja en la atención a los detalles a fin de identificar las necesidades de cada planta. Nuestros servicios industriales son planificados a través del estudio detallado de la operación y mantenimiento de la planta. En esta etapa son identificadas las soluciones de lubricación que llevará a la reducción de costos, al aumento de la productividad y a la reducción de los riesgos ambientales.'
						image='/servicios-2.jpg'
					/>
					<ArticleItem
						title=' Control de los Lubricantes'
						description='Ofrecemos servicio de análisis laboratoriales para determinar la vida útil de los lubricantes, evaluando así las condiciones de uso de maquinarias de nuestros clientes. Esto nos permite asesorarles en el mejor cuidado en el uso de sus equipos y brindarles los resultados con las recomendaciones de soluciones en lubricación.'
						image='/servicios-3.jpg'
					/>
				</Box>

				<ArticleItem
					title='Servicios Especializados'
					isBackground
					children={
						<Box>
							<ValuesQuote description='Plano de Lubricación' />
							<ValuesQuote description='Inspecciones de componentes y sistemas ' />
							<ValuesQuote description='Estudios y recomendaciones sobre almacenamiento y manoseo de lubricantes' />
							<ValuesQuote description='Inspecciones para detección de perdidas ' />
							<ValuesQuote description='Estudios y recomendaciones sobre descarte de lubricantes usados y embalajes' />
							<ValuesQuote description='Estudio y solución de problemas técnicos relacionados a la lubricación' />
							<ValuesQuote description='Otras actividades relacionadas al mantenimiento y lubricación' />
						</Box>
					}
					image='/servicios-4.jpg'
				/>
			</Box>
		</Layout>
	);
};

export default Services;
