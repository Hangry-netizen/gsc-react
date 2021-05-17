import React from 'react';
import { Table } from 'react-bootstrap';

export default function ApprovalTable({ gscs }) {
  return (
    <div>
      <Table striped bordered hover variant="dark" responsive>
        <thead id="approval-table-head">
          <tr>
            <th>Alias</th>
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
          gscs.map((gsc) => {
            return (
            <tr id="approval-table-body-row">
              <td>{gsc.alias}</td>
              <td>{gsc.height}</td>
              <td>{gsc.languages}</td>
              <td>{gsc.nationality}</td>
              <td>{gsc.city}, {gsc.country}</td>
              <td>Town: {gsc.moving_to_a_different_town}, Country: {gsc.moving_to_a_different_country}</td>
              <td>{gsc.descriptive_words}</td>
              <td>{gsc.mbti}, {gsc.enneagram}, {gsc.disc}, {gsc.strengths_finder} </td>
              <td>{gsc.church_background}</td>
              <td>{gsc.spiritual_maturity}</td>
              <td scroll>{gsc.spiritual_gifts}</td>
              <td scroll>{gsc.reasons_gscf_makes_a_good_partner}</td>
              <td scroll>{gsc.good_match_for_gscf}</td>
              <td scroll>{gsc.what_is_important_to_me}</td>
            </tr>
            )
          })
        }
          <tr>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
