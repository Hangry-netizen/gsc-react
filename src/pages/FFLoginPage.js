import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';

import "../FFComponents/FFLoginPage.css"

const FFLoginPage = () => {
  const history = useHistory()

  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleLogin(e) {
    e.preventDefault()

    if (email === "" || password === "") {
      return setError("Email and password are required to log in")
    }
    
    try {
      setIsLoading(true)
      await login(email, password)
      setMessage("Logged in successfully")
      history.push("/my-good-single-christian-friends")
    } catch {
      setError("Failed to log in")
    }
    setIsLoading(false)
  }

  return (
    <div id="login-container" className="text-align-center bg-blue color-red">
      <div id="login-title">LOGIN</div>
      <div className="color-beach" style={{padding:"10px 30px"}}>This Login is only for Faithful Friends.<br />Good Single Christians (GSCs), please access your profile through the link in your email. Do check promotional tab or spam if you do not see the emails from MatchesUp.</div>
      <div id="login-alert-div">
        {message && <Alert variant="success" className="font-size-small">{message}</Alert>}
        {error && <Alert variant="danger" className="font-size-small">{error}</Alert>}
      </div>
      <br />
      <form id="login-form" onSubmit={handleLogin}>
        <div className="login-input-fields">
          <label className="login-labels">email</label>
          <input className="login-input" type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="login-input-fields">
          <label id="password-label" className="login-labels">password</label>
          <div>
            <input className="login-input" type="password" onChange={e => setPassword(e.target.value)} />
            <div id="forgot-password-link-div">
              <Link id="forgot-password-link" to="/forgot-password">forgot password?</Link>
            </div>
          </div>
        </div>
        <div>
          <button id="login-enter-btn" className="red-button" disabled={isLoading} type="submit">Enter</button>
          <div>
            <Link id="sign-up-link" to="/faithful-friend-sign-up" className="color-red bold">New? Sign up here!</Link>
          </div>
        </div>
      </form>
      
    </div>
  )
}

export default FFLoginPage