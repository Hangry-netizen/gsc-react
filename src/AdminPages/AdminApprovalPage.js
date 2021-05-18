import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApprovalTable from '../AdminComponents/ApprovalTable';
import { url } from '../App';
import "../AdminComponents/AdminApprovalPage.css"

export default function AdminApprovalPage() {
  const [isLoading, setIsLoading] = useState(false)
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

  const handleApproval = e => {
    let uuid = e.target.value
    setIsLoading(true)

    axios({
      method: 'POST',
      url: `${url}/gscs/status/${uuid}`,
      data: {
        is_approved: true,
        is_active: false
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    setIsLoading(false)
  }

  return (
    <div id="approval-page-container">
      <h1>Approval Page</h1>
      <ApprovalTable
        gscs={gscs}
        isLoading={isLoading}
        handleApproval={handleApproval}
      />
    </div> 
  )
}