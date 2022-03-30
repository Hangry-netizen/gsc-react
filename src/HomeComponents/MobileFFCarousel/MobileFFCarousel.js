import React, { useEffect, useState } from 'react';
import MobilePage1 from './MobilePage1';
import MobilePage2 from './MobilePage2';
import MobilePage3 from './MobilePage3';
import { Carousel } from 'react-bootstrap';
import { Group } from '@material-ui/icons';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';

const FFContent = styled.div`
  border: none;
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  transition: all 1s ease-in;
`;

export default function MobileFFCarousel() {
  const [width] = useState(window.innerWidth)
  const [mobile, setMobile] = useState(false);
  const [showFF, setShowFF] = useState(false)

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
      <button className="bg-blue" style={{border:"3px #e9482b", width:"320px", boxShadow:"0px 5px 5px rgba(0, 0, 0, 0.25)"}} onClick={() => setShowFF(!showFF)}>
        <div className="display-flex" style={{alignItems:"flex-end", width:"210px", margin:"auto", paddingTop:"10px"}}>
          <Group id="ff-icon" className="color-red" />
          <div className="color-red bold">SIGN A FRIEND UP!</div>
        </div>
        <div style={{color:"white"}}>
          <span className="font-size-small">You are a </span>
          <span className="Essays1743 font-size-small">FAITHFUL FRIEND </span>
          <span className="color-red Essays1743 font-size-small">(FF)</span>
        </div>
        {
          showFF
          ?
          <div>
            <ArrowForwardIosIcon style={{color:"white", transform:"rotate(90deg)", marginTop:"10px"}} />
          </div>
          :
          null
        }
        <br />
      </button>
      <FFContent open={showFF}>
        <Carousel interval={null} id="ff-carousel" className="text-align-center bg-beach">
          <Carousel.Item>
            <div id="ff-carousel-title-1" className="color-blue bold italic underline font-size-large">STEP 1: SUBMIT A PROFILE</div>
            <MobilePage1 mobile={{mobile}}/>
          </Carousel.Item>
          <Carousel.Item>
            <div id="ff-carousel-title-2" className="color-blue bold italic underline font-size-large">STEP 2: SCREENING</div>
            <MobilePage2 mobile={{mobile}}/>
          </Carousel.Item>
          <Carousel.Item>
            <div id="ff-carousel-title-3" className="color-blue bold italic underline font-size-large">STEP 3: STRIKE A MATCH</div>
            <MobilePage3 mobile={{mobile}} />
          </Carousel.Item>
        </Carousel>
      </FFContent>
    </div>
  )
}
