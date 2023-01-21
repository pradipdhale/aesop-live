import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

import Cimg1 from '../../assets/img1Caresoul.webp'
import Cimg2 from '../../assets/img2caresoul.webp'
import Cimg3 from '../../assets/img3caresoul.webp'
import Cimg4 from '../../assets/img1Caresoul.webp'
import Cimg5 from '../../assets/img3caresoul.webp'
import Cimg6 from '../../assets/img4caresoul.webp'



import { Box, styled, Typography } from '@mui/material'

const Image = styled('img')`
   height: 400px;
`
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  },
}



const Carousel1 = () => {
  return (
    <Carousel responsive={responsive}
    dotListClass="customCSS"
    containerClass="carousel-container"
    itemClass="carousel-item-padding-40-px"
    swipeable={false}
    draggable={false}
    >
      <Box style={{ marginTop: 150}}>
        <Image src={Cimg1} style={{ padding: 10, marginRight: 10, height: 320 }}/>
        <Typography variant='h6' style={{ padding: 5, marginLeft: 150, fontWeight:400}}>Geranium Leaf Duet</Typography>
        <Typography style={{ padding: 5, marginLeft: 100}}>A gentle cleanser and aromatic balm</Typography>
      </Box>
      <Box style={{ marginTop: 150}}>
        <Image src={Cimg2} style={{ padding: 10, marginRight: 10, height: 320 }}/>
        <Typography variant='h6' style={{ padding: 5, marginLeft: 150, fontWeight:400}}>Resurrection Duet</Typography>
        <Typography style={{ padding: 5, marginLeft: 120}}>Cleanse and nourish the hands</Typography>
      </Box>
      <Box style={{ marginTop: 150}}>
        <Image src={Cimg3} style={{ padding: 10, marginRight: 10, height: 320 }}/>
        <Typography variant='h6' style={{ padding: 5, marginLeft: 180, fontWeight:400}}>Reverence Duet</Typography>
        <Typography style={{ padding: 5, marginLeft: 130}}>A citrus, woody, herbaceous duo</Typography>
      </Box>
      <Box style={{ marginTop: 150}}>
        <Image src={Cimg4} style={{ padding: 10, marginRight: 10, height: 320 }}/>
        <Typography variant='h6' style={{ padding: 5, marginLeft: 120, fontWeight:400}}>Resurrection Hand Purifying Duet</Typography>
        <Typography style={{ padding: 5, marginLeft: 130}}>A sumptuous pairing for hands</Typography>
      </Box>
      <Box style={{ marginTop: 150}}>
        <Image src={Cimg5} style={{ padding: 10, marginRight: 10, height: 320 }}/>
        <Typography variant='h6' style={{ padding: 5, marginLeft: 150, fontWeight:400}}>Geranium Leaf Duet</Typography>
        <Typography style={{ padding: 5, marginLeft: 130}}>A citrus, woody, herbaceous duo</Typography>
      </Box>
      <Box>
        <Image src={Cimg6} style={{ padding: 10, marginLeft: 40, height: 470 }}/>
        <Typography variant='h6' style={{ padding: 5, marginLeft: 150, fontWeight:400}}>You And You Dog Duo</Typography>
        <Typography style={{ padding: 5, marginLeft: 130}}>A pair of aromatic gel cleansers</Typography>
      </Box>
    </Carousel>
  )
}

export default Carousel1
