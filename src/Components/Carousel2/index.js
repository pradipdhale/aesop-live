import React from 'react'
import { Grid, Typography, Button, styled, Box } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

import img1c2 from '../../assets/img1Carousel2.webp'
import img2c2 from '../../assets/img2C2.jpg'
import img3c2 from '../../assets/img3c2.webp'

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
const StyledGrid = styled(Grid)`
  margin: 0 10px 0 100px;
  margin-right: -100px;
`
const Image = styled('img')`
   height: 500px;
   width: 887px;
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const Carousel2 = () => {
  return (
    <Grid container style={{ marginTop: 150 }}>
      <StyledGrid item xs={5}>
        <Typography variant="h5" style={{ marginBottom: 30 }}>
          Store locator
        </Typography>
        <Typography style={{ width: 402 }}>
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.
        </Typography>
        <StyledButton
          style={{
            backgroundColor: 'transprent',
            color: 'black',
            border: '0.5px solid #333',
            borderRadius: '0px',
            padding: '10px',
            marginTop: '30px',
          }}
        >
          Find a nearby store <StyledIcon />
        </StyledButton>
      </StyledGrid>
      <Grid item xs={7}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
            <Box>
                <Image src={img1c2} />
            </Box>
            <Box>
                <Image src={img2c2} />
            </Box>
            <Box>
                <Image src={img3c2} />
            </Box>
        </Carousel>
      </Grid>
    </Grid>
  )
}

export default Carousel2
