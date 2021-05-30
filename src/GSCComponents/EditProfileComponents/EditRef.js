import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { url } from '../../App';

export default function EditRef({ reference }) {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    ref_id: reference.ref_id,
    ref_name: reference.ref_name,
    reasons_gscf_makes_a_good_partner: reference.reasons_gscf_makes_a_good_partner,
    good_match_for_gscf: reference.good_match_for_gscf,
    is_approved: reference.is_approved 
  });

  const handleRefChange = input => e => {
    setForm({...form, [input]: e.target.value});
  };

  const handleRefApproval = () => {
    setIsLoading(true)
    axios({
      method: 'POST',
      url: `${url}/references/edit/${reference.ref_id}`,
      data: {
        reasons_gscf_makes_a_good_partner: form.reasons_gscf_makes_a_good_partner,
        good_match_for_gscf: form.good_match_for_gscf,
        is_approved: true 
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert(`You've approved ${reference.ref_name}'s reference!`)
        window.location.reload()
      } else {
        alert("Failed to approved reference")
      }
    })
    .catch(error => {
      console.log(error)
    })
    setIsLoading(false)
  };

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)

    axios({
      method: 'POST',
      url: `${url}/references/edit/${reference.ref_id}`,
      data: {
        reasons_gscf_makes_a_good_partner: form.reasons_gscf_makes_a_good_partner,
        good_match_for_gscf: form.good_match_for_gscf,
        is_approved: form.is_approved
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert(`You've successfully updated ${reference.ref_name}'s reference!`)
        window.location.reload()
      } else {
        alert("Failed to update reference")
      }
    })
    .catch(error => {
      console.log(error)
    })
    setIsLoading(false)
  };

  return (
    <div id="edit-ref" className="color-blue">
      <br />
      {
        reference.reasons_gscf_makes_a_good_partner !== null && reference.good_match_for_gscf !== null
        ?
        <>
          <div className="color-red italic">REFERENCE BY <span className="color-blue">{reference.ref_name}</span></div>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">Why do you think your GSCF would make a good partner?</Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control as="textarea" rows={3} type="text" required onChange={handleRefChange('reasons_gscf_makes_a_good_partner')} value={form.reasons_gscf_makes_a_good_partner} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">What kind of person would make a good match for your GSCF?</Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control as="textarea" rows={3} type="text" required onChange={handleRefChange('good_match_for_gscf')} value={form.good_match_for_gscf} />
              </Col>
            </Form.Group>
            {
              form.is_approved === true
              ?
              <Button variant="danger" disabled={isLoading} type="submit">Submit</Button>
              :
              <Button variant="danger" disabled={isLoading} onClick={handleRefApproval}>Approve</Button>
            }
          </Form>
        </>
        :
        null
      }
    </div>
  )
}
