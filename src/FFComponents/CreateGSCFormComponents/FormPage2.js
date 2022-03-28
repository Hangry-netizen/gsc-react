import React from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';

export default function FormPage2({ form, prevStep, step3NextStep, handleChange, handleListChange, otherDescWords, setOtherDescWords, otherSpiritualGifts, setOtherSpiritualGifts, error }) {
  return (
    <div className="create-gsc-form-container">
      <div className="create-gsc-form-header-content mobile-text-align-justify">
        <br />
        <p className="color-blue">These information will be sent to your Good Single Christian Friend (GSCF) to be reviewed/edited. If you don't know the answer, put a "?" for your GSCF to answer later.</p>
        <p className="color-blue">Remember NOT to use your friend’s name in your description as they may want to remain anonymous.</p>
        <div className="color-red">*Required</div>
      </div>
      <hr />
      <div className="create-gsc-form-body color-blue text-align-left">
        <Form onSubmit={step3NextStep}>
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
          <Form.Group>
            <Form.Label className="without-left-right-padding Essays1743">
              Pick 5-7 words that best describe your GSCF <span className="color-red">*</span>
            </Form.Label>
            <Row sm="5" className="desktop-row">
              <Button value="Silly" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Silly") ? "danger" : "secondary"}>Silly</Button>
              <Button value="Witty" onClick={handleListChange('descriptive_words')}  style={{margin:"5px"}} variant={form.descriptive_words.includes("Witty") ? "danger" : "secondary"}>Witty</Button>
              <Button value="Hard-working" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Hard-working") ? "danger" : "secondary"}>Hard-working</Button>
              <Button value="Independent" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Independent") ? "danger" : "secondary"}>Independent</Button>
              <Button value="Energetic" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Energetic") ? "danger" : "secondary"}>Energetic</Button>
              <Button value="Funny" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Funny") ? "danger" : "secondary"}>Funny</Button>
              <Button value="Quirky" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Quirky") ? "danger" : "secondary"}>Quirky</Button>
              <Button value="Adaptable" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Adaptable") ? "danger" : "secondary"}>Adaptable</Button>
              <Button value="Intelligent" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Intelligent") ? "danger" : "secondary"}>Intelligent</Button>
              <Button value="Knowledgeable" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Knowledgeable") ? "danger" : "secondary"}>Knowledgeable</Button>
              <Button value="Passionate" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Passionate") ? "danger" : "secondary"}>Passionate</Button>
              <Button value="Adventurous" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Adventurous") ? "danger" : "secondary"}>Adventurous</Button>
              <Button value="Cheerful" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Cheerful") ? "danger" : "secondary"}>Cheerful</Button>
              <Button value="Wise" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Wise") ? "danger" : "secondary"}>Wise</Button>
              <Button value="Relaxed" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Relaxed") ? "danger" : "secondary"}>Relaxed</Button>
              <Button value="Friendly" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Friendly") ? "danger" : "secondary"}>Friendly</Button>
              <Button value="Accepting" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Accepting") ? "danger" : "secondary"}>Accepting</Button>
              <Button value="Determined" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Determined") ? "danger" : "secondary"}>Determined</Button>
              <Button value="Disciplined" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Disciplined") ? "danger" : "secondary"}>Disciplined</Button>
              <Button value="Idealistic" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Idealistic") ? "danger" : "secondary"}>Idealistic</Button>
              <Button value="Brave" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Brave") ? "danger" : "secondary"}>Brave</Button>
              <Button value="Calm" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Calm") ? "danger" : "secondary"}>Calm</Button>
              <Button value="Logical" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Logical") ? "danger" : "secondary"}>Logical</Button>
              <Button value="Caring" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Caring") ? "danger" : "secondary"}>Caring</Button>
              <Button value="Gentle" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Gentle") ? "danger" : "secondary"}>Gentle</Button>
              <Button value="Dependable" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Dependable") ? "danger" : "secondary"}>Dependable</Button>
              <Button value="Confident" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Confident") ? "danger" : "secondary"}>Confident</Button>
              <Button value="Giving" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Giving") ? "danger" : "secondary"}>Giving</Button>
              <Button value="Helpful" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Helpful") ? "danger" : "secondary"}>Helpful</Button>
              <Button value="Kind" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Kind") ? "danger" : "secondary"}>Kind</Button>
              <Button value="Creative" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Creative") ? "danger" : "secondary"}>Creative</Button>
              <Button value="Warm" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Warm") ? "danger" : "secondary"}>Warm</Button>
              <Button value="Observant" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Observant") ? "danger" : "secondary"}>Observant</Button>
              <Button value="Loving" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Loving") ? "danger" : "secondary"}>Loving</Button>
              <Button value="Reflective" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Reflective") ? "danger" : "secondary"}>Reflective</Button>
              <Button value="Shy" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Shy") ? "danger" : "secondary"}>Shy</Button>
              <Button value="Sensible" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Sensible") ? "danger" : "secondary"}>Sensible</Button>
              <Button value="Organized" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Organized") ? "danger" : "secondary"}>Organized</Button>
              <Button value="Patient" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Patient") ? "danger" : "secondary"}>Patient</Button>
              <Button value="Flexible" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Flexible") ? "danger" : "secondary"}>Flexible</Button>
            </Row>
            <Row className="mobile-col">
              <Button value="Silly" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Silly") ? "danger" : "secondary"}>Silly</Button>
              <Button value="Witty" onClick={handleListChange('descriptive_words')}  style={{margin:"5px"}} variant={form.descriptive_words.includes("Witty") ? "danger" : "secondary"}>Witty</Button>
              <Button value="Hard-working" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Hard-working") ? "danger" : "secondary"}>Hard-working</Button>
              <Button value="Independent" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Independent") ? "danger" : "secondary"}>Independent</Button>
              <Button value="Energetic" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Energetic") ? "danger" : "secondary"}>Energetic</Button>
              <Button value="Funny" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Funny") ? "danger" : "secondary"}>Funny</Button>
              <Button value="Quirky" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Quirky") ? "danger" : "secondary"}>Quirky</Button>
              <Button value="Adaptable" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Adaptable") ? "danger" : "secondary"}>Adaptable</Button>
              <Button value="Intelligent" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Intelligent") ? "danger" : "secondary"}>Intelligent</Button>
              <Button value="Knowledgeable" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Knowledgeable") ? "danger" : "secondary"}>Knowledgeable</Button>
              <Button value="Passionate" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Passionate") ? "danger" : "secondary"}>Passionate</Button>
              <Button value="Adventurous" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Adventurous") ? "danger" : "secondary"}>Adventurous</Button>
              <Button value="Cheerful" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Cheerful") ? "danger" : "secondary"}>Cheerful</Button>
              <Button value="Wise" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Wise") ? "danger" : "secondary"}>Wise</Button>
              <Button value="Relaxed" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Relaxed") ? "danger" : "secondary"}>Relaxed</Button>
              <Button value="Friendly" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Friendly") ? "danger" : "secondary"}>Friendly</Button>
              <Button value="Accepting" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Accepting") ? "danger" : "secondary"}>Accepting</Button>
              <Button value="Determined" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Determined") ? "danger" : "secondary"}>Determined</Button>
              <Button value="Disciplined" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Disciplined") ? "danger" : "secondary"}>Disciplined</Button>
              <Button value="Idealistic" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Idealistic") ? "danger" : "secondary"}>Idealistic</Button>
              <Button value="Brave" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Brave") ? "danger" : "secondary"}>Brave</Button>
              <Button value="Calm" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Calm") ? "danger" : "secondary"}>Calm</Button>
              <Button value="Logical" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Logical") ? "danger" : "secondary"}>Logical</Button>
              <Button value="Caring" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Caring") ? "danger" : "secondary"}>Caring</Button>
              <Button value="Gentle" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Gentle") ? "danger" : "secondary"}>Gentle</Button>
              <Button value="Dependable" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Dependable") ? "danger" : "secondary"}>Dependable</Button>
              <Button value="Confident" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Confident") ? "danger" : "secondary"}>Confident</Button>
              <Button value="Giving" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Giving") ? "danger" : "secondary"}>Giving</Button>
              <Button value="Helpful" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Helpful") ? "danger" : "secondary"}>Helpful</Button>
              <Button value="Kind" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Kind") ? "danger" : "secondary"}>Kind</Button>
              <Button value="Creative" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Creative") ? "danger" : "secondary"}>Creative</Button>
              <Button value="Warm" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Warm") ? "danger" : "secondary"}>Warm</Button>
              <Button value="Observant" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Observant") ? "danger" : "secondary"}>Observant</Button>
              <Button value="Loving" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Loving") ? "danger" : "secondary"}>Loving</Button>
              <Button value="Reflective" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Reflective") ? "danger" : "secondary"}>Reflective</Button>
              <Button value="Shy" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Shy") ? "danger" : "secondary"}>Shy</Button>
              <Button value="Sensible" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Sensible") ? "danger" : "secondary"}>Sensible</Button>
              <Button value="Organized" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Organized") ? "danger" : "secondary"}>Organized</Button>
              <Button value="Patient" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Patient") ? "danger" : "secondary"}>Patient</Button>
              <Button value="Flexible" onClick={handleListChange('descriptive_words')} style={{margin:"5px"}} variant={form.descriptive_words.includes("Flexible") ? "danger" : "secondary"}>Flexible</Button>
            </Row>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label className="Essays1743">Others:</Form.Label>
            <Col>
              <Form.Control type="text" onChange={e => setOtherDescWords(e.target.value)} value={otherDescWords}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicFavoriteTopics">
            <Form.Label className="Essays1743">What are some of his/her favorite topics of discussion?</Form.Label>
            <Form.Text>Include favorite music/movies/books if there are any notable ones!</Form.Text>
            <Col className="without-left-right-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('favorite_topics')} value={form.favorite_topics}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicChillActivities">
            <Form.Label className="Essays1743">What does he/she do to chill out?</Form.Label>
            <Form.Text>Netflix, outdoors, books, sleep, eat with friends etc.</Form.Text>
            <Col className="without-left-right-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('chill_activities')} value={form.chill_activities}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicDo">
            <Form.Label className="Essays1743">What kind of paid or unpaid work does (he/she) do?</Form.Label>
            <Col className="without-left-right-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('do')} value={form.do}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicSkillsAndTalents">
            <Form.Label className="Essays1743">What are some of his/her skills & talents?</Form.Label>
            <Col className="without-left-right-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('skills_and_talents')} value={form.skills_and_talents}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicGrowthAndDevelopment">
            <Form.Label className="Essays1743">What areas would you like to see him/her grow and develop in?</Form.Label>
            <Col className="without-left-right-padding">
              <Form.Control as="textarea" type="text" onChange={handleChange('growth_and_development')} value={form.growth_and_development}/>
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicSpiritualGifts">
            <Form.Label as="legend" column sm={12} className="without-left-padding Essays1743">
              Select 4-8 spiritual gifts/characteristics that are demonstrated in his/her life <span className="color-red">*</span>
            </Form.Label>
            <Row sm={3} className="desktop-row" onChange={handleListChange('spiritual_gifts')}> 
              <Button value="Devotion to the word" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Devotion to the word") ? "danger" : "secondary"}>Devotion to the word</Button>
              <Button value="Intercessory prayer" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Intercessory prayer") ? "danger" : "secondary"}>Intercessory prayer</Button>
              <Button value="Worship" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Worship") ? "danger" : "secondary"}>Worship</Button>
              <Button value="Quiet time with God" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Quiet time with God") ? "danger" : "secondary"}>Quiet time with God</Button>
              <Button value="Giving wise counsel" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Giving wise counsel") ? "danger" : "secondary"}>Giving wise counsel</Button>
              <Button value="Discipling others" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Discipling others") ? "danger" : "secondary"}>Discipling others</Button>
              <Button value="Mercy/Compassion" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Mercy/Compassion") ? "danger" : "secondary"}>Mercy/Compassion</Button>
              <Button value="Healing/Deliverance" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Healing/Deliverance") ? "danger" : "secondary"}>Healing/Deliverance</Button>
              <Button value="Teaching/Writing" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Teaching/Writing") ? "danger" : "secondary"}>Teaching/Writing</Button>
              <Button value="Generosity with finances" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Generosity with finances") ? "danger" : "secondary"}>Generosity with finances</Button>
              <Button value="Passion for evangelism" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Passion for evangelism") ? "danger" : "secondary"}>Passion for evangelism</Button>
              <Button value="Serving cheerfully" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Serving cheerfully") ? "danger" : "secondary"}>Serving cheerfully</Button>
              <Button value="Prophetic discernment" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Prophetic discernment") ? "danger" : "secondary"}>Prophetic discernment</Button>
              <Button value="Shepherding/Pastoring" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Shepherding/Pastoring") ? "danger" : "secondary"}>Shepherding/Pastoring</Button>
              <Button value="Serving children/families" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Serving children/families") ? "danger" : "secondary"}>Serving children/families</Button>
              <Button value="Exhortation" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Exhortation") ? "danger" : "secondary"}>Exhortation</Button>
              <Button value="Preaching the word" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Preaching the word") ? "danger" : "secondary"}>Preaching the word</Button>
              <Button value="Cross cultural ministry" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Cross cultural ministry") ? "danger" : "secondary"}>Cross cultural ministry</Button>
              <Button value="Hospitality" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Hospitality") ? "danger" : "secondary"}>Hospitality</Button>
              <Button value="Advocating justice" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Advocating justice") ? "danger" : "secondary"}>Advocating justice</Button>
            </Row>
            <Row sm={1} className="mobile-col" onChange={handleListChange('spiritual_gifts')}> 
              <Button value="Devotion to the word" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Devotion to the word") ? "danger" : "secondary"}>Devotion to the word</Button>
              <Button value="Intercessory prayer" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Intercessory prayer") ? "danger" : "secondary"}>Intercessory prayer</Button>
              <Button value="Worship" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Worship") ? "danger" : "secondary"}>Worship</Button>
              <Button value="Quiet time with God" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Quiet time with God") ? "danger" : "secondary"}>Quiet time with God</Button>
              <Button value="Giving wise counsel" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Giving wise counsel") ? "danger" : "secondary"}>Giving wise counsel</Button>
              <Button value="Discipling others" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Discipling others") ? "danger" : "secondary"}>Discipling others</Button>
              <Button value="Mercy/Compassion" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Mercy/Compassion") ? "danger" : "secondary"}>Mercy/Compassion</Button>
              <Button value="Healing/Deliverance" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Healing/Deliverance") ? "danger" : "secondary"}>Healing/Deliverance</Button>
              <Button value="Teaching/Writing" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Teaching/Writing") ? "danger" : "secondary"}>Teaching/Writing</Button>
              <Button value="Generosity with finances" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Generosity with finances") ? "danger" : "secondary"}>Generosity with finances</Button>
              <Button value="Passion for evangelism" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Passion for evangelism") ? "danger" : "secondary"}>Passion for evangelism</Button>
              <Button value="Serving cheerfully" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Serving cheerfully") ? "danger" : "secondary"}>Serving cheerfully</Button>
              <Button value="Prophetic discernment" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Prophetic discernment") ? "danger" : "secondary"}>Prophetic discernment</Button>
              <Button value="Shepherding/Pastoring" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Shepherding/Pastoring") ? "danger" : "secondary"}>Shepherding/Pastoring</Button>
              <Button value="Serving children/families" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Serving children/families") ? "danger" : "secondary"}>Serving children/families</Button>
              <Button value="Exhortation" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Exhortation") ? "danger" : "secondary"}>Exhortation</Button>
              <Button value="Preaching the word" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Preaching the word") ? "danger" : "secondary"}>Preaching the word</Button>
              <Button value="Cross cultural ministry" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Cross cultural ministry") ? "danger" : "secondary"}>Cross cultural ministry</Button>
              <Button value="Hospitality" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Hospitality") ? "danger" : "secondary"}>Hospitality</Button>
              <Button value="Advocating justice" onClick={handleListChange('spiritual_gifts')} style={{margin:"5px"}} variant={form.spiritual_gifts.includes("Advocating justice") ? "danger" : "secondary"}>Advocating justice</Button>
            </Row>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" className="Essays1743">Others:</Form.Label>
            <Col>
              <Form.Control type="text" onChange={e => setOtherSpiritualGifts(e.target.value)} value={otherSpiritualGifts}/>
            </Col>
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicSpiritualMaturity">
            <Form.Label className="Essays1743">How would you describe his/her spiritual maturity? <span className="color-red">*</span></Form.Label>
            <Form.Text>e.g. baby Christian, average faith, hungry for more, sold out</Form.Text>
            <Col className="without-left-right-padding">
              <Form.Control type="text" required onChange={handleChange('spiritual_maturity')} value={form.spiritual_maturity}/>
            </Col>
          </Form.Group>
          {error && <Alert className="color-red font-size-small">{error}</Alert>}
          <br />
          <div className="display-flex">
            <Button variant="secondary" onClick={prevStep}>Back</Button>
            <Button id="create-gsc-form-next-btn" type="submit" value="submit">Next</Button>
          </div>
          <div className="text-align-center">Page {form.step} of 3</div>
        </Form>
      </div>
    </div>
  )
}
