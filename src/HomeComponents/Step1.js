import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../contexts/AuthContext"
import Step1Icon from "../utils/Step1.png";

export default function Step1() {
  const { currentUser } = useAuth()
  return (
    <div id="step-1" className="bg-blue text-align-left homepage-container-padding">
      <div className="steps-flex-container">
        <div>
          <img src={Step1Icon} alt="Step 1 icon" className="left-steps-icon"/>
        </div>
        <h1 id="step-1-title" className="color-red">STEP 1: The Entry</h1>
      </div>
      <div className="color-red">With your Good Single Christian Friend's permission, tell us about your GSCF!</div>
      <br />
      <div id="create-acc-and-start-now-div">
        <div id="create-ff-txt" className="color-grey">Create a Faithful Friend account</div>
        <div id="start-now-and-few-words-div">
          {currentUser 
            ?
            <Link to="/my-good-single-christian-friends">
              <button id="start-now-btn" className="red-button">START NOW</button>
            </Link>
            :
            <Link to="/faithful-friend-sign-up">
              <button id="start-now-btn" className="red-button">START NOW</button>
            </Link>
          }
          <div>
            <HashLink smooth to="#a-few-words-from-us" id="a-few-words-link" className="color-red font-size-small">Read A FEW WORDS FROM US before proceeding</HashLink>
          </div>
        </div>
      </div>
      <br />
      <div id="create-gsc-txt" className="color-grey">Create a profile for your GSCF (appear anonymous or link a social media account)</div>

    </div>
  )
}
