import React from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CreateGSCForm.css";


export default function FormPage1({ form, nextStep, handleChange, handleGscEmailChange, error }) {
  return (
    <div className="create-gsc-form-container">
      <div className="create-gsc-form-header-content">
        <br />
        <p className="color-blue mobile-text-align-justify">This information will be sent to your Good Single Christian Friend (GSCF) to be reviewed/edited. Remember, they can help you fill in the answers you aren't sure about ;)</p>
        <div className="color-red text-align-left">*Required</div>
      </div>
      <hr />
      <div className="create-gsc-form-body color-blue mobile-text-align-justify text-align-left">
        <div>Information on this page will NOT be shown on the database. Only those your GSCF 'say hi' to will see their name. (Information AFTER this page will be VISIBLE on the database.)</div>
        <br />
        <Form onSubmit={nextStep}>
          <Form.Group controlId="formBasicName">
            <Form.Label className="Essays1743">GSCF's (Good Single Christian Friend) First and Last Name <span className="color-red">*</span></Form.Label>
            <Col className="without-left-right-padding">
              <Form.Control type="name" required onChange={handleChange('name')} value={form.name}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="Essays1743">GSCF's Email Address <span className="color-red">*</span></Form.Label>
            <Form.Text className="mobile-text-align-justify">Please pause here to ask your GSCF for their preferred email address to use for this database, as it cannot be changed later. Your GSCF will need to give consent for participation through their email.</Form.Text>
            <Col className="without-left-right-padding">
              <Form.Control type="email" required onChange={handleGscEmailChange('email')} value={form.email}/>
            </Col>
            {error && <Alert variant="danger" className="color-red font-size-small">{error}</Alert>}
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
                <div className="color-red text-align-left">
                  <span>I have read, understand, and agree to the Terms of Use of MatchesUp and its privacy policy (</span>
                  <Link to="/terms-and-privacy-policy" target="_blank" className="color-red underline">www.matchesup.com/terms-and-privacy-policy</Link>
                  <span>).</span>
                </div>
              }
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <br />
          <div className="display-flex">
            <Link to="/my-good-single-christian-friends">
              <Button variant="secondary">Cancel</Button>
            </Link>
            <Button id="create-gsc-form-next-btn" variant={error ? "secondary" : "danger"} disabled={error} type="submit" value="submit">Next</Button>
          </div>
          <div className="text-align-center">Page {form.step} of 3</div>
        </Form>
      </div>
    </div>
  )
}
