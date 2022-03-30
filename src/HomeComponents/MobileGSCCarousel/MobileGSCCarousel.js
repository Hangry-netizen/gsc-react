import React, { useEffect, useState } from 'react';
import MobilePage1 from './MobilePage1';
import MobilePage2 from './MobilePage2';
import MobilePage3 from './MobilePage3';
import MobilePage4 from './MobilePage4';
import MobilePage5 from './MobilePage5';
import { Carousel } from 'react-bootstrap';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';

const GSCContent = styled.div`
  border: none;
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  transition: all 1s ease-in;
`;

export default function MobileGSCCarousel() {
  const [width] = useState(window.innerWidth)
  const [mobile, setMobile] = useState(false);
  const [showGSC, setShowGSC] = useState(false)

  useEffect(() => {
    if (width <= 720) {
      setMobile(true)
    }
    else {
      setMobile(false)
    }
  }, [width])

  return (
    <div className="font-size-16 bg-beach text-align-center">
      <button className="bg-blue" style={{border:"none", width:"320px", boxShadow:"0px px 5px rgba(0, 0, 0, 0.25)"}} onClick={() => setShowGSC(!showGSC)}>
        <div className="display-flex" style={{alignItems:"flex-end", width:"180px", margin:"auto", paddingTop:"10px"}}>
          <div className="color-red bold" style={{margin:"0 5px 5px auto"}}>FIND A MATCH!</div>
          <TravelExploreIcon id="gsc-icon" className="color-red" />
        </div>
        <div style={{color:"white"}}>
          <span className="font-size-small">You are a </span>
          <span className="Essays1743 font-size-small">GOOD SINGLE CHRISTIAN </span>
          <span className="color-red Essays1743 font-size-small">(GSC)</span>
        </div>
        {
          showGSC
          ?
          <div>
            <ArrowForwardIosIcon style={{color:"white", transform:"rotate(90deg)", marginTop:"10px"}} />
          </div>
          :
          null
        }
        <br />
      </button>
      <GSCContent open={showGSC}>
        <Carousel interval={null} id="gsc-carousel" className="text-align-center bg-beach">
          <Carousel.Item>
            <div id="gsc-carousel-title-1" className="color-blue bold italic underline font-size-large">STEP 1: SUBMIT A PROFILE</div>
            <MobilePage1 mobile={{mobile}}/>
          </Carousel.Item>
          <Carousel.Item>
            <div id="gsc-carousel-title-2" className="color-blue bold italic underline font-size-large">STEP 2: SCREENING</div>
            <MobilePage2 mobile={{mobile}}/>
          </Carousel.Item>
          <Carousel.Item>
            <div id="gsc-carousel-title-3" className="color-blue bold italic underline font-size-large">STEP 3: STRIKE A MATCH</div>
            <MobilePage3 mobile={{mobile}} />
          </Carousel.Item>
          <Carousel.Item>
            <div id="gsc-carousel-title-4" className="color-blue bold italic underline font-size-large">STEP 4: START A CONVERSATION</div>
            <MobilePage4 mobile={{mobile}} />
          </Carousel.Item>
          <Carousel.Item>
            <div id="gsc-carousel-title-5" className="color-blue bold italic underline font-size-large">STEP 5: START A CONVERSATION</div>
            <MobilePage5 mobile={{mobile}} />
          </Carousel.Item>
        </Carousel>
      </GSCContent>
    </div>
  )
}
