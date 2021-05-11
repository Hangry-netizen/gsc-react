import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function FormPage4({ step, prevStep, nextStep, handleChange }) {
  return (
    <div className="create-gsc-form-container">
      <div className="create-gsc-form-header-content">
        <br />
        <p className="color-blue">Remember, your GSCF can fill in/correct answers you aren't sure about when they review this form.</p>
        <div className="color-red">*Required</div>
      </div>
      <hr />
      <div className="create-gsc-form-body color-blue">
        <Form >
          <Form.Group controlId="formBasicReasonsGSCFMakesAGoodPartner">
            <Form.Label className="Essays1743">Why do you think your GSCF would make a good partner? <span className="color-red">*</span></Form.Label>
            <Col sm="12" className="without-left-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('reasons_gscf_makes_a_good_partner')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicGoodMatchForGSCF">
            <Form.Label className="Essays1743">Why do you think your GSCF would make a good partner? <span className="color-red">*</span></Form.Label>
            <Col sm="12" className="without-left-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('good_match_for_gscf')}/>
            </Col>
          </Form.Group>
          <p className="Essays1743">Willingness to relocate/move...</p>
          <Form.Group controlId="formBasicMovingToADifferentTown">
            <Form.Label as="legend" column sm={12} className="without-left-padding Essays1743">
              ...to a different town within the same country
            </Form.Label>
            <Col className="without-left-padding" onChange={handleChange('moving_to_a_different_town')}> 
              <Form.Text>not willing</Form.Text>
              <Form.Check
                type="radio"
                label="1"
                name="moving to a different town"
                value="1"
              />
              <Form.Check
                type="radio"
                label="2"
                name="moving to a different town"
                value="2"
              />
              <Form.Check
                type="radio"
                label="3"
                name="moving to a different town"
                value="3"
              />
              <Form.Check
                type="radio"
                label="4"
                name="moving to a different town"
                value="4"
              />
              <Form.Check
                type="radio"
                label="5"
                name="moving to a different town"
                value="5"
              />
              <Form.Text>very willing</Form.Text>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicMovingToADifferentCountry">
            <Form.Label as="legend" column sm={12} className="without-left-padding Essays1743">
              ...to a different country
            </Form.Label>
            <Col className="without-left-padding" onChange={handleChange('moving_to_a_different_country')}> 
              <Form.Text>not willing</Form.Text>
              <Form.Check
                type="radio"
                label="1"
                name="moving to a different country"
                value="1"
              />
              <Form.Check
                type="radio"
                label="2"
                name="moving to a different country"
                value="2"
              />
              <Form.Check
                type="radio"
                label="3"
                name="moving to a different country"
                value="3"
              />
              <Form.Check
                type="radio"
                label="4"
                name="moving to a different country"
                value="4"
              />
              <Form.Check
                type="radio"
                label="5"
                name="moving to a different country"
                value="5"
              />
              <Form.Text>very willing</Form.Text>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicHasBeenMarriedOrHasKids">
            <Form.Label className="Essays1743">Has he/she ever been married? Or have kids?</Form.Label>
            <Col md="6" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('has_been_married_or_has_kids')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicWantToHaveKids">
            <Form.Label className="Essays1743">Does he/she want to have kids?</Form.Label>
            <Col md="6" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('want_to_have_kids')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicImportantInfoToKnow">
            <Form.Label className="Essays1743">Something else that's particularly important to know about him/her</Form.Label>
            <Col md="6" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('important_info_to_know')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicAlias">
            <Form.Label className="Essays1743">Lastly, give your GSC an alias! <span className="color-red">*</span></Form.Label>
            <Form.Text>In place of a name for the database. We suggest pairing a noun with a verb or adjective (e.g. rising sun/racing robot/ simple flower) or any word or phrase (e.g. unicorn), just not a person's name yea...</Form.Text>
            <Col sm="6" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('alias')}/>
            </Col>
          </Form.Group>
          <br />
          <div className="display-flex">
            <Button id="create-gsc-form-prev-btn" onClick={prevStep}>Back</Button>
            <Button id="create-gsc-form-next-btn" onClick={nextStep}>Submit</Button>
          </div>
          <br />
          <div className="text-align-center">Page {step} of 4</div>
        </Form>
      </div>
    </div>
  )
}
