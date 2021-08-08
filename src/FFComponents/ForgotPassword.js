import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

import "./ForgotPassword.css"

const ForgotPassword = () => {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      setMessage("")
      setIsLoading(true)
      await resetPassword(email)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("There is no existing Faithful Friend account with this email. Please ensure that you have entered the correct email address and try again. If the problem persists, please contact us at matchesup@gmail.com.")
    }
    setIsLoading(false)
  }

  return (
    <div id="forgot-password-container">
      <div id="forgot-password-title">RESET PASSWORD</div>
      <div id="alert-div" className="font-size-small">
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
      </div>
      <form id="forgot-password-form" onSubmit={handleSubmit}>
        <div className="forgot-password-input-fields">
          <label className="forgot-password-label">email</label>
          <input className="forgot-password-input" type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <button id="forgot-page-submit-btn" className="red-button" disabled={isLoading} type="submit">SUBMIT</button>
      </form>
      <div id="login-link-div">
        <Link id="forgot-password-login-link" to="/faithful-friend-login" className="underline">back to login?</Link>
      </div>
    </div>
  )
}

export default ForgotPassword