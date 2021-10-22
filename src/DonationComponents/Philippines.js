import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PH_GCash from '../utils/PH_GCash_QR.jpg';

export default function Philippines() {
  const [showPhilippinesModal, setShowPhilippinesModal] = useState(false);

  const handleClosePhilippinesModal = () => setShowPhilippinesModal(false);
  const handleShowPhilippinesModal = () => setShowPhilippinesModal(true);

  return (
    <div>
      <div className="text-align-center">
        <button className="country-btn color-red" onClick={handleShowPhilippinesModal}>PHILIPPINES</button>
      </div>
      <Modal
        id="pointers-modal"
        show={showPhilippinesModal}
        onHide={handleClosePhilippinesModal}
        scrollable={true}
        style={{height:"80%"}}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-blue">PHILIPPINES</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach color-red text-align-left">
          <h4 className="color-blue text-align-center">Transfer via GCash</h4>
          <p>Step 1: Open your GCash app and look for a place to “scan QR code” </p>
          <p>Step 2: Scan this GCash QR code </p>
          <div className="text-align-center">
            <img
              src={PH_GCash}
              alt="GCash"
              style={{width: "50%"}}
            />
          </div>
          <br />
          <div>Step 3: Insert donation amount and include “MatchesUp” in reason/note/comments (optional but helpful for us to track)</div>
        </Modal.Body>
        <Modal.Footer className="bg-beach">
          <Button variant="secondary" onClick={handleClosePhilippinesModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}