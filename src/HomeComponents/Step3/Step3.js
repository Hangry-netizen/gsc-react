import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import ReceivedHiContent from './ReceivedHiContent';
import SaidHiContent from './SaidHiContent';

export default function Step3() {
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
      <div id="step-3-title" className="color-grey bold italic font-size-large">STEP 3: START A CONVERSATION</div>
      <div>
        <div id="step-three-hello-page-button" className={mobile ? "font-size-16 text-align-center bg-grey color-blue" : "font-size-22 text-align-center bg-grey color-blue"}>HELLO PAGE</div>
        <br />
        <div className="font-size-small text-align-center" style={{color:"white", width:"80%", margin:"auto"}}>Good Single Christians can see and keep track of the "hi"s they have given and received on the HELLO page</div>
      </div>
      <br />
      {
        mobile
        ?
        <Carousel id="step-three-carousel" className="text-align-center">
          <Carousel.Item interval={10000}>
            <div className="display-flex" style={{alignItems:"flex-end", width:"230px", margin:"auto"}}>
              <div id="step-3-hi-icon" className="color-red"><CallMadeOutlinedIcon style={{fontSize:"35px"}} />👋</div>
              <div className="color-red bold font-size-small" style={{margin:"0 auto 5px 10px"}}>GSCs YOU "SAID HI" TO</div>
            </div>
            <SaidHiContent mobile={mobile} />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <div className="display-flex" style={{alignItems:"flex-end", width:"300px", margin:"auto"}}>
              <div className="color-red bold font-size-small" style={{margin:"0 5px 5px auto"}}>GSCs WHO HAVE "SAID HI" TO YOU</div>
              <div id="step-3-hi-icon" className="color-red">👋<CallReceivedOutlinedIcon style={{fontSize:"35px"}} /></div>
            </div>
            <ReceivedHiContent mobile={mobile} />
          </Carousel.Item>
        </Carousel>
        :
        <>
          <div className="display-flex" style={{width:"720px", margin:"auto"}}>
            <div>
              <div className="display-flex" style={{alignItems:"flex-end", width:"300px", margin:"auto"}}>
                <div id="step-3-hi-icon" className="color-red"><CallMadeOutlinedIcon style={{fontSize:"35px"}} />👋</div>
                <div className="color-red bold font-size-small" style={{margin:"0 auto 5px 10px"}}>GSCs YOU "SAID HI" TO</div>
              </div>
              <SaidHiContent />
            </div>
            <div>
              <div className="display-flex" style={{alignItems:"flex-end", width:"390px", margin:"auto"}}>
                <div className="color-red bold font-size-small" style={{margin:"0 5px 5px auto"}}>GSCs WHO HAVE "SAID HI" TO YOU</div>
                <div id="step-3-hi-icon" className="color-red">👋<CallReceivedOutlinedIcon style={{fontSize:"35px"}} /></div>
              </div>
              <ReceivedHiContent />
            </div>
          </div>
        </>
      }
    </div>
  )
}
