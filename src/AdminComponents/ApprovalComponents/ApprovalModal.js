import React, { useState } from 'react';
import { Modal, Button, Form, Alert, Col } from 'react-bootstrap';
import axios from 'axios';
import { url } from '../../App';

export default function ApprovalModal({ gsc, showGscModal, handleCloseGscModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [reasons, setReasons] = useState("");
  const [error, setError] = useState("")

  const handleApproval = () => {
    setIsLoading(true)

    axios({
      method: 'POST',
      url: `${url}/gscs/approve/${gsc.uuid}`,
      data: {
        is_approved: true
      }
    })
    .then(response => {
      if (response.data.status === 'success') {
        handleCloseGscModal();
        alert(`You have approved ${gsc.name}!`)
        window.location.reload()
      }
    })
    .catch(error => {
      setError(error)
    })
    setIsLoading(false)
  }

  const handleRejection = () => {
    setIsLoading(true)

    axios({
      method: 'POST',
      url: `${url}/gscs/reject/${gsc.uuid}`,
      data: {
        is_rejected: true,
        reasons: reasons
      }
    })
    .then(response => {
      if (response.data.status === 'success') {
        handleCloseGscModal();
        alert(`Successfully requested more info from ${gsc.name}!`)
        window.location.reload()
      }
    })
    .catch(error => {
      setError(error)
    })
    setIsLoading(false)
  }

  const handleArchive = () => {
    setIsLoading(true)

    axios({ 
      method: 'POST',
      url: `${url}/gscs/admin-archive/toggle/${gsc.uuid}`
    })
    .then(response => {
      if (response.data.status === 'success') {
        handleCloseGscModal();
        alert(`Successfully archived ${gsc.name}'s profile!`)
        window.location.reload()
      }
    })
    .catch(error => {
      setError(error)
    })
    setIsLoading(false)
  }
  
  return (
    <>
      <Modal
        id="gsc-modal"
        show={showGscModal}
        onHide={handleCloseGscModal}
        scrollable={true}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-blue">{gsc.alias}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach" style={{height:"80%", overflowY:"auto"}}>
          <div className="color-red">Favorite topics/music/movies/books:</div>
          <div className="color-blue">{gsc.favorite_topics}</div>
          <div className="color-red">Paid/unpaid work:</div>
          <div className="color-blue">{gsc.do}</div>
          <div className="color-red">Chill out activities:</div>
          <div className="color-blue">{gsc.chill_activities}</div>
          <div className="color-red">Skills and talents:</div>
          <div className="color-blue">{gsc.skills_and_talents}</div>
          <div className="color-red">Area to develop:</div>
          <div className="color-blue">{gsc.growth_and_development}</div>
          <div className="color-red">Ever been married, has kids:</div>
          <div className="color-blue">{gsc.has_been_married_or_has_kids}</div>
          <div className="color-red">Want kids?:</div>
          <div className="color-blue">{gsc.want_to_have_kids}</div>
          <div className="color-red">Something else that is particularly important:</div>
          <div className="color-blue">{gsc.important_info_to_know}</div>
          <br />
          {
            gsc.is_rejected
            ?
            <>
            <div className="color-red">Requesting for more info:</div>
            <div className="color-blue">{gsc.rejected_reasons}</div>
            </>
            :
            null
          }
        </Modal.Body>
        <Modal.Footer className="bg-beach" style={{display:"block"}}>
          <Form>
            <Form.Group className="text-align-left">
              <Form.Label className="color-red margin-bottom-zero">Requests before approval:</Form.Label>
              <Form.Text className="margin-top-zero italic">Requests will be emailed to GSC to edit their profile</Form.Text>
              <Col className="without-left-right-padding">
                <Form.Control as="textarea" rows={4} type="text" value={reasons} onChange={e => setReasons(e.target.value)} />
              </Col>
            </Form.Group>
          </Form>
          <div>
            {error && <Alert className="color-red font-size-small">{error}</Alert>}
          </div>
          <div className="display-flex">
          <Button variant="secondary" onClick={handleArchive}>Archive profile</Button>
          {
            reasons
            ?
            <Button disabled={isLoading} variant="danger" onClick={handleRejection}>Request more info from {gsc.name}</Button>
            :
            <Button disabled={isLoading} variant="primary" onClick={handleApproval}>Approve {gsc.name}</Button>
          }
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}
