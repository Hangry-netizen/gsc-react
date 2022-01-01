import React from 'react';
import { ThumbUpAltOutlined, CheckCircleOutline } from '@material-ui/icons';

export default function GSCContent() {
  return (
    <div className="step-one-content-div">
      <br />
      <div className="step-one-right-number-circles">1</div>
      <button className="step-one-content-buttons">
        <div className="text-align-left color-blue">
          <div><span className="color-red">Ask</span> a friend to be your</div>
          <div className="color-red font-size-large">FAITHFUL FRIEND</div>
          <div>and create a GSCF profile for you</div>
        </div>
      </button>
      <br />
      <br />
      <div className="step-one-right-number-circles">2</div>
      <button className="step-one-content-buttons display-flex align-items">
        <div className="text-align-left color-blue">
          <div style={{fontWeight:"lighter", color:"black"}}>receives email...</div>
          <div className="color-red font-size-large">CONSENT</div>
          <div>and <span className="color-red">edit</span> profile</div>
        </div>
        <div><ThumbUpAltOutlined style={{fontSize:"80px"}} /></div>
      </button>
      <br />
      <div className="color-blue text-align-center" style={{width:"200px", border:"3px black dotted", padding:"5px", margin:"auto"}}>
        <div>Profile undergoes</div>
        <div>MatchesUp</div>
        <div className="color-red font-size-large">SCREENING</div>
      </div>
      <br />
      <div className="step-one-right-number-circles">3</div>
      <button className="step-one-content-buttons display-flex align-items">
        <div className="text-align-left color-blue">
          <div style={{fontWeight:"lighter", color:"black"}}>receives email...</div>
          <div>Notified when profile is</div>
          <div className="color-red font-size-large">APPROVED</div>
        </div>
        <div><CheckCircleOutline style={{fontSize:"80px"}} /></div>
      </button>
      <br />
    </div>
  )
}
