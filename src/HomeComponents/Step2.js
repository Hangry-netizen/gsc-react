import React from 'react';
import Step2Icon from "../utils/Step2.png"

export default function Step2() {
  return (
    <div id="step-2" className="bg-beach text-align-right homepage-container-padding">
      <div id="step-2-mobile-flex" className="steps-flex-container">
        <div>
          <img src={Step2Icon} alt="Step 2 icon" className="left-steps-icon"/>
        </div>
        <h1 id="step-2-title" className="color-red">STEP 2: The Approval</h1>
      </div>
      <div id="step-2-desktop-flex" className="steps-flex-container flex-end">
        <h1 id="step-2-title" className="color-red">STEP 2: The Approval</h1>
        <div>
          <img src={Step2Icon} alt="Step 2 icon" className="right-steps-icon"/>
        </div>
      </div>
      <div id="step-2-one-liner" className="color-red">Get consent, commendation, and screening!</div>
      <br />
      <div id="step-2-content" className="color-blue semibold text-align-left">
        <div>Within 5 minutes after you've created your GSCF's profile...</div>
        <div>i. your GSCF will receive an email to consent and edit their profile</div>
        <div>ii. (optional) two questions will be emailed up to two friends to add to the GSCF profile</div>
        <br />
        <div>After consent is received, our team will screen through and flag down questionable entries.</div>
      </div>      
    </div>
  )
}
