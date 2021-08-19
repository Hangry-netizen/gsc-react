import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import BigPay from '../utils/Others_BigPay_QR.jpg';

export default function Others() {
  const [showOthersModal, setShowOthersModal] = useState(false);

  const handleCloseOthersModal = () => setShowOthersModal(false);
  const handleShowOthersModal = () => setShowOthersModal(true);

  return (
    <div>
      <div className="text-align-center">
        <button className="country-btn color-red" onClick={handleShowOthersModal}>OTHERS</button>
      </div>
      <Modal
        id="pointers-modal"
        show={showOthersModal}
        onHide={handleCloseOthersModal}
        scrollable={true}
        style={{height:"80%"}}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-blue">Others</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach color-red text-align-left">
          <h4 className="color-blue text-align-center">Transfer via BigPay</h4>
          <br />
          <p>Step 1: Login to your BigPay app and select “Payments” on the bottom tab</p>
          <p>Step 2: Select “QR Code” and scan this code</p>
          <div className="text-align-center">
            <img
              src={BigPay}
              alt="BigPay"
              style={{width: "50%"}}
            />
          </div>
          <br />
          <div>Step 3: Insert donation amount and confirm payment</div>
        </Modal.Body>
        <Modal.Footer className="bg-beach">
          <Button variant="secondary" onClick={handleCloseOthersModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
