import React, {useState} from 'react';
import { Flex, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, PinInput, PinInputDescendantsProvider, NumberDecrementStepper, Stack } from '@chakra-ui/react';
import {
	Box,
	Button,
	Input,
    useToast,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton,
	useDisclosure,
	Text,
	HStack,
	useNumberInput
} from '@chakra-ui/react';

export function Prueba() {
	const format = (val) => `$` + val
	const parse = (val) => val.replace(/^\$/, '')
  
	const [value, setValue] = React.useState('1.53')
  
	return (
		<>
<Stack shouldWrapChildren direction='row'>
  <NumberInput size='xs' maxW={16} defaultValue={15} min={10}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>

  <NumberInput size='sm' maxW={20} defaultValue={15} min={10}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>

  <NumberInput size='md' maxW={24} defaultValue={15} min={10}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>

  <NumberInput size='lg' maxW={32} defaultValue={15} min={10}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</Stack>
</>
	)
}