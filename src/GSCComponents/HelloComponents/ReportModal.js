import React, { useState, useEffect } from 'react';
import { Alert, Modal, Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import { url } from "../../App";

export default function ReportModal({ gsc, currentGsc, showReportModal, handleCloseReportModal, handleShowReportedModal }) {
  const [isLoading, setIsLoading] = useState(true)
  const [reason, setReason] = useState("")
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (answer.trim().toLowerCase() === gsc.name.trim().toLowerCase() && reason !== ""){
      setIsLoading(false)
    }
    else (
      setIsLoading(true)
    )
  }, [answer, gsc.name, reason])

  const handleReport = (e) => {
    e.preventDefault()
    setIsLoading(true)

    axios({
      method: "POST",
      url: `${url}/reports/`,
      data: {
        "reported_by": currentGsc.id,
        "report_target": gsc.id,
        "reason": reason
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        handleCloseReportModal()
        handleShowReportedModal()
        window.setTimeout(function(){window.location.reload()},5000)
      }
    })
    .catch((error) => {
      console.log(error)
      setError("Failed to submit report")
    })

    setIsLoading(false)
  };
  
  return (
    <>
      <Modal
        id="gsc-modal"
        show={showReportModal}
        onHide={handleCloseReportModal}
        scrollable={true}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-red">Report {gsc.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach" style={{overflowY:"auto"}}>
          <Form onSubmit={handleReport} className="bg-blue color-red" style={{padding:"20px", borderRadius:"10px"}}>
            <Form.Group controlId="formReportReason">
              <Form.Label>Reason for report:</Form.Label>
              <Col className="without-left-padding">
                <Form.Control as="textarea" rows={6} type="textarea" required onChange={e => setReason(e.target.value)} value={reason}/>
              </Col>
            </Form.Group>
            <br />
            <div>
              <label className="color-red font-size-small">I would like to report:</label>
              <input style={{border:"none", paddingLeft:"10px",paddingRight:"10px", width:"60%", marginLeft: "10px", borderRadius:"10px" }} type="text" onChange={e => setAnswer(e.target.value)} placeholder={gsc.name}/>
            </div>
            <div>
              {error && <Alert className="color-red font-size-small">{error}</Alert>}
            </div>
            <br />
            <div style={{display:'flex', boxSizing:'border-box', width:'100%', justifyContent:'space-between'}}>
              <Button variant="secondary" onClick={handleCloseReportModal}>Close</Button>
              <Button variant={isLoading ? "secondary" : "danger"} disabled={isLoading} onClick={handleReport}>Report</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
