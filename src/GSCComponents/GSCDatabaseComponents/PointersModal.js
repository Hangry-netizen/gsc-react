import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function PointersModal({ showPointersModal, handleClosePointersModal }) {
  return (
    <div>
      <Modal
        id="pointers-modal"
        show={showPointersModal}
        onHide={handleClosePointersModal}
        scrollable={true}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-blue">Helpful Pointers</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach color-red">
          <div>1. Click anywhere on a profile to see more information on that person. “Maybe” 🤔 and “say hi” 👋 buttons are in there as well.</div>
          <br />
          <div>2. Click “maybe” 🤔 to track interesting profiles before you decide to say hi (only you can see this).</div>
          <br />
          <div>3. Click “say hi” 👋 to send your name and contact info to that person. You have one hour to undo this action before the person receives any notification.</div>
          <br />
          <div>4. To encourage prayerful choices, you can only “say hi” 👋 to up to 3 people every month.</div>
        </Modal.Body>
        <Modal.Footer className="bg-beach">
          <Button variant="secondary" onClick={handleClosePointersModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  )
}
