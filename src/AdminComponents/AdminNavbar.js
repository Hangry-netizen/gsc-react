import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import MatchesUpLogo from "../utils/MatchesUpLogo.svg";

export default function AdminNavbar() {
  let history = useHistory();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt_admin')
    history.push('/admin/login')
    refreshPage()
  }

  const refreshPage = () => {
    window.location.reload()
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
        {
          localStorage.getItem('jwt_admin')
          ?
          <>
            <Link to="/admin/home" id="home-link" onClick={scrollToTop}>ADMINISTRATION</Link>
            <Link onClick={handleLogout} id="logout-link">LOGOUT</Link>
          </>
          :
          null
        }
      </div>
    </div>
  )
}
