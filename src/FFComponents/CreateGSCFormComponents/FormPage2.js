import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function FormBasicData({ form, prevStep, nextStep, handleChange }) {
  return (
    <div className="create-gsc-form-container">
      <div className="create-gsc-form-header-content mobile-text-align-justify">
        <br />
        <p className="color-blue">All information from this page onwards will be visible on a database to GSCFs of the opposite gender and their Faithful Friend who signed them up.</p>
        <p className="color-blue">These information will be sent to your Good Single Christian Friend (GSCF) to be reviewed/edited. If you don't know the answer, put a "?" for your GSCF to answer later.</p>
        <div className="color-red">*Required</div>
      </div>
      <hr />
      <div className="create-gsc-form-body color-blue text-align-left">
        <Form onSubmit={nextStep}>
          <Form.Group controlId="formBasicGender">
            <Form.Label as="legend" column sm={4} className="without-left-padding Essays1743">
              Gender <span className="color-red">*</span>
            </Form.Label>
            <Col className="without-left-padding" onChange={handleChange('gender')}>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="Male"
                checked={form.gender === "Male" ? "checked" : null}
                required
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="Female"
                checked={form.gender === "Female" ? "checked" : null}
                required
              />
            </Col>
          </Form.Group> 
          <Form.Group controlId="formBasicYearOfBirth">
            <Form.Label className="Essays1743">Year of Birth <span className="color-red">*</span></Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" required onChange={handleChange('year_of_birth')} value={form.year_of_birth === 0 ? "" : form.year_of_birth}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicHeight" >
            <Form.Label className="Essays1743">Height (cm) <span className="color-red">*</span></Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" required onChange={handleChange('height')} value={form.height}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicLanguages">
            <Form.Label className="Essays1743">Languages <span className="color-red">*</span></Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" required onChange={handleChange('languages')} value={form.languages}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicNationality">
            <Form.Label className="Essays1743">Nationality & Ethnicity <span className="color-red">*</span></Form.Label>
            <Form.Text>Nationality = citizenship; Ethnicity = cultural background (e.g. Chinese)</Form.Text>
            <Col className="without-left-padding">
              <Form.Control type="text" required onChange={handleChange('nationality')} value={form.nationality}/>
            </Col>
          </Form.Group>
          <br />
          <p className="Essays1743">CURRENT LOCATION</p>
          <Form.Group controlId="formBasicCity">
            <Form.Label className="Essays1743">City/Town <span className="color-red">*</span></Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" required onChange={handleChange('city')} value={form.city}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicCountry">
            <Form.Label className="Essays1743">Country <span className="color-red">*</span></Form.Label>
            <Col className="without-left-padding">
              <Form.Control type="text" required onChange={handleChange('country')} value={form.country}/>
            </Col>
          </Form.Group>
          <br />
          <div className="display-flex">
            <Button variant="secondary" onClick={prevStep}>Back</Button>
            <Button id="create-gsc-form-next-btn" type="submit" value="submit">Next</Button>
          </div>
          <div className="text-align-center">Page {form.step} of 4</div>
        </Form>
      </div>
    </div>
  )
}
