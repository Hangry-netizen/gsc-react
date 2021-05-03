import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
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

  console.log(titles)

  return (
    <div>
      <h1>Approval Page</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            {
              titles.map((title) => {
                return (
                  <th key={title}>{title.content.$t}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div> 
  )
}
