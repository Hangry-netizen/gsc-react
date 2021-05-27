import React from 'react';
import { Table } from 'react-bootstrap';
import DatabaseRow from './DatabaseRow';

export default function DatabaseTable({ gscs }) {
  return (
    <div>
      <Table striped bordered hover variant="dark" responsive>
        <thead id="database-table-head">
          <tr>
            <th>Alias</th>
            <th>Age Range</th>
            <th>Location</th>
            <th>Willingness to relocate</th>
            <th>Height</th>
            <th>Languages</th>
            <th>Nationality/ Ethnicity</th>
            <th className="bg-red">Descriptors</th>
            <th>Personality/ Temperament</th>
            <th>Church background</th>
            <th className="bg-red">Spiritual maturity</th>
            <th className="bg-red">Spiritual characteristics</th>
            <th className="bg-red">What qualities make him a good partner?</th>
            <th className="bg-red">What kind of person will be a good match for him?</th>
            <th>Words from the GSC</th>
          </tr>
        </thead>
        <tbody id="database-table-body">
        {
          gscs.map((gsc, i) => {
            if (gsc.is_active) {
              return (
                <DatabaseRow
                  key={i}
                  gsc={gsc}
                />
              )
            }
            return null
          })
        }
        </tbody>
      </Table>
    </div>
  )
}
