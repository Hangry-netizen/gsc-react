import React, { useEffect, useState } from 'react';
import FFContent from './FFContent';
import GSCContent from './GSCContent';
import { Carousel } from 'react-bootstrap';
import { Group, EmailOutlined } from '@material-ui/icons';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function Step2() {
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
    <div className="font-size-16 text-align-center">
      <div id="step-2-title" className="color-blue bold italic underline font-size-large">STEP 2: STRIKE A MATCH</div>
      <div id="step-two-database-div" className="text-align-left font-size-small">
        <div style={{fontWeight:"lighter"}}>FFs and GSCs receive email on the 1st of every month...</div>
        <div className="display-flex align-items">
          <div className="color-blue">
            <div>Check out our</div>
            <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>DATABASE</div>
            <div>of all active profiles</div>
          </div>
          <div><EmailOutlined id="step-two-email-icon" /></div>
        </div>
      </div>
      {
        mobile
        ?
        <Carousel id="step-two-carousel" className="text-align-center">
          <Carousel.Item interval={10000}>
            <div className="display-flex" style={{alignItems:"flex-end", width:"175px", margin:"auto"}}>
              <Group id="ff-icon" className="color-red" />
              <div className="color-red bold font-size-small" style={{margin:"0 auto 5px 10px"}}>FAITHFUL FRIEND</div>
            </div>
            <div className="color-blue">
              <span className="font-size-small">As a </span>
              <span className="Essays1743 font-size-small">FAITHFUL FRIEND </span>
              <span className="color-red Essays1743 font-size-small">(FF)</span>
              <span className="font-size-small">, you can</span>
            </div>
            <FFContent mobile={mobile} />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <div className="display-flex" style={{alignItems:"flex-end", width:"220px", margin:"auto"}}>
              <div className="color-red bold font-size-small" style={{margin:"0 5px 5px auto"}}>GOOD SINGLE CHRISTIAN</div>
              <TravelExploreIcon id="gsc-icon" className="color-red" />
            </div>
            <div className="color-blue">
              <span className="font-size-small">As a </span>
              <span className="Essays1743 font-size-small">GOOD SINGLE CHRISTIAN </span>
              <span className="color-red Essays1743 font-size-small">(GSC)</span>
              <span className="font-size-small">, you can</span>
            </div>
            <GSCContent mobile={mobile} />
          </Carousel.Item>
        </Carousel>
        :
        <>
          <div className="display-flex" style={{width:"720px", margin:"auto"}}>
            <div>
              <div className="display-flex" style={{alignItems:"flex-end"}}>
                <Group id="ff-icon" className="color-red" />
                <div className="color-red bold" style={{margin:"0 auto 5px 10px"}}>FAITHFUL FRIEND</div>
              </div>
              <div className="color-blue">
                <span className="font-size-small">As a </span>
                <span className="Essays1743 font-size-small">FAITHFUL FRIEND </span>
                <span className="color-red Essays1743 font-size-small">(FF)</span>
                <span className="font-size-small">, you can</span>
              </div>
              <FFContent />
            </div>
            <div>
              <div className="display-flex" style={{alignItems:"flex-end"}}>
                <div className="color-red bold" style={{margin:"0 5px 5px auto"}}>GOOD SINGLE CHRISTIAN</div>
                <TravelExploreIcon id="gsc-icon" className="color-red" />
              </div>
              <div className="color-blue">
                <span className="font-size-small">As a </span>
                <span className="Essays1743 font-size-small">GOOD SINGLE CHRISTIAN </span>
                <span className="color-red Essays1743 font-size-small">(GSC)</span>
                <span className="font-size-small">, you can</span>
              </div>
              <GSCContent />
            </div>
          </div>
        </>
      }
    </div>
  )
}
