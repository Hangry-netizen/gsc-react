import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from "../App";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from 'react-router-dom';
import ExistingGSCs from "../FFComponents/ExistingGSCs";
import DeleteFFAccount from "../FFComponents/DeleteFFAccount";
import "../FFComponents/FFProfilePage.css";

export default function FFProfilePage() {
  const { currentUser } = useAuth()
  let history = useHistory();

  const [existingGSCs, setExistingGSCs] = useState([])

  useEffect(() => {
    axios.get (`${url}/gscs/`)
      .then((response) => {
        setExistingGSCs(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const goToCreateForm = () => {
    history.push('/my-good-single-christian-friends/create')
    window.scrollTo(0,0)
  }

  return (
    <div id="FFProfilePage" className="bg-beach text-align-center"> 
    {
      existingGSCs
      ?
      <>
        <div id="welcome-ff" className="color-red Essays1743">
          Welcome, {currentUser.displayName} 
        </div>
        <div id="ff-profile-page-click-note" className="color-red font-size-small">Click only when you are ready to take 10-15mins to fill out a form for your GSCF. You'll need your GSCF's preferred email address.</div>
        <div>
          <button id="create-gsc-btn" className="red-button" onClick={goToCreateForm}>
            CREATE A NEW <span className="gscf light italic">GOOD SINGLE CHRISTIAN FRIEND</span> PROFILE
          </button>
        </div>
        <div>
          <button id="create-gscf-btn" className="red-button" onClick={goToCreateForm}>
            Create A New GSCF Profile
          </button>
        </div>
        <div>
          <div id="ff-profile-page-donation" className="color-red">
            To cover our cost of running this service, we ask for a small donation of a minimum of RM5 / SGD3 / PHP50 /THB40 for each GSC profile created. <Link to="/donation-info" id="ff-page-donation-info-link">See donation info.</Link> Thank you for helping us maintain this service for the body of Christ!
          </div>
        </div>
        <div id="manage-profiles" className="color-blue bold font-size-large">MANAGE GSCF PROFILES</div>
        <ExistingGSCs
          existingGSCs={existingGSCs}
        />
        <DeleteFFAccount />
      </>
      :
      null
    }
    </div>
  )
}