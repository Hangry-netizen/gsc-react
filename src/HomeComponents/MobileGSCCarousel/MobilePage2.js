import React from 'react';
import { CheckCircleOutline } from '@material-ui/icons';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function MobilePage2({ mobile }) {
  return (
    <div className={mobile ? "ff-carousel-content-div font-size-small" : "ff-carousel-content-div font-size-16"}>
      <br />
      <div className="color-red text-align-center" style={{width:"200px", border:"3px black dotted", padding:"5px", margin:"auto"}}>
        <div>GSC profile undergoes</div>
        <div>MatchesUp</div>
        <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>SCREENING</div>
      </div>
      <br />
      <button className="ff-carousel-content-buttons display-flex align-items">
        <div className="text-align-left color-blue">
          <div style={{fontWeight:"lighter", color:"black"}}>GSC receives email...</div>
          <div>Notified when profile is</div>
          <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>APPROVED</div>
        </div>
        <div><CheckCircleOutline className="steps-icons" /></div>
      </button>
      <br />
      <div className="arrow-up"></div>
      <div className="bg-blue color-beach" style={{padding:"10px 15px", width: "260px", borderRadius: "8px", margin:"auto"}}>
        <div className="display-flex">
          <div className="text-align-left">
            <span>Your </span>
            <span className="color-red">GSC profile </span>
            <span>will be added to our </span>
            <span className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>DATABASE </span>
            <span className="text-align-left">on the 1st of the following month</span>
          </div>
          <div className="color-red">
            <div>
              <CelebrationIcon style={{fontSize:"35px"}} />
            </div>
            <div id="celebration-yay" className="font-size-large">Yay!!!</div>
          </div>
        </div>
        <div className="text-align-center" style={{color:"white"}}>The database is updated with new profiles on the 1st of every month</div>
      </div>
      <div className="arrow-down"></div>
    </div>
  )
}
