import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function Navbar() {
  return (
    <Box width='100vw' height='3rem' bg='wheat' display='flex' justifyContent='space-between' alignContent='center' paddingLeft='1rem' paddingRight='1rem'>
        <Text fontWeight='bold' fontSize='2rem' margin='auto' marginLeft='0'>LOGO</Text>
        <Text margin='auto' marginRight='0'>Need help? Call 1234567890</Text>
    </Box>
  )
}

export default Navbar