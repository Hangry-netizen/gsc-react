import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../App';
import ReportsTable from '../AdminComponents/ReportsComponents/ReportsTable';
import '../AdminComponents/ReportsComponents/AdminReportsPage.css'

export default function AdminReportsPage() {
  const [reports, setReports] = useState([])

  useEffect(() => {
    axios.get(`${url}/reports/`)
      .then((response) => {
        setReports(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div id="database-page-container">
      <h1 className="color-red" style={{margin:"50px auto"}}>Reports Page</h1>
      {
        reports
        ? 
        <ReportsTable
          reports={reports}
        />
        :
        null
      }
    </div>
  )
}
