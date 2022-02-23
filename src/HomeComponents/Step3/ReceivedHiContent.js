import React from 'react';
import BurningMatch from '../../utils/BurningMatch.png';
import BurntMatch from '../../utils/BurntMatch.png';

export default function ReceivedHiContent({ mobile }) {
  return (
    <div className={mobile ? "step-three-content-div font-size-small" : "step-two-content-div font-size-16"}>
      <div className="step-three-content-buttons color-blue" >
        <div className="display-flex align-items">
          <div>
            <img src={BurningMatch} alt="" style={{height:"80px"}} />
          </div>
          <div className="step-three-content-words-div">
            <div>Initiate <span className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>CONTACT! </span>
              <br />
              <span>(off MatchesUp)</span>
            </div>          
            <div className="font-size-small">You have received their contact information. Give this friendship a try!</div>
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
  )
}
