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
            <div>Thank you for reporting. We appreciate your help to keep this site full of quality profiles. We will take your comments under advisement and will follow up if necessary.</div>
            <br />
            <div>
              <Button variant="secondary" onClick={handleCloseReportedModal}>Close</Button>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
