import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

export default function AdminApprovalTable({ titles, datas }) {
  const [num, setNum] = useState(1)

  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO"]

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            {
              titles.map((title) => {
                return (
                  <th key={title.title.$t}>{title.content.$t}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          <tr>
          {
            datas.map((data) => {
              if (data.title.$t == alphabet[num] + 2) {
                return (
                  <td key={data.title.$t}>{data.content.$t}</td>
                )
              }
            })
          }
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
