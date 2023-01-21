import React from 'react'
import { Box, Grid, styled, Typography } from '@mui/material'
import Img1 from '../../assets/twocolimg 1.jpg'
import Img2 from '../../assets/twocolimg 2.jpg'


const StyleImg = styled('img') `
  width: 669px;
  margin-top: 150px;
`
const StylePara = styled(Typography)`
  margin-left: 80px;

`


const TwoColumn = () => {
  return (
    <Box style={{ marginBottom: 45 }} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <StyleImg src={Img1} style={{ marginLeft: 80 }} />
          <StylePara variant='h6' style={{ marginTop: 20, width: 659}} >The Poetry of Place</StylePara>
          <StylePara style={{ marginTop: 20, width: 659}} >A new collection of gift kits inspired by Aesop’s heritage of design—drawing on the architecture and neighbourhood 
            atmosphere of four key stores from around the world.</StylePara>
        </Grid>
        <Grid item xs={6}>
          <StyleImg src={Img2} style={{ marginLeft: 5 }} />
          <Typography variant='h6' style={{ marginLeft: 5, marginTop: 20, width: 659 }} >Fragrance</Typography>
          <Typography style={{ marginLeft: 5, marginTop: 20, width: 659 }} >Hwyl, Tacit, Marrakech Intense and Rōzu—modern compositions with
             timeless relevance, ranging from the woody to the floral and equally suited to day and night</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TwoColumn
