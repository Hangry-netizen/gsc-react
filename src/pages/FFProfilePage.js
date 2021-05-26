import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from 'react-router-dom';
import ExistingGSCs from "../FFComponents/ExistingGSCs";
import DeleteFFAccount from "../FFComponents/DeleteFFAccount";
import "../FFComponents/FFProfilePage.css";

export default function FFProfilePage() {
  const { currentUser } = useAuth()
  let history = useHistory();

  const goToCreateForm = () => {
    history.push('/create-new-good-single-christian-friend-profile-form')
    window.scrollTo(0,0)
  }

  return (
    <div id="FFProfilePage" className="bg-beach text-align-center"> 
      <div id="welcome-ff" className="color-red Essays1743">
        Welcome, {currentUser.displayName} 
      </div>
      <div id="ff-profile-page-click-note" className="color-red font-size-small">Create new GSCF profile function is halted until May 28</div>
      <div>
        <button id="create-gsc-btn" className="red-button">
          CREATE A NEW <span className="gscf light italic">GOOD SINGLE CHRISTIAN FRIEND</span> PROFILE
        </button>
      </div>
      <div>
        <button id="create-gscf-btn" className="red-button">
          Create A New GSCF Profile
        </button>
      </div>
      <div>
        <div id="ff-profile-page-donation" className="color-red">
          To cover our cost of running this service, we ask for a small donation of a minimum of RM5/SGD3/PHP50 for each GSC profile created. <Link to="/donation-info" id="ff-page-donation-info-link">See donation info.</Link> Thank you for helping us maintain this service for the body of Christ!
        </div>
        <div id="profile-page-donation-waived-stamp" className="text-align-center color-red bold">waived for the first batch</div>
      </div>
      <div id="manage-profiles" className="color-blue bold font-size-large">MANAGE GSCF PROFILES</div>
      <ExistingGSCs />
      <DeleteFFAccount />
    </div>
  )
}