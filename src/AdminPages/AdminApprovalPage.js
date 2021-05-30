import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApprovalTable from '../AdminComponents/ApprovalComponents/ApprovalTable';
import { url } from '../App';
import "../AdminComponents/ApprovalComponents/AdminApprovalPage.css";

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
      <h1 className="color-red" style={{margin:"50px auto"}}>Approval Page</h1>
      <div className="color-red">*from the perspective of this GSC's FF and references</div>
      <br />
      <ApprovalTable
        gscs={gscs}
      />
    </div> 
  )
}