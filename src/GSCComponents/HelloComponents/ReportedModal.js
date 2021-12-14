import React from 'react';
import { Modal, Button } from 'react-bootstrap';


export default function ReportedModal({ gsc, showReportedModal, handleCloseReportedModal }) {
  return (
    <>
      <Modal
        id="gsc-modal"
        show={showReportedModal}
        onHide={handleCloseReportedModal}
        scrollable={true}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-red">You have reported {gsc.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach color-blue">
            <div>The administration team in MatchesUp is looking into the problem and will take neccessary actions to ensure the quality of the profiles in this site.</div>
            <br />
            <div>Please do not hesitate to email us at matchesup@gmail.com should you have any further enquiry.</div> 
            <br />
            <div>
              <Button variant="secondary" onClick={handleCloseReportedModal}>Close</Button>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
