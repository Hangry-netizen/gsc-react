import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatabaseTable from '../AdminComponents/ArchivedComponents/DatabaseTable';
import { url } from '../App';
import "../AdminComponents/ArchivedComponents/AdminArchivedPage.css";

export default function AdminArchivedPage() {
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
    <div id="archived-page-container">
      <h1 className="color-red" style={{margin:"50px auto"}}>Archived Page</h1>
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
