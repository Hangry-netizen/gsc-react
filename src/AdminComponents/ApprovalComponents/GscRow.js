import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import GscModal from './GscModal';
import ApprovalModal from './ApprovalModal';

export default function ApprovalRow({ gsc, handleApproval }) {
  const [showGscModal, setShowGscModal] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);

  const handleCloseGscModal = () => setShowGscModal(false);
  const handleShowGscModal = () => setShowGscModal(true);
  const handleCloseApprovalModal = () => setShowApprovalModal(false);
  const handleShowApprovalModal = () => setShowApprovalModal(true);
  return (
    <>
    {
      gsc.is_approved
      ?
      <>
        <tr onClick={handleShowGscModal}>
          <th>
            <Button variant="danger" onClick={handleShowApprovalModal} style={{fontSize:"14px"}}>Approve</Button>
          </th>
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
          <td>{gsc.spiritual_gifts}</td>
          <td>{gsc.reasons_gscf_makes_a_good_partner}</td>
          <td>{gsc.good_match_for_gscf}</td>
          <td>{gsc.what_is_important_to_me}</td>
        </tr>
        <GscModal
          gsc={gsc}
          showGscModal={showGscModal}
          handleCloseGscModal={handleCloseGscModal}
        />
        <ApprovalModal
          gsc={gsc}
          showApprovalModal={showApprovalModal}
          handleCloseApprovalModal={handleCloseApprovalModal}
        />
      </>
      :
      null
    }
      
    </>
  )
}
