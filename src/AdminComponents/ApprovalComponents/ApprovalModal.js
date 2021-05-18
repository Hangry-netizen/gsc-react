import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { url } from '../../App';

export default function ApprovalModal({ gsc, showApprovalModal, handleCloseApprovalModal }) {
  const [isLoading, setIsLoading] = useState(false)
  const handleApproval = () => {
    setIsLoading(true)

    axios({
      method: 'POST',
      url: `${url}/gscs/status/${gsc.uuid}`,
      data: {
        is_approved: true,
        is_active: false
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    setIsLoading(false)
  }
  return (
    <>
      <Modal
        id="approval-modal"
        show={showApprovalModal}
        onHide={handleCloseApprovalModal}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-blue">{gsc.alias}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach">
          <div className="color-red">Favorite topics/music/movies/books:</div>
          <div className="color-blue">{gsc.favorite_topics}</div>
          <div className="color-red">Chill out:</div>
          <div className="color-blue">{gsc.chill_activites}</div>
          <div className="color-red">Skills:</div>
          <div className="color-blue">{gsc.skills_and_talents}</div>
          <div className="color-red">Area to develop:</div>
          <div className="color-blue">{gsc.growth_and_development}</div>
          <div className="color-red">Ever been married, has kids:</div>
          <div className="color-blue">{gsc.has_been_married_or_has_kids}</div>
          <div className="color-red">Want kids?:</div>
          <div className="color-blue">{gsc.want_to_have_kids}</div>
          <div className="color-red">Something else that is particularly important:</div>
          <div className="color-blue">{gsc.important_info_to_know}</div>
        </Modal.Body>
        <Modal.Footer className="bg-beach">
          <Button variant="secondary" onClick={handleCloseApprovalModal}>
            Close
          </Button>
          <Button disabled={isLoading} variant="danger" onClick={handleApproval}>
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
