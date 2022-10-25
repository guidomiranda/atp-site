import {useState,useRef} from 'react';
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

export function Prueba() {
	
	const [cantidad, setCantidad] = useState(1);
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 100,
      precision: 0,
    });
	const inputNumberRef = useRef();
	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();	
	const initialState = {
		cantidad: 0
	  };

	  const [formData, setFormData] = useState(initialState);

	  const handleChangePrueba = ref => {
		console.log('ref: ',inputNumberRef);
	};

	  const handleChange = e => {
		alert('entroooo');
		console.log('e.target.name: ',e.target.name);
		console.log('e.target.value: ',e.target.value);
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};	  
	return (
		<>
			<Flex>
				<Input
					isRequired
					name='cantidad'
					//onChange={handleChange}
					type='number'
					placeholder='Número*'
					value={cantidad}
				/>
			</Flex>
			<Flex>
				
				<HStack maxW='220px'>						
					<Button {...inc }>+</Button>
					<Input 
					ref={inputNumberRef}
					name='cantidad'													
					fontWeight='bold'
					{...input }	
					value={cantidad}	
					onClick={handleChangePrueba}			
					/>
					<Button {...dec} >-</Button>
				</HStack>

			</Flex>
			<Button  bgColor = '#000' onClick={()=> alert(cantidad)}></Button>
								</>
	)
  }