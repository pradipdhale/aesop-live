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


const TwoColumn2 = () => {
  return (
    <Box style={{ marginBottom: 45 }} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <StyleImg src={Img1} style={{ marginLeft: 80 }} />
          <StylePara variant='h6' style={{ marginTop: 20, width: 659}} >Gifts for the home—Incense</StylePara>
          <StylePara style={{ marginTop: 20, width: 659}} >Slender and delicately fragranced, for striking a note of 
          serenity in the home—or the home-away-from-home.</StylePara>
        </Grid>
        <Grid item xs={6}>
          <StyleImg src={Img2} style={{ marginLeft: 5 }} />
          <Typography variant='h6' style={{ marginLeft: 5, marginTop: 20, width: 659 }} >Gift Bundles</Typography>
          <Typography style={{ marginLeft: 5, marginTop: 20, width: 659 }} >Classic pairings and assortments of a complementary 
          character, informed by the wisdom of our in-store consultants and product experts.</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TwoColumn2
