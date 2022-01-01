import React from 'react';
import BurningMatch from '../../utils/BurningMatch.png';
import BurntMatch from '../../utils/BurntMatch.png';

export default function ReceivedHiContent() {
  return (
    <div>
      <div className="step-three-content-buttons color-blue" >
        <div className="display-flex align-items">
          <div>
            <img src={BurningMatch} alt="" style={{height:"80px"}} />
          </div>
          <div className="step-three-content-words-div">
            <div>Initiate <span className="color-red font-size-large">CONTACT! </span>
              {
                window.innerWidth > 720 ? null : <br />
              }
              (off MatchesUp)
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
            <div><span className="color-red font-size-large">REMOVE THEIR "HI" </span>
              {
                window.innerWidth > 720 ? null : <br />
              }
              as a subtle "not interested"
            </div>          
            <div className="font-size-small">Your profile will disappear from each other's HELLO and DATABASE page.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
