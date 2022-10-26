import {useState, useRef} from 'react';
import { Flex } from '@chakra-ui/react';
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
import { set } from 'immer/dist/internal';
import { log } from 'console';

export function Prueba() {

	const inputRef = useRef();

	const initialState = {
		cantidad: 1
	  };

	  const [formData, setFormData] = useState(initialState);

	  const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};	  
	lg
	const updateCounter = (step) => {
		console.log(formData.cantidad)
		setFormData({
			...formData,
			cantidad: formData.cantidad+step
		})
	}

log
	return (
		<>
			<Flex>		
				<Button onClick={()=>updateCounter(1)}>+</Button>						
				<Input maxW={'60px'} fontStyle={'bold'} textAlign={'center'}
				name='cantidad'													
				fontWeight='bold'
				value={formData.cantidad}
				onChange={handleChange}
				/>
				<Button onClick={()=>updateCounter(-1)}>-</Button>
			</Flex>
		</>
	)
  }