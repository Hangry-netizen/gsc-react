import React from 'react'

export default function FFContent({ mobile }) {
  return (
    <div className={mobile ? "step-two-content-div font-size-small" : "step-two-content-div font-size-16"}>
      <div className="step-two-content-buttons">
        <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>🔍 "SUGGEST"</div>
        <div className="color-blue">profiles for your GSCFs</div>
      </div>
    </div>
  )
}
