import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

interface FilterHeaderProps {
	query: any;
	push: any;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({ query, push }) => {
	console.log(query);

	return (
		<Box>
			<Flex
				mt={['16px', '10px']}
				alignItems={['flex-start', 'center']}
				flexDir={['column', 'row']}
			>
				<NextLink href='/product/lubricantes/lub-veh-liviano#main' passHref>
					<Link
						color={query.type === 'lub-veh-liviano' ? '#fe5101' : '#000'}
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
				<NextLink href='/product/lubricantes/lub-moto#main' passHref>
					<Link
						color={query.type === 'lub-moto' ? '#fe5101' : '#000'}
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
				<NextLink href='/product/lubricantes/lub-aux#main' passHref>
					<Link
						color={query.type === 'lub-aux' ? '#fe5101' : '#000'}
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
				<NextLink href='/product/lubricantes/lub-veh-pesado#main' passHref>
					<Link
						color={query.type === 'lub-veh-pesado' ? '#fe5101' : '#000'}
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
