import React from 'react';
import WaitMatch from '../../utils/WaitMatch.png';
import BurntMatch from '../../utils/BurntMatch.png';

export default function SaidHiContent({ mobile }) {
  return (
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
  )
}
