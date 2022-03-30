import React from 'react';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import WaitMatch from '../../utils/WaitMatch.png';
import BurntMatch from '../../utils/BurntMatch.png';

export default function MobilePage4({ mobile }) {
  return (
    <div className="font-size-16 text-align-center">
      <div>
        <div id="step-three-hello-page-button" className={mobile ? "font-size-16 text-align-center bg-blue color-grey" : "font-size-22 text-align-center bg-blue color-grey"}>HELLO PAGE</div>
        <br />
        <div className="font-size-small color-blue text-align-center" style={{width:"80%", margin:"auto"}}>Good Single Christians can see and keep track of the "hi"s they have given and received on the HELLO page</div>
      </div>
      <div className="display-flex" style={{alignItems:"flex-end", width:"230px", margin:"auto"}}>
        <div id="step-3-hi-icon" className="color-red"><CallMadeOutlinedIcon style={{fontSize:"35px"}} />👋</div>
        <div className="color-red bold font-size-small" style={{margin:"0 auto 5px 10px"}}>GSCs YOU "SAID HI" TO</div>
      </div>
      <div className={mobile ? "step-two-content-div font-size-small" : "step-two-content-div font-size-16"}>
        <div className="step-three-content-buttons color-blue" >
          <div className="display-flex align-items">
            <div>
              <img src={WaitMatch} alt="" style={{height:"80px"}} />
            </div>
            <div className="step-three-content-words-div">
              <div><span className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>WAIT </span>
                for them to contact you
              </div>
              <div className="font-size-small">They will receive your name and preferred contact information.</div>
            </div>
          </div>
        </div>
        <div className="step-three-content-buttons color-blue" >
          <div className="display-flex align-items">
            <div>
              <img src={BurntMatch} alt="" style={{height:"80px"}} />
            </div>
            <div className="step-three-content-words-div">
              <div><span className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>UNDO "HI"</span>
                <br />
                <span>anytime if you change your mind</span>
              </div>          
              <div className="font-size-small">But do give some time! (You will still appear on each other's database.)</div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}
