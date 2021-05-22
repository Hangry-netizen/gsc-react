import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from "../App";
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminHomePage() {
  const [admin, setAdmin] = useState({})
  const [error, setError] = useState("")

  useEffect(() => {
    axios.get(`${url}/admins/me`,
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('jwt_admin')
      }
    })
    .then((response) => {
      setAdmin(response.data)
    })
    .catch(() => {
      setError("Try logging out and loggin in again")
    })
  }, [])

  return (
    <div className="text-align-center">
      <h1 className="color-red Essays1743" style={{margin:"50px auto 80px"}}>Welcome back, Admin {admin.username}!</h1>
      <div className="text-align-center">
        {error && <Alert className="color-red font-size-small">{error}</Alert>}
      </div>
      {
        admin 
        ?
        <>
          <div style={{marginTop:"20px"}}>
            <Link to="/admin/database">
              <button className="blue-button" style={{width:"300px", padding:"10px 20px"}}>View full database</button>
            </Link>
          </div>
          <div style={{ marginTop:"20px"}}>
            <Link to="/admin/approval">
              <button className="blue-button" style={{width:"300px", padding:"10px 20px"}}>Approve GSCs</button>
            </Link>
          </div>
          <div style={{marginTop:"20px"}}>
            <button className="blue-button" style={{width:"300px", padding:"10px 20px"}}>Reports</button>
          </div>
        </>
        :
        null
      }
    </div>
  )
}
