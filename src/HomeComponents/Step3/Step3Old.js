import React, { useState } from 'react';
import SaidHiContent from './SaidHiContent';
import ReceivedHiContent from './ReceivedHiContent';

export default function Step3() {
  const [GSCYouSaidHi, setGSCYouSaidHi] = useState(false)
  const [GSCWhoSaidHi, setGSCWhoSaidHi] = useState(false)

  return (
    <div className="bg-beach homepage-container-padding">
      <div id="step-3-title" className="color-blue bold italic underline font-size-large">STEP 3: START A CONVERSATION</div>
      <br />
      <div>
        <div id="step-three-hello-page-arrow-up"></div>
        <div id="step-three-hello-page-button" className="font-size-large text-align-center bg-blue color-red">HELLO PAGE</div>
        <div id="step-three-hello-page-arrow-down"></div>
        <br />
        <div className="color-blue text-align-center">Good Single Christians can see and keep track of the "hi"s they have given and received on the HELLO page</div>
      </div>
      <br />
      <div id="step-three-toggle-div">
        <button className="step-three-toggle-buttons color-beach" onClick={() => setGSCYouSaidHi(!GSCYouSaidHi)}>GSCs you "said hi" to</button>
        <div className={GSCYouSaidHi ? "step-three-arrow-down" : null}></div>
        {
          GSCYouSaidHi ? <SaidHiContent /> : null
        }
      </div>
      <div id="step-three-toggle-div">
        <button className="step-three-toggle-buttons color-beach" onClick={() => setGSCWhoSaidHi(!GSCWhoSaidHi)}>GSCs who have "said hi" to you</button>
        <div className={GSCWhoSaidHi ? "step-three-arrow-down" : null}></div>
        {
          GSCWhoSaidHi ? <ReceivedHiContent /> : null
        }
      </div>
    </div>
  )
}
