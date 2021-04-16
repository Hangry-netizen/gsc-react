import React from 'react';
import Step2Icon from "../utils/Step2.png"

export default function Step2() {
  return (
    <div id="step-2" className="bg-beach text-align-right homepage-container-padding">
      <div className="steps-flex-container flex-end">
        <h1 id="step-2-title" className="color-red">STEP 2: The Approval</h1>
        <div>
          <img src={Step2Icon} alt="Step 2 icon" className="right-steps-icon"/>
        </div>
      </div>
      <div className="color-red">Consent from your GSCF; Commendation from up to two friends; Screening by a mature Christian</div>
      <br />
      <div className="color-blue semibold">Within 5 minutes after you've created your GSCF's profile...</div>
      <div className="color-blue semibold">i. your GSCF will receive an email to consent and edit their profile</div>
      <div className="color-blue semibold">ii. (optional) two questions will be emailed up to two friends to add to the GSCF profile</div>
      <br />
      <div className="color-blue semibold">After consent is received, our team will screen through and flag down questionable entries.</div>
    </div>
  )
}
