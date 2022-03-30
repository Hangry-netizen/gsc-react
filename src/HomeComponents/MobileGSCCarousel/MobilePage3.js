import React from 'react';
import { EmailOutlined } from '@material-ui/icons';

export default function MobilePage3({ mobile }) {
  return (
    <div className={mobile ? "ff-carousel-content-div font-size-small" : "ff-carousel-content-div font-size-16"}>
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
      <br />
      <br />
      <div className="color-blue">
        <span className="font-size-small">As a </span>
        <span className="Essays1743 font-size-small">GOOD SINGLE CHRISTIAN </span>
        <span className="color-red Essays1743 font-size-small">(GSC)</span>
        <span className="font-size-small">, you can</span>
      </div>
      <div className={mobile ? "step-two-content-div font-size-small" : "step-two-content-div font-size-16"}>
        <div className="step-two-content-buttons">
          <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>🤔 "MAYBE"</div>
          <div className="color-blue">Track interesting profiles before you decide to "say hi"</div>
        </div>
        <div className="step-two-content-buttons">
          <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>👋 "SAY HI"</div>
          <div className="color-blue">to someone! (They will see your name and contact info)</div>
          <div style={{fontWeight:"lighter", color:"black"}}>3 chances every month</div>
        </div>
      </div>
    </div>
  )
}
