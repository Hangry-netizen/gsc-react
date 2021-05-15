import React from 'react';
import { Form, Col, Button, Alert, Row } from 'react-bootstrap';

export default function FormPage4({ step, submitForm, handleChange, isLoading, error }) {

  return (
    <div className="create-gsc-form-container">
      <div className="create-gsc-form-header-content mobile-text-align-justify">
        <br />
        <p className="color-blue">Remember, your GSCF can fill in/correct answers you aren't sure about when they review this form.</p>
        <div className="color-red">*Required</div>
      </div>
      <hr />
      <div className="create-gsc-form-body color-blue text-align-left">
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
          <p className="Essays1743">Willingness to relocate/move...</p>
          <Form.Group controlId="formBasicMovingToADifferentTown" className="without-left-padding Essays1743">
            <Form.Label>...to a different town within the same country</Form.Label>
            <Form.Control type="range" onChange={handleChange('moving_to_a_different_town')}/>
            <div className="display-flex">
              <div>unwilling</div>
              <div>willing</div>
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicMovingToADifferentCountry" className="without-left-padding Essays1743">
            <Form.Label>...to a different town within the same country</Form.Label>
            <Form.Control type="range" onChange={handleChange('moving_to_a_different_country')}/>
            <div className="display-flex">
              <div>unwilling</div>
              <div>willing</div>
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicHasBeenMarriedOrHasKids">
            <Form.Label className="Essays1743">Has he/she ever been married? Or have kids?</Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('has_been_married_or_has_kids')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicWantToHaveKids">
            <Form.Label className="Essays1743">Does he/she want to have kids?</Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('want_to_have_kids')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicImportantInfoToKnow">
            <Form.Label className="Essays1743">Something else that's particularly important to know about him/her</Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('important_info_to_know')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicAlias">
            <Form.Label className="Essays1743">Lastly, give your GSC an alias! <span className="color-red">*</span></Form.Label>
            <Form.Text className="text-align-left">In place of a name for the database. We suggest pairing a noun with a verb or adjective (e.g. rising sun/racing robot/ simple flower) or any word or phrase (e.g. unicorn), just not a person's name yea...</Form.Text>
            <Col className="without-left-padding">
              <Form.Control type="text" required onChange={handleChange('alias')}/>
            </Col>
          </Form.Group>
          <br />
          <div>
            {error && <Alert className="color-red font-size-small" variant="danger">{error}. Please check with your GSCF. For futher inquires or assistance, don't hesitate to contact your friends at MatchesUp by emailing to matchesup@gmail.com!</Alert>}
          </div>
          <div className="display-flex">
            <div>Page {step} of 4</div>
            <Button id="create-gsc-form-next-btn" disabled={isLoading} type="submit" value="submit">Submit</Button>
          </div>
          <br />
        </Form>
      </div>
    </div>
  )
}
