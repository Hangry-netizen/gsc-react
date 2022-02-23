import React from 'react'

export default function GSCContent({ mobile }) {
  return (
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
      <br />
    </div>
  )
}
