import React from 'react'
import { Box, Typography, styled } from '@mui/material'


const StylePara = styled(Typography)`
   margin: 120px 0 0 90px;
   font-size: 40px;
   opacity: none;
`

const Text = () => {
  return (
    <Box style={{ height: 150, marginTop: 150}}>
        <StylePara variant='p'>A superlative selection</StylePara>
    </Box>
  )
}

export default Text