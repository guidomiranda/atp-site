import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

interface FilterHeaderProps {
	query: any;
	push: any;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({ query, push }) => {
	return (
		<Box>
			<Flex
				mt={['16px', '10px']}
				alignItems={['flex-start', 'center']}
				flexDir={['column', 'row']}
			>
				<NextLink href='/product/lubricantes/veh-liviano#main' passHref>
					<Link
						color={query.type === 'veh-liviano' ? '#fe5101' : '#000'}
						fontWeight='bold'
						_hover={{ textDecoration: 'none' }}
						mb={['10px', '0']}
						fontSize={['18px', '16px']}
					>
						Línea para vehículos livianos
					</Link>
				</NextLink>
				<Box
					w='3px'
					bgColor='#000'
					height='20px'
					mx='10px'
					display={['none', 'block']}
				/>
				<NextLink href='/product/lubricantes/moto#main' passHref>
					<Link
						color={query.type === 'moto' ? '#fe5101' : '#000'}
						fontWeight='bold'
						_hover={{ textDecoration: 'none' }}
						mb={['10px', '0']}
						fontSize={['18px', '16px']}
					>
						Línea para motos
					</Link>
				</NextLink>
				<Box
					w='3px'
					bgColor='#000'
					height='20px'
					mx='10px'
					display={['none', 'block']}
				/>
				<NextLink href='/product/lubricantes/auxiliares#main' passHref>
					<Link
						color={query.type === 'auxiliares' ? '#fe5101' : '#000'}
						fontWeight='bold'
						_hover={{ textDecoration: 'none' }}
						mb={['10px', '0']}
						fontSize={['18px', '16px']}
					>
						Auxiliares
					</Link>
				</NextLink>
				<Box
					w='3px'
					bgColor='#000'
					height='20px'
					mx='10px'
					display={['none', 'block']}
				/>
				<NextLink href='/product/lubricantes/veh-pesado#main' passHref>
					<Link
						color={query.type === 'veh-pesado' ? '#fe5101' : '#000'}
						fontWeight='bold'
						_hover={{ textDecoration: 'none' }}
						mb={['10px', '0']}
						fontSize={['18px', '16px']}
					>
						Línea para vehículos pesados
					</Link>
				</NextLink>
			</Flex>
		</Box>
	);
};

export default FilterHeader;
