import React from 'react';
import Step5Icon from "../utils/Step5.png"

export default function Step5() {
  return (
    <div id="step-5" className="bg-blue text-align-left homepage-container-padding">
      <div className="steps-flex-container">
        <div>
          <img src={Step5Icon} alt="Step 5 icon" className="left-steps-icon"/>
        </div>
        <h1 id="step-5-title" className="color-red">STEP 5: The Beginning </h1>
      </div>
      <div className="color-red">Your GSCF initiates contact if interested!</div>
      <br />
      <p className="color-beach semibold">i. your GSCF can manage their HELLO page by clicking "contacted", "not interested", or "report" questionable profiles</p>
      <p className="color-beach semibold">ii. your GSCF can "hide" profile for a few months or remove it anytime (if needed)</p>
    </div>
  )
}
