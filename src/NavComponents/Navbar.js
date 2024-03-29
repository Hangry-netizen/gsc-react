import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import MatchesUpLogo from "../utils/MatchesUpLogo.svg";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Navbar.css'
import Burger from "./Burger"

export default function Navbar() {
  const { currentUser } = useAuth()
  const { logout } = useAuth()

  let history = useHistory()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  const handleLogout = () => {
    try {
      logout()
      history.push("/")
    } catch {
    }
  }
  return (
    <div id="navbar" className="color-red bg-blue">
      <div id="nav-left">
        <Link to="/" id="matches-up-link" onClick={scrollToTop}>
          <img src={MatchesUpLogo} alt="MatchesUpLogo" id="matches-up-logo-nav"/>
          <span id="matches-up-title">MatchesUp</span>
        </Link>
      </div>
      <div id="nav-right">
        <Link to="/resources" id="resources-link" onClick={scrollToTop}>RESOURCES</Link>     
        <Link to="/frequently-asked-questions" id="faqs-link" onClick={scrollToTop}>FAQs</Link>     
        {currentUser 
        ?
        <>
          <Link to="/my-good-single-christian-friends" id="my-gscfs" onClick={scrollToTop}>My GSCFs</Link>
          <button onClick={handleLogout} id="logout-link" style={{fontSize:"40px", background:"none", border:"none"}}><ExitToAppIcon /></button>
        </>
        :
        <Link to="/faithful-friend-login" id="login-link" onClick={scrollToTop}>LOGIN</Link>
        }
      </div>
      
      <Burger />
    </div>
  )
}
