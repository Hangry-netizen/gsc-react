import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { url } from '../../App';

export default function ReportsModal({ report, showReportsModal, handleCloseReportsModal }) {
  const [remarks, setRemarks] = useState(report.admin_remarks)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (remarks){
      setIsLoading(false)
    }
    else (
      setIsLoading(true)
    )
  }, [remarks])

  const handleUpdateRemarks = (e) => {
    e.preventDefault()
    setIsLoading(true)

    axios({
      method: "POST",
      url: `${url}/reports/update-remarks/${report.id}`,
      data: {
        "admin_remarks": remarks
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert("Successfully updated remarks")
        window.location.reload()
      }
    })
    .catch((error) => {
      console.log(error)
      setError("Failed to update remarks")
    })

    setIsLoading(false)
  };
  return (
    <>
      <Modal
        id="gsc-modal"
        show={showReportsModal}
        onHide={handleCloseReportsModal}
        scrollable={true}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-red">Report No. {report.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach" style={{height:"80vh", overflowY:"auto"}}>
          <div className="color-red">Reported by:</div>
          <div className="color-blue">{report.reported_by_name}</div>
          <div className="color-blue">{report.reported_by_email}</div>
          <br />
          <div className="color-red">Report target:</div>
          <div className="color-blue">{report.report_target_name}</div>
          <div className="color-blue">{report.report_target_email}</div>
          <br />
          <div className="color-red">Reason</div>
          <div className="color-blue">{report.reason}</div>
          <br />
          <Form onSubmit={handleUpdateRemarks} className="bg-blue color-red" style={{padding:"20px", borderRadius:"10px"}}>
            <Form.Group controlId="formUpdateRemarks">
              <Form.Label>Remarks by admin:</Form.Label>
              <Col className="without-left-padding">
                <Form.Control as="textarea" rows={3} type="textarea" required onChange={e => setRemarks(e.target.value)} value={remarks}/>
              </Col>
            </Form.Group>
            <div>
              {error && <Alert className="color-red font-size-small">{error}</Alert>}
            </div>
            <div style={{display:'flex', boxSizing:'border-box', width:'100%', justifyContent:'space-between'}}>
              <Button variant="secondary" onClick={handleCloseReportsModal}>Close</Button>
              <Button variant={isLoading ? "secondary" : "danger"} disabled={isLoading} onClick={handleUpdateRemarks}>Save remarks</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
