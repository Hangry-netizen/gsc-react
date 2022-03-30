import React from 'react';
import FFContent from './FFContent';
import GSCContent from './GSCContent';
import { Group } from '@material-ui/icons';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function Step1() {
  return (
    <div className="font-size-16 bg-blue text-align-center">
      <div id="step-1-title" className="color-grey bold italic font-size-large">STEP 1: SUBMIT A PROFILE</div>
      <div className="display-flex bg-blue" style={{width:"720px", margin:"auto"}}>
        <div>
          <div className="display-flex" style={{alignItems:"flex-end"}}>
            <Group id="ff-icon" className="color-red" />
            <div className="color-red bold" style={{margin:"0 auto 5px 10px"}}>SIGN A FRIEND UP!</div>
          </div>
          <div style={{color:"white"}}>
            <span className="font-size-small">You are a </span>
            <span className="Essays1743 font-size-small">FAITHFUL FRIEND </span>
            <span className="color-red Essays1743 font-size-small">(FF)</span>
          </div>
          <FFContent />
        </div>
        <div>
          <div className="display-flex" style={{alignItems:"flex-end"}}>
            <div className="color-red bold" style={{margin:"0 5px 5px auto"}}>FIND A MATCH!</div>
            <TravelExploreIcon id="gsc-icon" className="color-red" />
          </div>
          <div style={{color:"white"}}>
            <span className="font-size-small">You are a </span>
            <span className="Essays1743 font-size-small">GOOD SINGLE CHRISTIAN </span>
            <span className="color-red Essays1743 font-size-small">(GSC)</span>
          </div>
          <GSCContent />
        </div>
      </div>
    </div>
  )
}
