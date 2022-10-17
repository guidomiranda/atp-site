import React from 'react'
import {
	Button,
} from '@chakra-ui/react';

export const Boton = ({name,handle}) => {
  return (
    <Button
        type={'submit'}
        minW='initial'
        h='45px'
        bgColor='#d21a28'
        color='#fff'
        rounded='none'
        p='0 48px'
        _hover={{ bgColor: '#d21a28' }}
        _active={{ bgColor: '#d21a28' }}
        onClick={handle}
        ml='32px'
    >
        {name}
    </Button>
  )
}
