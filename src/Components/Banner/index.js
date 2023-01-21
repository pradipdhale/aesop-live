import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import styled from '@emotion/styled'
import Logo from '../../assets/logo.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BackgroundLogo from '../../assets/Aesop_Gift_Kits_2022-23_Web_Homepage_3_Primary_50-50_Desktop_1440x1500px.jpg'

const StyledBox = styled(Box)`
  background: #d8c19e;
  height: 535px;
  opacity: 1;
`
const StyledGrid = styled(Grid)``

const BoxImg = styled(Box)`
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: 100px 37px;
  width: 120px;
  height: 33px;
  margin: 75px 0 0 32px;
`
const ContentBox = styled(Box)`
  margin: 85px 105px 0 50px;
`

const StyledButton = styled(Button)`
  background-color: transprent;
  color: black;
  border: 0.5px solid #f0e5e4;
  border-radius: 0px;
  padding: 10px;
  &:hover {
    border-color:#333;
    background-color: #333;
    color: white!important;
  }
`
const StyledIcon = styled(ArrowForwardIcon)`
  margin-left:20px;
  width:15px;
  height:15px;
`

const BackgroundImg = styled(Box)`
background-image: url(${BackgroundLogo});
background-size: 100% 100%;
height: 535px;
`
const Banner = () => {
  return (
    <StyledBox>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <StyledGrid container item xs={6}>
          <Grid item xs={3}>
            <BoxImg className="Img"></BoxImg>
          </Grid>
          <Grid item xs={9}>
            <ContentBox>
              <Typography variant="h5" component="h5">
                Down to the wire
              </Typography>
              <Typography
                variant="p"
                component="p"
                style={{ margin: '10px 0' }}
              >
                From humble gestures to more elaborate offerings, an Aesop gift
                can still be purchased in time for festive celebrations.
              </Typography>
              <StyledButton
                style={{
                  backgroundColor: 'transprent',
                  color: 'black',
                  border: '0.5px solid #333',
                  borderRadius: '0px',
                  padding: '10px',
                  marginTop:'20px'
                }}
              >
                Discover the Gift Guide <StyledIcon />
              </StyledButton>
            </ContentBox>
          </Grid>
        </StyledGrid>
        <Grid item xs={6} style={{paddingTop:"0px",paddingLeft:"0px"}}>
        <BackgroundImg><img src={BackgroundLogo} alt="img" style={{width:"100%",height:"435px"}} /></BackgroundImg>
        </Grid>
      </Grid>
    </StyledBox>
  )
}

export default Banner
