"use client"
import { Flex, Box, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

// Custom components
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';

// const columns = columnsDataCheck;
export default function CheckTable(props: { tableData: any }) {
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
	return (
		<Card flexDirection='column' w='100%' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
				<Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
					Check Table
				</Text>
				<Menu />
			</Flex>
			<Box>
				<Table variant='simple' color='gray.500' mb='24px' mt="12px">
					<Thead>
                        <Tr>
                            <Th pe={'10px'} borderColor={borderColor} cursor={'pointer'}>
                                <Flex justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
                                    Nombre columna
                                </Flex>
                            </Th>
                        </Tr>
					</Thead>
					<Tbody>
                        <Tr>
                            <Td fontSize={{ sm: '14px' }} minW={{ sm: '150px', md: '200px', lg: 'auto' }} borderColor='transparent'>
                                Contenido de la celda
                            </Td>
                        </Tr>
					</Tbody>
				</Table>
			</Box>
		</Card>
	);
} 