import React, { useState } from 'react'
import { url } from '../../App';
import axios from 'axios';
import { Modal, Form, Button, Alert, Col } from 'react-bootstrap';

export default function ResolveModal({ report, setResolved, showResolveModal, handleCloseResolveModal, randomNum, setAnswer, isLoading, setIsLoading }) {
  const [error, setError] = useState("")

  const handleMarkAsResolved = (e) => {
    e.preventDefault()
    setIsLoading(true)

    axios({
      method: "POST",
      url: `${url}/reports/resolve/${report.id}`,
    })
    .then((response) => {
      if (response.data.status === "success") {
        setResolved(true)
        handleCloseResolveModal()
      }
    })
    .catch((error) => {
      console.log(error)
      setError("Failed to mark as resolved")
    })

    setIsLoading(false)
  };


  return (
    <>
      <Modal
        id="gsc-modal"
        show={showResolveModal}
        onHide={handleCloseResolveModal}
        scrollable={true}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-red">Report No. {report.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach">
          <Form onSubmit={handleMarkAsResolved} className="bg-blue color-red" style={{padding:"20px", borderRadius:"10px"}}>
            <Form.Group controlId="formUpdateRemarks">
              <Form.Label>Enter this code to mark this report as resolved: <div className="text-align-center" style={{color:"white"}}>{randomNum}</div></Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control type="text" className="text-align-center" required onChange={e => setAnswer(e.target.value)}/>
              </Col>
            </Form.Group>
            <br />
            <div>
              {error && <Alert className="color-red font-size-small">{error}</Alert>}
            </div>
            <div style={{display:'flex', boxSizing:'border-box', width:'100%', justifyContent:'space-between'}}>
              <Button variant="secondary" onClick={handleCloseResolveModal}>Close</Button>
              <Button variant={isLoading ? "secondary" : "danger"} disabled={isLoading} onClick={handleMarkAsResolved}>Mark as Resolved</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
