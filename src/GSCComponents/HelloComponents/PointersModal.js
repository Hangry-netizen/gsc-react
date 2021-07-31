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
        <Modal.Body className="bg-beach">
          <div className="color-blue">1. Actions are available at the bottom of a profile when you click on the profile.</div>
          <br />
          <div className="color-red">2. “Undo hi” will remove the profile from both yours and the recipient’s Hello page. The profile will still appear on your Database page. </div>
          <br />
          <div className="color-blue">3. “Remove” will remove the profile from both yours and the other party’s Hello page. It’s a gentle way of saying no. Your profile will also disappear from each other’s Database page. </div>
          <br />
          <div className="color-red">4. “Contacted” will move the profile down to the contacted section. It will not affect the other party’s Hello page.</div>
          <br />
          <div className="color-blue">5. If a profile you said “hi” to disappears from your “said hi to” section, it means that they have either “removed” your profile (see number 3) or they have “hide” or “delete” their profile.</div>
          <br />
          <div className="color-red">6. (To be implemented next month) If you’ve contacted someone or you recognize a user that should not be on MatchesUp, or if you’d like MatchesUp to take note of a potentially dangerous issue about a profile, please click on “Report.” We rely on our community to keep this space safe!</div>
        </Modal.Body>
        <Modal.Footer className="bg-beach">
          <Button variant="secondary" onClick={handleClosePointersModal}>Close</Button>
        </Modal.Footer>
      </Modal>  
    </div>
  )
}
