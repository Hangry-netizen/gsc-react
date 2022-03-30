import React from 'react';
import { ThumbUpAltOutlined } from '@material-ui/icons';

export default function MobilePage1({ mobile }) {
  return (
    <div className={mobile ?"ff-carousel-content-div font-size-small" : "ff-carousel-content-div font-size-16"}>
      <br />
      <div className="ff-carousel-right-number-circles">1</div>
      <button className="ff-carousel-content-buttons">
        <div className="text-align-left color-blue">
          <div><span className="color-red">Ask</span> a friend to be your</div>
          <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>FAITHFUL FRIEND</div>
          <div>and create a GSC profile for you</div>
        </div>
      </button>
      <br />
      <br />
      <div className="ff-carousel-right-number-circles">2</div>
      <button className="ff-carousel-content-buttons display-flex align-items" style={{margin:"auto"}}>
        <div className="text-align-left color-blue">
          <div style={{fontWeight:"lighter", color:"black"}}>GSC receives email...</div>
          <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>CONSENT</div>
          <div>and <span className="color-red">edit</span> profile</div>
        </div>
        <div><ThumbUpAltOutlined className="steps-icons" /></div>
      </button>
    </div>
  )
}
