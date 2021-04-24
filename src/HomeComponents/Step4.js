import React from 'react';
import Step4Icon from "../utils/Step4.png"


export default function Step4() {
  return (
    <div id="step-4" className="bg-beach text-align-right homepage-container-padding">
      <div id="step-4-mobile-flex" className="steps-flex-container">
        <div>
          <img src={Step4Icon} alt="Step 4 icon" className="left-steps-icon"/>
        </div>
        <h1 id="step-4-title" className="color-red">STEP 4: The Notification</h1>
      </div>
      <div id="step-4-desktop-flex" className="steps-flex-container flex-end">
        <h1 id="step-4-title" className="color-red">STEP 4: The Notification</h1>
        <div>
          <img src={Step4Icon} alt="Step 4 icon" className="right-steps-icon"/>
        </div>
      </div>
      <div id="step-4-one-liner" className="color-red">Your GSCF receives name and contact information of those who LIKED them!</div>
      <br />
      <p id="step-4-content" className="color-blue semibold">Be your GSCF's second pair of eyes and encourage them to make contact if appropriate</p>
    </div>
  )
}
