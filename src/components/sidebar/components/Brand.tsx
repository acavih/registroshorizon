// Chakra imports
import { Flex, useColorModeValue, Text } from '@chakra-ui/react';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Text size={'h2'}>Registros</Text>
			<HSeparator mt={'20px'}  mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
