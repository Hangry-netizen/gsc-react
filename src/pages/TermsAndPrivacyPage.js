import React from 'react';
import Terms from '../utils/Terms_and_Conditions_V3.pdf'
import Privacy from '../utils/Privacy_Policy_V2.pdf'

export default function TermsAndPrivacyPage() {
  return (
    <div>
      <h2 className="color-red" style={{padding:"6% 2%"}}>Our Terms and Privacy</h2>
      <div style={{boxSizing:"border-box", width:"85%", margin:"auto"}}>
        <div className="color-blue text-align-left" style={{marginBottom: "5%"}}>
          <span>Download and read our full Terms and Conditions of Use: </span>
          <a href={Terms} target="_blank" rel="noopener noreferrer">
            <button className="color-red underline" style={{border:"none", background:"transparent"}}>Terms_and_Conditions_V3.pdf</button>
          </a>
        </div>
        <div className="color-blue text-align-left" style={{marginBottom: "5%"}}>
        <span>Download and read our Privacy Policy: </span>
          <a href={Privacy} target="_blank" rel="noopener noreferrer">
            <button className="color-red underline" style={{border:"none", background:"transparent"}}>Privacy_Policy_V2.pdf</button>
          </a>
        </div>
      </div>
    </div>
  )
}
