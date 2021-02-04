import React from 'react'
import Desc from '../components/Desc'
import Step1 from '../components/Step1'
import Step2 from '../components/Step2'

const Homepage = () => {
  return (
    <div id="parent">
      <div className="desc">
        <h3>What is MatchesUp?</h3>
        <div>Content</div>
      </div>
      <div className="step1">
        <h3>Step 1</h3>
        <div>Content</div>
      </div>
      <div className="step2">
        <h3>Step 2</h3>
        <div>Content</div>
      </div>
    </div>
  )
}

export default Homepage