import React, { useEffect, useState } from 'react';
import FFContent from './FFContent';
import GSCContent from './GSCContent';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import { Carousel } from 'react-bootstrap';
import { Group } from '@material-ui/icons';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function Step1() {
  const [width] = useState(window.innerWidth)
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (width <= 720) {
      setMobile(true)
    }
    else {
      setMobile(false)
    }
  }, [width])

  return (
    <div className="font-size-16 bg-blue text-align-center">
      <div id="step-1-title" className="color-grey bold italic font-size-large">STEP 1: SUBMIT A PROFILE</div>
      {
        mobile
        ?
        <Carousel id="step-one-carousel" className="text-align-center">
          <Carousel.Item interval={10000}>
            <div className="display-flex" style={{alignItems:"flex-end", width:"230px", margin:"auto"}}>
              <Group id="ff-icon" className="color-red" />
              <div className="color-red bold" style={{margin:"0 auto 5px 10px"}}>SIGN A FRIEND UP!</div>
            </div>
            <div style={{color:"white"}}>
              <span className="font-size-small">You are a </span>
              <span className="Essays1743 font-size-small">FAITHFUL FRIEND </span>
              <span className="color-red Essays1743 font-size-small">(FF)</span>
            </div>
            <FFContent mobile={mobile} />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <div className="display-flex" style={{alignItems:"flex-end", width:"220px", margin:"auto"}}>
              <div className="color-red bold" style={{margin:"0 5px 5px auto"}}>FIND A MATCH!</div>
              <TravelExploreIcon id="gsc-icon" className="color-red" />
            </div>
            <div style={{color:"white"}}>
              <span className="font-size-small">You are a </span>
              <span className="Essays1743 font-size-small">GOOD SINGLE CHRISTIAN </span>
              <span className="color-red Essays1743 font-size-small">(GSC)</span>
            </div>
            <GSCContent mobile={mobile} />
          </Carousel.Item>
        </Carousel>
        :
        <>
          <div className="display-flex bg-blue" style={{width:"720px", margin:"auto"}}>
            <div>
              <div className="display-flex" style={{alignItems:"flex-end"}}>
                <Group id="ff-icon" className="color-red" />
                <div className="color-red bold" style={{margin:"0 auto 5px 10px"}}>SIGN A FRIEND UP!</div>
              </div>
              <div style={{color:"white"}}>
                <span className="font-size-small">You are a </span>
                <span className="Essays1743 font-size-small">FAITHFUL FRIEND </span>
                <span className="color-red Essays1743 font-size-small">(FF)</span>
              </div>
              <FFContent />
            </div>
            <div>
              <div className="display-flex" style={{alignItems:"flex-end"}}>
                <div className="color-red bold" style={{margin:"0 5px 5px auto"}}>FIND A MATCH!</div>
                <TravelExploreIcon id="gsc-icon" className="color-red" />
              </div>
              <div style={{color:"white"}}>
                <span className="font-size-small">You are a </span>
                <span className="Essays1743 font-size-small">GOOD SINGLE CHRISTIAN </span>
                <span className="color-red Essays1743 font-size-small">(GSC)</span>
              </div>
              <GSCContent />
            </div>
          </div>
        </>
      }
    </div>
  )
}
