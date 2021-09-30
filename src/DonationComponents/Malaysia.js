import React ,{ useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Duitnow from '../utils/MY_Duitnow_QR.jpg';
import TnG from '../utils/MY_TnG_QR.jpg'

export default function Malaysia() {
  const [showMalaysiaModal, setShowMalaysiaModal] = useState(false);

  const handleCloseMalaysiaModal = () => setShowMalaysiaModal(false);
  const handleShowMalaysiaModal = () => setShowMalaysiaModal(true);

  return (
    <div>
      <div className="text-align-center">
        <button className="country-btn color-red" onClick={handleShowMalaysiaModal}>MALAYSIA</button>
      </div>
      <Modal
        id="pointers-modal"
        show={showMalaysiaModal}
        onHide={handleCloseMalaysiaModal}
        scrollable={true}
        style={{height:"80%"}}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-blue">MALAYSIA</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach color-red text-align-left">
          <h4 className="color-blue text-align-center">A. Transfer via Duitnow</h4>
          <br />
          <p>Step 1: Login to your Mobile Banking and look for a place to scan “DuitNowQR” or “QRPAY”</p>
          <p>Step 2: Scan this DuitNow QR code</p>
          <div className="text-align-center">
            <img
              src={Duitnow}
              alt="Duitnow"
              style={{width: "50%"}}
            />
          </div>
          <br />
          <p>Step 3: Insert donation amount and include “MatchesUp” in reason/note/comments (optional but helpful for us to track)</p>
          <br />
          <h4 className="color-blue text-align-center">B. Transfer via Touch ’n Go eWallet</h4>
          <br />
          <p>Step 1: Open your TnGo eWallet app and select “Scan”</p>
          <p>Step 2: Scan this QR code </p>
          <div className="text-align-center">
            <img
              src={TnG}
              alt="TnG"
              style={{width: "50%"}}
            />
          </div>
          <br />
          <div>Step 3: Insert donation amount and include “MatchesUp” in reason/note/comments (optional but helpful for us to track)</div>
        </Modal.Body>
        <Modal.Footer className="bg-beach">
          <Button variant="secondary" onClick={handleCloseMalaysiaModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
