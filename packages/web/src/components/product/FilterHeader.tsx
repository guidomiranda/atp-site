import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

interface FilterHeaderProps {
	query: any;
	push: any;
	pathname: any;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({
	query,
	push,
	pathname,
}) => {
	return (
		<Box>
			<Flex alignItems={['flex-start', 'center']} flexDir={['column', 'row']}>
				<NextLink href='/product/filters/liviana/aire#main' passHref>
					<Link
						fontWeight='bold'
						fontSize='32px'
						cursor='pointer'
						color={query.line === 'liviana' ? '#000' : '#6b7280'}
						_hover={{ textDecor: 'none' }}
					>
						Linea Liviana
					</Link>
				</NextLink>

				<NextLink href='/product/filters/pesada/aire#main' passHref>
					<Link
						fontWeight='bold'
						fontSize='32px'
						ml={['0', '20px']}
						color={query.line === 'pesada' ? '#000' : '#6b7280'}
						cursor='pointer'
						_hover={{ textDecor: 'none' }}
					>
						Linea Pesada
					</Link>
				</NextLink>
			</Flex>

			<Flex
				mt={['16px', '10px']}
				alignItems={['flex-start', 'center']}
				flexDir={['column', 'row']}
			>
				<NextLink href={`/product/filters/${query.line}/aire#main`} passHref>
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
				<NextLink href={`/product/filters/${query.line}/aceite#main`} passHref>
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
				<NextLink
					href={`/product/filters/${query.line}/combustible#main`}
					passHref
				>
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
