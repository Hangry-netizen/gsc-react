import React from 'react';
import Step3Icon from "../utils/Step3.png"

export default function Step3() {
  return (
    <div id="step-3" className="bg-blue text-align-left homepage-container-padding">
      <div className="steps-flex-container">
        <div>
          <img src={Step3Icon} alt="Step 3 icon" className="left-steps-icon"/>
        </div>
        <h1 id="step-3-title" className="color-red">STEP 3: The Research</h1>
      </div>
      <div className="color-red">Review the profiles of potential matches with your GSCF!</div>
      <br />
      <p className="color-beach semibold">i. your GSCF will receive a link through email on the 1st of every month for a database of profiles (names and contact not shown)</p>
      <p className="color-beach semibold">ii. your GSCF can 'say hi' up to three profiles on the database per month (will be increased to five later)</p>
      <p className="color-beach semibold">iii. those your GSCF 'say hi' to will receive your GSCF's name and contact information</p>
    </div>
  )
}
