import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PayNow from '../utils/SG_TH_Pay_now_QR.png';

export default function Singapore() {
  const [showSingaporeModal, setShowSingaporeModal] = useState(false);

  const handleCloseSingaporeModal = () => setShowSingaporeModal(false);
  const handleShowSingaporeModal = () => setShowSingaporeModal(true);

  return (
    <div>
      <div className="text-align-center">
        <button className="country-btn color-red" onClick={handleShowSingaporeModal}>SINGAPORE / THAILAND</button>
      </div>
      <Modal
        id="pointers-modal"
        show={showSingaporeModal}
        onHide={handleCloseSingaporeModal}
        scrollable={true}
        style={{height:"80%"}}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-blue">SINGAPORE / THAILAND</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach color-red text-align-left">
          <h4 className="color-blue text-align-center">Transfer via PayNow<br />(or PromptPay in Thailand)</h4>
          <p>Step 1: Login to your Mobile Banking and look for a place where you can “Scan & Pay/Transfer” </p>
          <p>Step 2: Scan this QR code </p>
          <div className="text-align-center">
            <img
              src={PayNow}
              alt="PayNow"
              style={{width: "50%"}}
            />
          </div>
          <br />
          <div>Step 3: Insert donation amount and include “MatchesUp” in reason/note/comments (optional but helpful for us to track)</div>
        </Modal.Body>
        <Modal.Footer className="bg-beach">
          <Button variant="secondary" onClick={handleCloseSingaporeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
