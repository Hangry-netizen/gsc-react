import React from 'react';
import ApprovalRow from './ApprovalRow';
import { Table } from 'react-bootstrap';

export default function ApprovalTable({ gscs }) {
  return (
    <div>
      <Table striped bordered hover variant="dark" responsive>
        <thead id="approval-table-head">
          <tr>
            <th>Alias</th>
            <th>Age Range</th>
            <th>Height</th>
            <th>Languages</th>
            <th>Nationality/ Ethnicity</th>
            <th>Location</th>
            <th>Willingness to relocate</th>
            <th>Descriptors</th>
            <th>Personality/ Temperament</th>
            <th>Church background</th>
            <th>Spiritual maturity</th>
            <th>Spiritual characteristics</th>
            <th>What qualities make him a good partner?</th>
            <th>What kind of person will be a good match for him?</th>
            <th>Hear from the GSC</th>
          </tr>
        </thead>
        <tbody id="approval-table-body">
        {
          gscs.map((gsc, i) => {
            return (
              <ApprovalRow
                key={i}
                gsc={gsc}
              />
            )
          })
        }
        </tbody>
      </Table>
    </div>
  )
}
