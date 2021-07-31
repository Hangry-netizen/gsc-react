import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function GscRef({ reference }) {
  return (
    <div id="edit-ref" className="color-blue" style={{width:'100%'}}>
      <br />
      <div className="color-red italic">REFERENCE BY <span className="color-blue">{reference.ref_name}</span></div>
      <br />
      <Form>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">Why do you think your GSCF would make a good partner?</Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3} type="text" disabled value={reference.reasons_gscf_makes_a_good_partner} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">What kind of person would make a good match for your GSCF?</Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3} type="text" disabled value={reference.good_match_for_gscf} />
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}
