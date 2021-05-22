import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './NavComponents/Navbar';
import HomePage from './pages/HomePage';
import DonationPage from './pages/DonationPage';
import TermsAndPrivacyPage from './pages/TermsAndPrivacyPage';
import FFLoginPage from './pages/FFLoginPage';
import FFSignUpPage from './pages/FFSignUpPage';
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import FFProfilePage from './pages/FFProfilePage';
import ResourcesPage from './pages/ResourcesPage';

/* Articles */
import Article1 from "./ResourcesComponents/Article1/Article1"
import Article2 from "./ResourcesComponents/Article2/Article2"
import Article3 from "./ResourcesComponents/Article3/Article3"

/* Admin */
import AdminNavbar from './AdminComponents/AdminNavbar';
import AdminLoginPage from './AdminPages/AdminLoginPage';
import AdminHomePage from './AdminPages/AdminHomePage';
import AdminApprovalPage from './AdminPages/AdminApprovalPage';
import AdminDatabasePage from './AdminPages/AdminDatabasePage';

import { useAuth } from "./contexts/AuthContext";

export const url = 'http://127.0.0.1:5000/api/v1';
/*https://matches-up.herokuapp.com/api/v1*/
/*http://127.0.0.1:5000/api/v1*/

function App() {
  const { currentUser } = useAuth()
  const [currentAdmin] = useState(localStorage.getItem('jwt_admin'))

  return (
    <div className="App">

      {
        currentAdmin
        ?
        <AdminNavbar />
        :
        <Navbar />
      }

      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/terms-and-privacy-policy"><TermsAndPrivacyPage /></Route>
        <Route exact path="/donation-info"><DonationPage /></Route>
        <Route exact path="/resources"><ResourcesPage /></Route>

        {/* Articles */}
        <Route exact path="/resources/articles/should-i-put-myself-out-there"><Article1 /></Route>
        <Route exact path="/resources/articles/should-i-like-someone-in-a-different-country"><Article2 /></Route>
        <Route exact path="/resources/articles/what-if-i-receive-a-like-from-someone-I'm-not-interested-in"><Article3 /></Route>

        {/* currentAdmin */}
        {
          currentAdmin
          ?
          <>
            <Route exact path="/admin/home"><AdminHomePage /></Route>
            <Route exact path="/admin/approval"><AdminApprovalPage /></Route>
            <Route exact path="/admin/database"><AdminDatabasePage /></Route>
          </>
          :
          <Route exact path="/admin/login"><AdminLoginPage /></Route>
        }
        
        {/* currentUser*/}
        {
          currentUser
          ?
          <>
            <Route exact path="/my-good-single-christian-friends"><FFProfilePage /></Route>
          </>
        :
          <>
            <Route exact path="/faithful-friend-login"><FFLoginPage /></Route>
            <Route exact path="/faithful-friend-sign-up"><FFSignUpPage /></Route>
            <Route exact path="/forgot-password"><ForgotPasswordPage /></Route>
          </>
        }

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
