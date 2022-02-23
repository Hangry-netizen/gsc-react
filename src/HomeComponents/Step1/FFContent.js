import React from 'react';
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from 'react-router-dom';
import { AssignmentIndSharp, NotesSharp, PeopleAltSharp } from '@material-ui/icons';

export default function FFContent({ mobile }) {
  const { currentUser } = useAuth();
  let history = useHistory();

  const goToFFProfilePage = () => {
    history.push('/my-good-single-christian-friends')
  }

  const goToFFLogInpage = () => {
    history.push('/faithful-friend-sign-up')
  }

  return (
    <div className={mobile ? "step-one-content-div font-size-small" : "step-one-content-div font-size-16"}>
      <br />
      <div className="display-flex">
        <div className="step-one-left-number-circles">1</div>
        {currentUser 
            ?
            <button className="step-one-content-buttons display-flex align-items" onClick={goToFFProfilePage}>
              <div><AssignmentIndSharp className="steps-icons" /></div>
              <div className="text-align-right color-blue">
                <div><span className="color-red">Create</span> a Faithful Friend</div>
                <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>ACCOUNT</div>
                <div>on MatchesUp</div>
              </div>
            </button>
            :
            <button className="step-one-content-buttons display-flex align-items" onClick={goToFFLogInpage}>
              <div><AssignmentIndSharp className="steps-icons" /></div>
              <div className="text-align-left color-blue">
                <div><span className="color-red">Create</span> a Faithful Friend</div>
                <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>ACCOUNT</div>
                <div>on MatchesUp</div>
              </div>
            </button>
          }
       
      </div>
      <br />
      <div className="display-flex">
        <div className="step-one-left-number-circles">2</div>
        <button className="step-one-content-buttons display-flex align-items">
          <div><PeopleAltSharp className="steps-icons" /></div>
          <div className="text-align-right color-blue">
            <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>CHECK</div>
            <div>with your friend and get their <span className="color-red">email</span> address</div>
          </div>
        </button>
      </div>
      <br />
      <div className="display-flex">
        <div className="step-one-left-number-circles">3</div>
        <button className="step-one-content-buttons display-flex align-items">
          <div><NotesSharp className="steps-icons" /></div>
          <div className="text-align-left color-blue">
            <div>
              <span className="color-red">Create </span>
              <span>a GSCF </span>
            </div>
            <div>
              <div className={mobile ? "color-red font-size-16" : "color-red font-size-22"}>PROFILE </div>
              <span>for your friend</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
