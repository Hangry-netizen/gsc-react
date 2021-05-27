import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatabaseTable from '../AdminComponents/DatabaseComponents/DatabaseTable';
import { url } from '../App';
import "../AdminComponents/DatabaseComponents/AdminDatabasePage.css";

export default function AdminDatabasePage() {
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
    <div id="database-page-container">
      <h1 className="color-red" style={{margin:"50px auto"}}>Database Page</h1>
      {
        gscs
        ? 
        <DatabaseTable
          gscs={gscs}
        />
        :
        null
      }
    </div> 
  )
}
