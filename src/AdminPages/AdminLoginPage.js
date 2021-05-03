import React, { useState } from 'react'
import axios from 'axios';
import { url } from "../App";
import { Alert } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState()

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (username === "") {
      return setError("Username is required")
    }
    if (password === "") {
      return setError("Password is required")
    }
    axios({
      method: "POST",
      url: `${url}/sessions/login/admin`,
      data: {
        username: username,
        password: password
      }
    })
    .then((response) => {
      if (response.data.Error) {
        return setError("Login failed: Invalid credentials")
      }
      if (response.data.auth_token) {
        localStorage.setItem("jwt_admin", response.data.auth_token)
        history.push("/admin/home")
        refreshPage()
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const refreshPage = () => {
    window.location.reload()
  }
  
  return (
    <div>
      <h1 className="color-red text-align-center" style={{paddingTop:"50px", paddingBottom:"80px"}}>Admin Login</h1>
      <form onSubmit={e => handleSubmit(e)} className="color-blue" style={{display:"block", width:"400px", margin:"auto"}}>
        <div className="text-align-center">
          {error && <Alert className="color-red font-size-small">{error}</Alert>}
        </div>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"30px" }}>
          <label>Username</label>
          <input style={{border:"none"}} type="username" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <label>Password</label>
          <input style={{border:"none"}} type="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="text-align-center" style={{marginTop:"60px"}}>
          <button type="submit" className="red-button" style={{padding:"5px 30px", borderRadius:"5px"}}>Enter</button>
        </div>
      </form>
    </div>
  )
}
