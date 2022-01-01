import React from 'react';
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from 'react-router-dom';
import { AssignmentIndSharp, NotesSharp, PeopleAltSharp } from '@material-ui/icons';

export default function FFContent() {
  const { currentUser } = useAuth();
  let history = useHistory();

  const goToFFProfilePage = () => {
    history.push('/my-good-single-christian-friends')
  }

  const goToFFLogInpage = () => {
    history.push('/faithful-friend-sign-up')
  }

  return (
    <div className="step-one-content-div">
      <br />
      <div className="display-flex">
        <div className="step-one-left-number-circles">1</div>
        {currentUser 
            ?
            <button className="step-one-content-buttons display-flex align-items" onClick={goToFFProfilePage}>
              <div><AssignmentIndSharp style={{fontSize:"80px"}} /></div>
              <div className="text-align-right color-blue">
                <div><span className="color-red">Create</span> a Faithful Friend</div>
                <div className="color-red font-size-large">ACCOUNT</div>
                <div>on MatchesUp</div>
              </div>
            </button>
            :
            <button className="step-one-content-buttons display-flex align-items" onClick={goToFFLogInpage}>
              <div><AssignmentIndSharp style={{fontSize:"80px"}} /></div>
              <div className="text-align-left color-blue">
                <div><span className="color-red">Create</span> a Faithful Friend</div>
                <div className="color-red font-size-large">ACCOUNT</div>
                <div>on MatchesUp</div>
              </div>
            </button>
          }
       
      </div>
      <br />
      <div className="display-flex">
        <div className="step-one-left-number-circles">2</div>
        <button className="step-one-content-buttons display-flex align-items">
          <div><PeopleAltSharp style={{fontSize:"80px"}} /></div>
          <div className="text-align-right color-blue">
            <div className="color-red font-size-large">CHECK</div>
            <div>with your friend and get their <span className="color-red">email</span> address</div>
          </div>
        </button>
      </div>
      <br />
      <div className="display-flex">
        <div className="step-one-left-number-circles">3</div>
        <button className="step-one-content-buttons display-flex align-items">
          <div><NotesSharp style={{fontSize:"80px"}} /></div>
          <div className="text-align-left color-blue">
            <div>
              <span className="color-red">Create </span>
              <span>a GSCF </span>
            </div>
            <div>
              <div className="color-red font-size-large">PROFILE </div>
              <span>for your friend</span>
            </div>
          </div>
        </button>
      </div>
      <br />
      <div className="color-blue text-align-center" style={{width:"200px", border:"3px black dotted", padding:"5px", margin:"auto"}}>
        <div>Profile undergoes</div>
        <div>MatchesUp</div>
        <div className="color-red font-size-large">SCREENING</div>
      </div>
      <br />
    </div>
  )
}
