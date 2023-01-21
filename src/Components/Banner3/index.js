import React from 'react'
import { Grid, Typography, styled, Box, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import IMG3 from '../../assets/Banner3 img.jpg'
const ContentBox = styled(Box)`
  margin: 0px 105px 0 80px;
  width: 419px;
`

const StyledButton = styled(Button)`
  background-color: transprent;
  color: black;
  border: 0.5px solid #f0e5e4;
  border-radius: 0px;
  padding: 10px;
  &:hover {
    border-color: #333;
    background-color: #333;
    color: white !important;
  }
`
const StyledIcon = styled(ArrowForwardIcon)`
  margin-left: 20px;
  width: 15px;
  height: 15px;
`
const StyleGrid = styled(Grid)`
  margin-top: 150px;
`
const IMG = styled('img')``


const Banner3 = () => {
  return (
    <>
      <StyleGrid container>
        <Grid xs={5}>
          <ContentBox>
            <Typography variant="h5" component="h5">
              Down to the wire
            </Typography>
            <Typography variant="p" component="p" style={{ margin: '10px 0' }}>
            For greater ease of navigation, the Gift Finder provides an opportunity 
            to browse formulations by recipient, function and price.
            </Typography>
            <StyledButton
              style={{
                backgroundColor: 'transprent',
                color: 'black',
                border: '0.5px solid #333',
                borderRadius: '0px',
                padding: '10px',
                marginTop: '20px',
              }}
            >
              Discover the Gift Finder <StyledIcon />
            </StyledButton>
          </ContentBox>
        </Grid>
        <Grid xs={7}>
          <IMG src={IMG3} style={{ width: 873 }} />
        </Grid>
      </StyleGrid>
    </>
  )
}

export default Banner3
