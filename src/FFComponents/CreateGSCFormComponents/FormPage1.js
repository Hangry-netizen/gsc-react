import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CreateGSCForm.css";


export default function FormPage1({ step, nextStep, handleChange }) {

  return (
    <div className="create-gsc-form-container">
      <div className="create-gsc-form-header-content">
        <br />
        <p className="color-blue">These information will be sent to your Good Single Christian Friend (GSCF) to be reviewed/edited. Remember, they can help you fill in the answers you aren't sure about ;)</p>
        <div className="color-red">*Required</div>
      </div>
      <hr />
      <div className="create-gsc-form-body color-blue">
        <div style={{fontSize: "19px"}}>Information on this page will NOT be shown on the database. Only those your GSCF LIKED will see their name. (Information AFTER this page will be VISIBLE on the database.)</div>
        <br />
        <Form >
          <Form.Group controlId="formBasicName">
            <Form.Label className="Essays1743">GSCF's (Good Single Christian Friend) Full Name <span className="color-red">*</span></Form.Label>
            <Col sm="6" className="without-left-padding">
              <Form.Control type="name" onChange={handleChange('name')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="Essays1743">GSCF's Email Address <span className="color-red">*</span></Form.Label>
            <Form.Text>Please pause here to ask your GSCF for their preferred email address to use for this database, as it cannot be changed later. Your GSCF will need to give consent for participation through their email.</Form.Text>
            <Col sm="6" className="without-left-padding">
              <Form.Control type="email" onChange={handleChange('email')}/>
            </Col>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Check
              required
              label={
                <div className="color-red">I vouch for this person's character and will take responsibility to follow up with them if anything untoward happens.</div>
              }
              feedback="You must agree before submitting."
            />
            <Form.Check
              required
              label={
                <div className="color-red">
                  <span>I have read, understand, and agree to the Terms of Use of MatchesUp and its privacy policy (</span>
                  <Link to="/terms-and-privacy-policy" target="_blank" className="color-red underline">www.matchesup.com/terms-and-privacy-policy</Link>
                  <span>).</span>
                </div>
              }
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <div className="text-align-right">
            <Button id="create-gsc-form-next-btn" onClick={nextStep}>Next</Button>
          </div>
          <div className="text-align-center">Page {step} of 4</div>
        </Form>
      </div>
    </div>
  )
}
