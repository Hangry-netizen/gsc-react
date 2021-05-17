import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApprovalTable from '../AdminComponents/ApprovalTable';
import { url } from '../App';
import "../AdminComponents/AdminApprovalPage.css"

export default function AdminApprovalPage() {
  const [gscs, setGscs] = useState([])

  useEffect(() => {
    axios.get(`${url}/gscs/`)
      .then((response) => {
        setGscs(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div id="approval-page-container">
      <h1>Approval Page</h1>
      <ApprovalTable gscs={gscs}/>
    </div> 
  )
}