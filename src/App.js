import React from 'react';
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
import FAQPage from './pages/FAQPage';

/*Articles*/
import Article1 from "./ResourcesComponents/Article1/Article1"
import Article2 from "./ResourcesComponents/Article2/Article2"
import Article3 from "./ResourcesComponents/Article3/Article3"

import { useAuth } from "./contexts/AuthContext";

export const url = 'https://matches-up.herokuapp.com/api/v1';
/**/

function App() {
  const { currentUser } = useAuth()
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/terms-and-privacy-policy"><TermsAndPrivacyPage /></Route>
        <Route exact path="/donation-info"><DonationPage /></Route>
        <Route exact path="/resources"><ResourcesPage /></Route>
        <Route exact path="/frequently-asked-questions"><FAQPage /></Route>

        {/* Articles */}
        <Route exact path="/resources/articles/should-i-put-myself-out-there"><Article1 /></Route>
        <Route exact path="/resources/articles/should-i-like-someone-in-a-different-country"><Article2 /></Route>
        <Route exact path="/resources/articles/what-if-i-receive-a-like-from-someone-I'm-not-interested-in"><Article3 /></Route>

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
