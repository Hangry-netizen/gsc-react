import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import CreateGSC from "../FFComponents/CreateGSC";
import AwaitingApprovalGSCs from "../FFComponents/AwaitingApprovalGSCs";
import ExistingGSCs from "../FFComponents/ExistingGSCs";
import DeleteFFAccount from "../FFComponents/DeleteFFAccount";
import "../FFComponents/FFProfilePage.css";

export default function FFProfilePage() {
  const { currentUser } = useAuth()

  return (
    <div id="FFProfilePage" className="bg-beach text-align-center"> 
      <div id="welcome-ff" className="color-red Essays1743">
        Welcome, {currentUser.displayName} 
      </div>
      <div id="ff-profile-page-click-note" className="color-red font-size-small">Click only when you are ready to take 10-15mins to fill out a form for your GSCF. You'll need your GSCF's preferred email address. (Enable pop-up to access the form.)</div>
      <CreateGSC />
      <div>
        <div id="ff-profile-page-donation" className="color-red">
          To cover our cost of running this service, we ask for a small donation of a minimum of RM5/SGD3/PHP50 for each GSC profile created. <Link to="/donation-info" id="ff-page-donation-info-link">See donation info.</Link> Thank you for helping us maintain this service for the body of Christ!
        </div>
        <div id="profile-page-donation-waived-stamp" className="text-align-center color-red bold">waived for the first batch</div>
      </div>
      <div id="manage-profiles" className="color-blue bold font-size-large">MANAGE GSCF PROFILES</div>
      <AwaitingApprovalGSCs />
      <ExistingGSCs />
      <DeleteFFAccount />
    </div>
  )
}