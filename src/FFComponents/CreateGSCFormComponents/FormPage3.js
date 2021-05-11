import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function FormPage3({ step, prevStep, nextStep, handleChange, handleListChange }) {
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
          <Form.Group controlId="formBasicDescriptiveWords">
            <Form.Label as="legend" column sm={10} className="without-left-padding Essays1743">
              Pick 5-7 words that best describe your GSCF <span className="color-red">*</span>
            </Form.Label>
            <Row sm={5} className="without-left-padding" onChange={handleListChange('descriptive_words')}> 
              <Form.Check
                type="checkbox"
                label="Silly"
                name="descriptive words"
                value="Silly"
              />
              <Form.Check
                type="checkbox"
                label="Witty"
                name="descriptive words"
                value="Witty"
              />
              <Form.Check
                type="checkbox"
                label="Hard-working"
                name="descriptive words"
                value="Hard-working"
              />
              <Form.Check
                type="checkbox"
                label="Independent"
                name="descriptive words"
                value="Independent"
              />
              <Form.Check
                type="checkbox"
                label="Energetic"
                name="descriptive words"
                value="Energetic"
              />
              <Form.Check
                type="checkbox"
                label="Funny"
                name="descriptive words"
                value="Funny"
              />
              <Form.Check
                type="checkbox"
                label="Quirky"
                name="descriptive words"
                value="Quirky"
              />
              <Form.Check
                type="checkbox"
                label="Adaptable"
                name="descriptive words"
                value="Adaptable"
              />
              <Form.Check
                type="checkbox"
                label="Intelligent"
                name="descriptive words"
                value="Intelligent"
              />
              <Form.Check
                type="checkbox"
                label="Knowledgeable"
                name="descriptive words"
                value="Knowledgeable"
              /><Form.Check
                type="checkbox"
                label="Passionate"
                name="descriptive words"
                value="Passionate"
              />
              <Form.Check
                type="checkbox"
                label="Adventurous"
                name="descriptive words"
                value="Adventurous"
              />
              <Form.Check
                type="checkbox"
                label="Cheerful"
                name="descriptive words"
                value="Cheerful"
              />
              <Form.Check
                type="checkbox"
                label="Wise"
                name="descriptive words"
                value="Wise"
              />
              <Form.Check
                type="checkbox"
                label="Relaxed"
                name="descriptive words"
                value="Relaxed"
              />
              <Form.Check
                type="checkbox"
                label="Friendly"
                name="descriptive words"
                value="Friendly"
              />
              <Form.Check
                type="checkbox"
                label="Accepting"
                name="descriptive words"
                value="Accepting"
              />
              <Form.Check
                type="checkbox"
                label="Determined"
                name="descriptive words"
                value="Determined"
              />
              <Form.Check
                type="checkbox"
                label="Disciplined"
                name="descriptive words"
                value="Disciplined"
              />
              <Form.Check
                type="checkbox"
                label="Idealistic"
                name="descriptive words"
                value="Idealistic"
              />
              <Form.Check
                type="checkbox"
                label="Brave"
                name="descriptive words"
                value="Brave"
              />
              <Form.Check
                type="checkbox"
                label="Calm"
                name="descriptive words"
                value="Calm"
              />
              <Form.Check
                type="checkbox"
                label="Logical"
                name="descriptive words"
                value="Logical"
              />
              <Form.Check
                type="checkbox"
                label="Caring"
                name="descriptive words"
                value="Caring"
              />
              <Form.Check
                type="checkbox"
                label="Gentle"
                name="descriptive words"
                value="Gentle"
              />
              <Form.Check
                type="checkbox"
                label="Dependable"
                name="descriptive words"
                value="Dependable"
              />
              <Form.Check
                type="checkbox"
                label="Confident"
                name="descriptive words"
                value="Confident"
              />
              <Form.Check
                type="checkbox"
                label="Giving"
                name="descriptive words"
                value="Giving"
              />
              <Form.Check
                type="checkbox"
                label="Helpful"
                name="descriptive words"
                value="Helpful"
              />
              <Form.Check
                type="checkbox"
                label="Kind"
                name="descriptive words"
                value="Kind"
              />
              <Form.Check
                type="checkbox"
                label="Creative"
                name="descriptive words"
                value="Creative"
              />
              <Form.Check
                type="checkbox"
                label="Warm"
                name="descriptive words"
                value="Warm"
              />
              <Form.Check
                type="checkbox"
                label="Observant"
                name="descriptive words"
                value="Observant"
              />
              <Form.Check
                type="checkbox"
                label="Loving"
                name="descriptive words"
                value="Loving"
              />
              <Form.Check
                type="checkbox"
                label="Reflective"
                name="descriptive words"
                value="Reflective"
              />
              <Form.Check
                type="checkbox"
                label="Shy"
                name="descriptive words"
                value="Shy"
              />
              <Form.Check
                type="checkbox"
                label="Sensible"
                name="descriptive words"
                value="Sensible"
              />
              <Form.Check
                type="checkbox"
                label="Organized"
                name="descriptive words"
                value="Organized"
              />
              <Form.Check
                type="checkbox"
                label="Patient"
                name="descriptive words"
                value="Patient"
              />
              <Form.Check
                type="checkbox"
                label="Flexible"
                name="descriptive words"
                value="Flexible"
              />
            </Row>
          </Form.Group>
          <br />
          <div className="Essays1743">PERSONALITY/TEMPERAMENT</div>
          <div>Feel free to fill in what are familiar with!</div>
          <br />
          <Form.Group controlId="formBasicMBTI">
            <Form.Label className="Essays1743">MBTI</Form.Label>
            <Col sm="4" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('mbti')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicEnneagram">
            <Form.Label className="Essays1743">Enneagram</Form.Label>
            <Col sm="4" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('enneagram')}/>
            </Col>
          </Form.Group>
          
          <Form.Group controlId="formBasicDISC">
            <Form.Label className="Essays1743">DISC</Form.Label>
            <Col sm="4" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('disc')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicStrengthsFinder">
            <Form.Label className="Essays1743">StrengthsFinder/Others</Form.Label>
            <Col sm="8" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('strengths_finder')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicFavoriteTopics">
            <Form.Label className="Essays1743">What are some of his/her favorite topics of discussion?</Form.Label>
            <Form.Text>Include favorite music/movies/books if there are any notable ones!</Form.Text>
            <Col sm="8" className="without-left-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('favorite_topics')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicChillActivities">
            <Form.Label className="Essays1743">What does he/she do to chill out?</Form.Label>
            <Form.Text>Netflix, outdoors, books, sleep, eat with friends etc.</Form.Text>
            <Col sm="8" className="without-left-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('chill_activities')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicDo">
            <Form.Label className="Essays1743">What does he/she do (paid and/or unpaid)?</Form.Label>
            <Col sm="8" className="without-left-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('do')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicSkillsAndTalents">
            <Form.Label className="Essays1743">What are some of his/her skills & talents?</Form.Label>
            <Col sm="8" className="without-left-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('skills_and_talents')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicGrowthAndDevelopment">
            <Form.Label className="Essays1743">What areas would you like to see him/her grow and develop in?</Form.Label>
            <Col sm="8" className="without-left-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('growth_and_development')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicSpiritualGifts">
            <Form.Label as="legend" column sm={12} className="without-left-padding Essays1743">
              Select 4-8 spiritual gifts/characteristics that are demonstrated in his/her life <span className="color-red">*</span>
            </Form.Label>
            <Row sm={3} className="without-left-padding" onChange={handleChange('spiritual_gifts')}> 
              <Form.Check
                type="checkbox"
                label="Devotion to the word"
                name="descriptive words"
                value="Devotion to the word"
              />
              <Form.Check
                type="checkbox"
                label="Intercessory prayer"
                name="descriptive words"
                value="Intercessory prayer"
              />
              <Form.Check
                type="checkbox"
                label="Worship"
                name="descriptive words"
                value="Worship"
              />
              <Form.Check
                type="checkbox"
                label="Quiet time with God"
                name="descriptive words"
                value="Quiet time with God"
              />
              <Form.Check
                type="checkbox"
                label="Giving wise counsel"
                name="descriptive words"
                value="Giving wise counsel"
              />
              <Form.Check
                type="checkbox"
                label="Discipling others"
                name="descriptive words"
                value="Discipling others"
              />
              <Form.Check
                type="checkbox"
                label="Mercy/Compassion"
                name="descriptive words"
                value="Mercy/Compassion"
              />
              <Form.Check
                type="checkbox"
                label="Healing/Deliverance"
                name="descriptive words"
                value="Healing/Deliverance"
              />
              <Form.Check
                type="checkbox"
                label="Teaching/Writing"
                name="descriptive words"
                value="Teaching/Writing"
              />
              <Form.Check
                type="checkbox"
                label="Generosity with finances"
                name="descriptive words"
                value="Generosity with finances"
              />
              <Form.Check
                type="checkbox"
                label="Passion for evangelism"
                name="descriptive words"
                value="Passion for evangelism"
              />
              <Form.Check
                type="checkbox"
                label="Serving cheerfully"
                name="descriptive words"
                value="Serving cheerfully"
              />
              <Form.Check
                type="checkbox"
                label="Prophetic discernment"
                name="descriptive words"
                value="Prophetic discernment"
              />
              <Form.Check
                type="checkbox"
                label="Shepherding/Pastoring"
                name="descriptive words"
                value="Shepherding/Pastoring"
              />
              <Form.Check
                type="checkbox"
                label="Serving children/families"
                name="descriptive words"
                value="Serving children/families"
              />
              <Form.Check
                type="checkbox"
                label="Exhortation"
                name="descriptive words"
                value="Exhortation"
              />
              <Form.Check
                type="checkbox"
                label="Preaching the word"
                name="descriptive words"
                value="Preaching the word"
              />
              <Form.Check
                type="checkbox"
                label="Cross cultural ministry"
                name="descriptive words"
                value="Cross cultural ministry"
              />
              <Form.Check
                type="checkbox"
                label="Hospitality"
                name="descriptive words"
                value="Hospitality"
              />
              <Form.Check
                type="checkbox"
                label="Advocating justice"
                name="descriptive words"
                value="Advocating justice"
              />
            </Row>
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicSpiritualMaturity">
            <Form.Label className="Essays1743">How would you describe his/her spiritual maturity? <span className="color-red">*</span></Form.Label>
            <Form.Text>e.g. baby Christian, average faith, hungry for more, sold out</Form.Text>
            <Col sm="8" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('spiritual_maturity')}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicChurchBackground">
            <Form.Label className="Essays1743">Church background <span className="color-red">*</span></Form.Label>
            <Form.Text>Denomination involed in (e.g. Baptist, Catholic, Methodist, Anglican, Charismatic, Pentecostal, HOP, YWAM, OMF)</Form.Text>
            <Col sm="8" className="without-left-padding">
              <Form.Control type="text" onChange={handleChange('church_background')}/>
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
