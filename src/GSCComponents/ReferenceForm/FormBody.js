import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import GSCProfilePage from '../../pages/GSCProfilePage';

export default function FormBody({ gsc, submitForm, handleChange, isLoading }) {
  return (
      <div className="reference-form-container">
        <div className="reference-form-header-content text-align-left">
          <br />
          <div className="color-blue">Thank you for agreeing to answer some questions on your Good Single Christian Friend (GSCF): <span className="color-red">{gsc.name}</span>. It's always helpful to get several perspectives!</div>
          <br />
          <div className="color-red">*Required</div>
        </div>
        <hr />
        <div className="reference-form-body color-blue mobile-text-align-justify text-align-left">
          <Form onSubmit={submitForm}>
            <Form.Group controlId="formBasicReasonsGSCFMakesAGoodPartner">
              <Form.Label className="Essays1743">Why do you think your GSCF would make a good partner? <span className="color-red">*</span></Form.Label>
              <Col className="without-left-padding">
                <Form.Control as="textarea" required type="text" onChange={handleChange('reasons_gscf_makes_a_good_partner')}/>
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicGoodMatchForGSCF">
              <Form.Label className="Essays1743">What kind of person would make a good match for your GSCF? <span className="color-red">*</span></Form.Label>
              <Col className="without-left-padding">
                <Form.Control as="textarea" required type="text" onChange={handleChange('good_match_for_gscf')}/>
              </Col>
            </Form.Group>
            <br />
            <div>
              <Button id="reference-form-next-btn" disabled={isLoading} type="submit" value="submit">Submit</Button>
            </div>
          </Form>
        </div>
      </div>
  )
}
