import React from 'react';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import BurningMatch from '../../utils/BurningMatch.png';
import BurntMatch from '../../utils/BurntMatch.png';

export default function MobilePage5({ mobile }) {
  return (
    <div className="font-size-16 text-align-center">
      <div>
        <div id="step-three-hello-page-button" className={mobile ? "font-size-16 text-align-center bg-blue color-grey" : "font-size-22 text-align-center bg-blue color-grey"}>HELLO PAGE</div>
        <br />
        <div className="font-size-small color-blue text-align-center" style={{width:"80%", margin:"auto"}}>Good Single Christians can see and keep track of the "hi"s they have given and received on the HELLO page</div>
      </div>
      <div className="display-flex" style={{alignItems:"flex-end", width:"300px", margin:"auto"}}>
        <div className="color-red bold font-size-small" style={{margin:"0 5px 5px auto"}}>GSCs WHO HAVE "SAID HI" TO YOU</div>
        <div id="step-3-hi-icon" className="color-red">👋<CallReceivedOutlinedIcon style={{fontSize:"35px"}} /></div>
      </div>
      <div className={mobile ? "step-three-content-div font-size-small" : "step-two-content-div font-size-16"}>
        <div className="step-three-content-buttons color-blue" >
          <div className="display-flex align-items">
            <div>
              <img src={BurningMatch} alt="" style={{height:"80px"}} />
            </div>
            <div className="step-three-content-words-div">
              <span>Initiate <span className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>CONTACT! </span>
                <br />
                <span>(off MatchesUp). </span>
              </span>          
              <span className="font-size-small">You have received their contact information. Give this friendship a try!</span>
            </div>
          </div>
        </div>
        <div className="step-three-content-buttons color-blue" >
          <div className="display-flex align-items">
            <div>
              <img src={BurntMatch} alt="" style={{height:"80px"}} />
            </div>
            <div className="step-three-content-words-div">
              <div>
                <span className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>REMOVE THEIR "HI" </span>
                <br />
                <span>as a subtle "not interested"</span>
              </div>          
              <div className="font-size-small">Your profile will disappear from each other's HELLO and DATABASE page.</div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}
