import React, { useState } from 'react';
import GSCContent from './GSCContent';
import FFContent from './FFContent';
import { EmailOutlined } from '@material-ui/icons';

export default function Step2() {
  const [FFtoggle, setFFToggle] = useState(false)
  const [GSCtoggle, setGSCToggle] = useState(false)

  const handleFFToggle = () => {
    if (FFtoggle === false) {
      setFFToggle(true)
      setGSCToggle(false)
    }
    else if (FFtoggle === true) {
      setFFToggle(false)
    }
  };

  const handleGSCToggle = () => {
   if (GSCtoggle === false) {
      setGSCToggle(true)
      setFFToggle(false)
    }
    else if (GSCtoggle === true) {
      setGSCToggle(false)
    }
  };


  return (
    <div className="bg-beach homepage-container-padding">
      <div id="step-1-title" className="color-blue bold italic underline font-size-large">STEP 2: STRIKE A MATCH</div>
      <br />
      <div id="step-two-database-div" className="text-align-left">
        <div style={{fontWeight:"lighter"}}>receive email on the 1st of every month...</div>
        <div className="display-flex align-items">
          <div className="color-blue">
            <div>Check out our</div>
            <div className="color-red font-size-large">DATABASE</div>
            <div>of all active profiles</div>
          </div>
          <div><EmailOutlined id="step-two-email-icon" /></div>
        </div>
      </div>
      <br />
      {
        window.innerWidth > 720
        ?
        <div id="step-two-toggle-div" className="display-flex">
          <div>
            <button className="step-two-toggle-buttons color-beach" onClick={() => setGSCToggle(!GSCtoggle)}>
              <span className="color-red">Good Single Christians</span> can
            </button>
            <div className={GSCtoggle ? "step-two-arrow-down" : null}></div>
            {
              GSCtoggle ? <GSCContent /> : null
            }
          </div>
          <div>
            <button className="step-two-toggle-buttons color-beach" onClick={() => setFFToggle(!FFtoggle)}>
              <span className="color-red">Faithful Friends</span> can
            </button>
            <div className={FFtoggle ? "step-two-arrow-down" : null}></div>
            {
              FFtoggle ? <FFContent /> : null
            }
          </div>
        </div>
        :
        <div>
          <div id="step-two-toggle-div" className="display-flex">
            <div>
              <button className="step-two-toggle-buttons color-beach" onClick={handleGSCToggle}>
                <span className="color-red">GSCs</span> can
              </button>
              <div className={GSCtoggle ? "step-two-arrow-down" : null}></div>
            </div>
            <div>
              <button className="step-two-toggle-buttons color-beach" onClick={handleFFToggle}>
                <span className="color-red">FFs</span> can
              </button>
              <div className={FFtoggle ? "step-two-arrow-down" : null}></div>
            </div>
          </div>
          {
            GSCtoggle ? <GSCContent /> : null
          }
          {
            FFtoggle ? <FFContent /> : null
          }
        </div>
      }
    </div>
  )
}
