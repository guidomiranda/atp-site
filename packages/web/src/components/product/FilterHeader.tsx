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
			<Flex alignItems={['flex-start', 'center']} flexDir={['column', 'row']}>
				<Text fontWeight='bold' fontSize='32px'>
					Linea Liviana
				</Text>
				<Text
					fontWeight='bold'
					fontSize='32px'
					ml={['0', '20px']}
					color='#6b7280'
				>
					Linea Pesada
				</Text>
			</Flex>

			<Flex
				mt={['16px', '10px']}
				alignItems={['flex-start', 'center']}
				flexDir={['column', 'row']}
			>
				<NextLink href='/product/filters/aire#main' passHref>
					<Link
						color={query.type === 'aire' ? '#fe5101' : '#000'}
						fontWeight='bold'
						_hover={{ textDecoration: 'none' }}
						mb={['10px', '0']}
						fontSize={['18px', '16px']}
					>
						Filtro de aire
					</Link>
				</NextLink>
				<Box
					w='3px'
					bgColor='#000'
					height='20px'
					mx='10px'
					display={['none', 'block']}
				/>
				<NextLink href='/product/filters/aceite#main' passHref>
					<Link
						color={query.type === 'aceite' ? '#fe5101' : '#000'}
						fontWeight='bold'
						_hover={{ textDecoration: 'none' }}
						mb={['10px', '0']}
						fontSize={['18px', '16px']}
					>
						Filtro de aceite
					</Link>
				</NextLink>
				<Box
					w='3px'
					bgColor='#000'
					height='20px'
					mx='10px'
					display={['none', 'block']}
				/>
				<NextLink href='/product/filters/combustible#main' passHref>
					<Link
						color={query.type === 'combustible' ? '#fe5101' : '#000'}
						fontWeight='bold'
						_hover={{ textDecoration: 'none' }}
						mb={['10px', '0']}
						fontSize={['18px', '16px']}
					>
						Filtro de combustible
					</Link>
				</NextLink>
			</Flex>
		</Box>
	);
};

export default FilterHeader;
