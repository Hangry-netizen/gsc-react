import React, { useState } from 'react';
import FFContent from './FFContent';
import GSCContent from './GSCContent';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';

export default function Step1() {
  const [FFtoggle, setFFToggle] = useState(false)
  const [GSCtoggle, setGSCToggle] = useState(false)

  const handleFFToggle = () => {
    if (window.innerWidth > 720) {
      setFFToggle(!FFtoggle)
    }
    else if (FFtoggle === false) {
      setFFToggle(true)
      setGSCToggle(false)
    }
    else if (FFtoggle === true) {
      setFFToggle(false)
    }
  };

  const handleGSCToggle = () => {
    if (window.innerWidth > 720) {
      setGSCToggle(!GSCtoggle)
    }
    else if (GSCtoggle === false) {
      setGSCToggle(true)
      setFFToggle(false)
    }
    else if (GSCtoggle === true) {
      setGSCToggle(false)
    }
  };

  return (
    <div className="bg-beach homepage-container-padding">
      <div id="step-1-title" className="color-blue bold italic underline font-size-large">STEP 1: SUBMIT A PROFILE</div>
      <br />
      <div className="text-align-center color-blue semibold font-size-large">I want to</div>
      <div id="step-one-toggle-div" className="display-flex">
        <div>
          <button className="step-one-toggle-buttons" onClick={handleFFToggle}>
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
            window.innerWidth > 720
            ?
            <>
              {
                FFtoggle ? <FFContent /> : null
              }
            </>
            :
            null
          }
        </div>
        <div className={window.innerWidth > 720 ? "text-align-right" : null}>
          <button className="step-one-toggle-buttons" onClick={handleGSCToggle}>
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
          <div id="step-one-right-arrow-down-margin" className={GSCtoggle ? "step-one-arrow-down" : null}></div>
          {
            window.innerWidth > 720
            ?
            <>
              {
                GSCtoggle ? <GSCContent /> : null
              }
            </>
            :
            null
          }
        </div>
      </div>
      {
        window.innerWidth > 720
        ?
        null
        :
        <div>
          {
            FFtoggle ? <FFContent /> : null
          }
          {
            GSCtoggle ? <GSCContent /> : null
          }
        </div>
      }
      {
        GSCtoggle
        ?
        <>
          <div id="step-one-profile-db-arrow-up"></div>
          <div id="step-one-profile-on-db-div" className="bg-blue">
            <div id="step-one-profile-on-db-content">
              <div  className="display-flex color-beach text-align-left">
                <div>
                  <div>Your <span className="color-red">GSCF profile</span></div>
                  <div>will be added to our</div>
                  <div className="color-red font-size-large">DATABASE</div>
                  <div>on the 1st of the following month</div>
                </div>
                <div style={{marginLeft: "10px"}}>
                  <CelebrationOutlinedIcon className="color-red" id="step-one-celebration-icon" />
                  <div className="color-red font-size-large">YAY!!!</div>
                </div>
              </div>
              <div style={{color:"white", fontWeight:"lighter"}} className="font-size-small">The database is updated with new profiles on the 1st of every month</div>
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
