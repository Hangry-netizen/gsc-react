import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function FormBasicData({ step, prevStep, nextStep, handleChange }) {
  return (
    <div className="create-gsc-form-container">
      <div className="create-gsc-form-header-content">
        <br />
        <p className="color-blue">All information from this page onwards will be visible on a database to GSCFs of the opposite gender and their Faithful Friend who signed them up.</p>
        <p className="color-blue">These information will be sent to your Good Single Christian Friend (GSCF) to be reviewed/edited. If you don't know the answer, put a "?" for your GSCF to answer later.</p>
        <div className="color-red">*Required</div>
      </div>
      <hr />
      <div className="create-gsc-form-body color-blue">
        <Form >
          <Form.Group controlId="formBasicGender">
            <Form.Label as="legend" column sm={4} className="without-left-padding Essays1743">
              Gender <span className="color-red">*</span>
            </Form.Label>
            <Col sm={10} className="without-left-padding" onChange={handleChange('gender')}> 
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="Male"
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="Female"
              />
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicYearOfBirth">
            <Form.Label className="Essays1743">Year of Birth <span className="color-red">*</span></Form.Label>
            <Col sm="2" className="without-left-padding">
              <Form.Control type="integer" onChange={handleChange('year_of_birth')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicHeight">
            <Form.Label className="Essays1743">Height (cm) <span className="color-red">*</span></Form.Label>
            <Col sm="2" className="without-left-padding">
              <Form.Control type="integer" onChange={handleChange('height')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicLanguages">
            <Form.Label className="Essays1743">Languages <span className="color-red">*</span></Form.Label>
            <Col sm="6" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('languages')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicNationality">
            <Form.Label className="Essays1743">Nationality & Ethnicity <span className="color-red">*</span></Form.Label>
            <Form.Text>Nationality = citizenship; Ethnicity = cultural background (e.g. Chinese)</Form.Text>
            <Col sm="6" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('nationality')}/>
            </Col>
          </Form.Group>
          <br />
          <p className="Essays1743">CURRENT LOCATION</p>
          <Form.Group controlId="formBasicCity">
            <Form.Label className="Essays1743">City/Town <span className="color-red">*</span></Form.Label>
            <Col sm="6" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('city')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicCountry">
            <Form.Label className="Essays1743">Country <span className="color-red">*</span></Form.Label>
            <Col sm="6" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('country')}/>
            </Col>
          </Form.Group>
          <br />
          <div className="display-flex">
            <Button id="create-gsc-form-prev-btn" onClick={prevStep}>Back</Button>
            <Button id="create-gsc-form-next-btn" onClick={nextStep}>Next</Button>
          </div>
          <br />
          <div className="text-align-center">Page {step} of 4</div>
        </Form>
      </div>
    </div>
  )
}
