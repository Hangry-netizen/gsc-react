import React from 'react';
import { Form, Col, Button, Alert } from 'react-bootstrap';

export default function FormPage3({ form, prevStep, submitForm, handleChange, isLoading, error }) {

  return (
    <div className="create-gsc-form-container">
      <div className="create-gsc-form-header-content mobile-text-align-justify">
        <br />
        <p className="color-blue">Remember, your GSCF can fill in/correct answers you aren't sure about when they review this form.</p>
        <p className="color-blue">Remember NOT to use your friend’s name in your description as they may want to remain anonymous.</p>
        <div className="color-red">*Required</div>
      </div>
      <hr />
      <div className="create-gsc-form-body color-blue text-align-left">
        <Form onSubmit={submitForm}>
          <Form.Group controlId="formBasicReasonsGSCFMakesAGoodPartner">
            <Form.Label className="Essays1743">Why do you think your GSCF would make a good partner? <span className="color-red">*</span></Form.Label>
            <Col className="without-left-padding">
              <Form.Control as="textarea" required type="text" onChange={handleChange('reasons_gscf_makes_a_good_partner')} value={form.reasons_gscf_makes_a_good_partner}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicGoodMatchForGSCF">
            <Form.Label className="Essays1743">What kind of person would make a good match for your GSCF? <span className="color-red">*</span></Form.Label>
            <Col className="without-left-padding">
              <Form.Control as="textarea" required type="text" onChange={handleChange('good_match_for_gscf')} value={form.good_match_for_gscf}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicHasBeenMarriedOrHasKids">
            <Form.Label className="Essays1743">Has he/she ever been married? Or have kids?</Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('has_been_married_or_has_kids')} value={form.has_been_married_or_has_kids}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicWantToHaveKids">
            <Form.Label className="Essays1743">Does he/she want to have kids?</Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('want_to_have_kids')} value={form.want_to_have_kids}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicImportantInfoToKnow">
            <Form.Label className="Essays1743">Something else that's particularly important to know about him/her</Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('important_info_to_know')} value={form.important_info_to_know}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicAlias">
            <Form.Label className="Essays1743">Lastly, give your GSC an alias! <span className="color-red">*</span></Form.Label>
            <Form.Text className="text-align-left">In place of a name for the database. We suggest pairing a noun with a verb or adjective (e.g. rising sun/racing robot/ simple flower) or any word or phrase (e.g. unicorn), just not a person's name yea...</Form.Text>
            <Col className="without-left-padding">
              <Form.Control type="text" required onChange={handleChange('alias')} value={form.alias}/>
            </Col>
          </Form.Group>
          <br />
          <div>
            {error && <Alert className="color-red font-size-small" variant="danger">{error}</Alert>}
          </div>
          <div className="display-flex">
            <Button variant="secondary" onClick={prevStep}>Back</Button>
            <Button id="create-gsc-form-next-btn" disabled={isLoading} type="submit" value="submit">Submit</Button>
          </div>
          <br />
          <div className="text-align-center">Page {form.step} of 3</div>
        </Form>
      </div>
    </div>
  )
}
