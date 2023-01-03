import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import DatePick from './DatePick'

function Header() {
  return (
    <Box width='100vw' height='19rem' bg='wheat' display='flex' justifyContent='space-between' alignContent='center' paddingLeft='1rem' paddingRight='1rem'
    _before={{
        content: '""',
        bgImage:
          "url(https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        bgSize: "cover",
        pos: "absolute",
        height: '19rem',
        top: '3rem',
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.6,
      }}>
        <DatePick/>
    </Box>
  )
}

export default Header