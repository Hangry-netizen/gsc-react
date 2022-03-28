import React, { useState, useEffect } from 'react';
import { Alert, Modal, Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import { url } from "../../App";

export default function ReportModal({ gsc, currentGsc, showReportModal, handleCloseReportModal, handleShowReportedModal }) {
  const [isLoading, setIsLoading] = useState(true)
  const [reason, setReason] = useState("")
  const [recommendedAction, setRecommendedAction] = useState("")
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (answer.trim().toLowerCase() === gsc.name.trim().toLowerCase() && reason !== "" && recommendedAction !== ""){
      setIsLoading(false)
    }
    else (
      setIsLoading(true)
    )
  }, [answer, gsc.name, reason, recommendedAction])

  const handleReport = (e) => {
    e.preventDefault()
    setIsLoading(true)

    axios({
      method: "POST",
      url: `${url}/reports/`,
      data: {
        "reported_by": currentGsc.id,
        "report_target": gsc.id,
        "reason": reason,
        "recommended_action": recommendedAction
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

  console.log(recommendedAction)
  
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
            <div className="text-align-left">
              <label className="color-red">I would like to report:</label>
              <input type="text" style={{border:"none", paddingLeft:"10px",paddingRight:"10px", width:"49%", marginLeft: "10px", borderRadius:"10px" }} onChange={e => setAnswer(e.target.value)} placeholder={gsc.name}/>
            </div>
            <br />
            <Form.Group controlId="formReportReason">
              <Form.Label className="text-align-left">What concerns would you like to report about this person?</Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control as="textarea" rows={6} type="textarea" required onChange={e => setReason(e.target.value)} value={reason}/>
              </Col>
            </Form.Group>
            <br />
            <>
              <Form.Control as="select" required onChange={e => setRecommendedAction(e.target.value)}>
                <option value="">Recommended action (please select one to proceed)</option>
                <option value="Keep an eye on them / suspicious activity">Keep an eye on them / suspicious activity</option>
                <option value="Send them a warning">Send them a warning</option>
                <option value="Terminate immediately">Terminate immediately</option>
              </Form.Control>
            </>
            <br />
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
