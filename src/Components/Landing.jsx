import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Calendar from './Calendar';

function Landing(){
    return(
        <ChakraProvider>
            <Calendar/>
        </ChakraProvider>
    )
}

export default Landing