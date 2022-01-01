import React, { useState } from 'react';
import FFContent from './FFContent';
import GSCContent from './GSCContent';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';

export default function Step1() {
  const [FFtoggle, setFFToggle] = useState(false)
  const [GSCtoggle, setGSCToggle] = useState(false)

  return (
    <div className="bg-beach homepage-container-padding">
      <div id="step-1-title" className="color-blue bold italic underline font-size-large">STEP 1: SUBMIT A PROFILE</div>
      <br />
      <div className="text-align-center color-blue semibold font-size-large">I want to</div>
      <div id="step-one-toggle-div" className="display-flex">
        <div>
          <button className="step-one-toggle-buttons" onClick={() => setFFToggle(!FFtoggle)}>
            <div className="color-red font-size-small">SIGN A FRIEND UP!</div>
            {
              FFtoggle
              ?
              <>
                <div className="color-beach font-size-small">You are a</div>
                <div className="color-beach Essays1743 font-size-small">FAITHFUL FRIEND</div>
                <div className="color-red Essays1743 font-size-small">(FF)</div>
              </>
              :
              null
            }
          </button>
          <div className={FFtoggle ? "step-one-arrow-down" : null}></div>
          {
            FFtoggle ? <FFContent /> : null
          }
        </div>
        <div className="text-align-right">
          <button className="step-one-toggle-buttons" onClick={() => setGSCToggle(!GSCtoggle)}>
            <div className="color-red font-size-small">FIND A MATCH!</div>
            {
              GSCtoggle
              ?
              <>
                <div className="color-beach font-size-small">You are a</div>
                <div className="color-beach Essays1743 font-size-small">GOOD SINGLE CHRISTIAN</div>
                <div className="color-red Essays1743 font-size-small">(GSC)</div>
              </>
              :
              null
            }
          </button>
          <div className={GSCtoggle ? "step-one-arrow-down" : null} style={{marginLeft:"100px"}}></div>
          {
            GSCtoggle ? <GSCContent /> : null
          }
        </div>
      </div>
      {
        FFtoggle || GSCtoggle
        ?
        <>
          <div id="step-one-profile-db-arrow-up"></div>
          <div id="step-one-profile-on-db-div" className="bg-blue">
            <div id="step-one-profile-on-db-content" className="display-flex">
              <div>
                <div>Your <span className="color-red">GSCF profile</span></div>
                <div>will be added to our</div>
                <div className="color-red font-size-large">DATABASE</div>
                <div>on the 1st of the following month</div>
              </div>
              <div style={{marginLeft: "10px"}}>
                <CelebrationOutlinedIcon className="color-red" style={{fontSize:"100px"}}/>
                <div className="color-red font-size-large">YAY!!!</div>
              </div>
            </div>
          </div>
          <div id="step-one-profile-db-arrow-down"></div>
          <br />
        </>
        :
        null
      }
    </div>
  )
}
