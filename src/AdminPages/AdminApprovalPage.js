import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminApprovalTable from '../AdminComponents/AdminApprovalTable';

export default function AdminApprovalPage() {
  const [titles, setTitles] = useState([])
  const [datas, setDatas] = useState([])

  useEffect(() => {
    axios.get(`https://spreadsheets.google.com/feeds/cells/1BeUz5bOYM7h-WYRkblpo6pD7rkXhtsbcBbAcv1eieNA/otumiff/public/basic?alt=json`)
      .then((response) => {
        setTitles(response.data.feed.entry.slice(1, 31))
        setDatas(response.data.feed.entry.slice(42,))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>Approval Page</h1>
      <AdminApprovalTable titles={titles} datas={datas}/>
    </div> 
  )
}