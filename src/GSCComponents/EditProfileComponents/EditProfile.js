import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import DescriptiveWords from '../../utils/Descriptors.png';
import SpiritualGifts from '../../utils/SpiritualGifts.png';

export default function EditProfile({ form, submitEdit, handleChange, isLoading }) {
  return (
    <div id="edit-profile" className="color-blue">
      <Form onSubmit={submitEdit}>
        <div className="italic color-red">PERSONAL DETAILS</div>
        <br />
        <div className="color-red font-size-small">Required *</div>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm="4" className="Essays1743 text-align-left">Full Name <span className="color-red">*</span></Form.Label>
          <Col sm="8">
            <Form.Control type="name"  required onChange={handleChange('name')} value={form.name}/>
            <Form.Text className="color-red font-size-x-small text-align-left">Only those you 'say hi' to and those who 'say hi' to you will see your name.</Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4" className="Essays1743 text-align-left">Alias <span className="color-red">*</span></Form.Label>
          <Col sm="8">
            <Form.Control type="text" required onChange={handleChange('alias')} value={form.alias}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4" className="Essays1743 text-align-left without-right-padding">Year of birth <span className="color-red">*</span></Form.Label>
          <Col sm="8">
            <Form.Control type="text" required onChange={handleChange('year_of_birth')} value={form.year_of_birth}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4" className="Essays1743 text-align-left">Height (cm) <span className="color-red">*</span></Form.Label>
          <Col sm="8">
            <Form.Control type="text" required onChange={handleChange('height')} value={form.height}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4" className="Essays1743 text-align-left">Languages <span className="color-red">*</span></Form.Label>
          <Col sm="8">
            <Form.Control type="text" required onChange={handleChange('languages')} value={form.languages}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="align-items-center">
          <Form.Label column sm="4" className="Essays1743 overflow-wrap text-align-left" >Nationality & Ethnicity <span className="color-red">*</span></Form.Label>
          <Col sm="8">
            <Form.Control type="text" required onChange={handleChange('nationality')} value={form.nationality}/>
          </Col>
        </Form.Group>
        <div className="italic color-red">CURRENT LOCATION</div>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm="4" className="Essays1743 text-align-left">City/Town <span className="color-red">*</span></Form.Label>
          <Col sm="8">
            <Form.Control type="text" required onChange={handleChange('city')} value={form.city}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4" className="Essays1743 text-align-left">Country <span className="color-red">*</span></Form.Label>
          <Col sm="8">
            <Form.Control type="text" required onChange={handleChange('country')} value={form.country}/>
          </Col>
        </Form.Group>
        <br />
        <p className="Essays1743 text-align-left">Willingness to relocate/move... <span className="color-red">*</span></p>
        <Form.Group className="without-left-right-padding Essays1743">
          <Form.Label>...to a different town within the same country:<span>{form.moving_to_a_different_town}%</span></Form.Label>
          <Form.Control type="range" required onChange={handleChange('moving_to_a_different_town')} value={form.moving_to_a_different_town}/>
          <div className="display-flex">
            <div>unwilling</div>
            <div>willing</div>
          </div>
        </Form.Group>
        <Form.Group className="without-left-right-padding Essays1743">
          <Form.Label>...to a different country:<span>{form.moving_to_a_different_country}%</span></Form.Label>
          <Form.Control type="range" onChange={handleChange('moving_to_a_different_country')} value={form.moving_to_a_different_country}/>
          <div className="display-flex">
            <div>unwilling</div>
            <div>willing</div>
          </div>
        </Form.Group>
        <br />
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">(Optional) Provide a link (url) or your name to be visible on the database if you do not wish to be anonymous</Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control type="text" onChange={handleChange('social_media_profile_link')} value={form.social_media_profile_link}/>
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">Preferred Contact Method <span className="color-red">*</span></Form.Label>
          <Form.Text className="margin-top-zero italic mobile-text-align-justify">E.g., Whatsapp / Telegram / Signal / Email / FB Messenger. (This info will only be sent to those you 'say hi' to for them to contact you, it will not be displayed on the monthly database sent to users of the opposite gender.)</Form.Text>
          <Col className="without-left-right-padding">
            <Form.Control type="text" required onChange={handleChange('preferred_contact_method')} value={form.preferred_contact_method}/>
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">Contact Information <span className="color-red">*</span></Form.Label>
          <Form.Text className="margin-top-zero italic mobile-text-align-justify">Number of the above contact method (include country code) / email address / profile link (This info will only be sent to those you 'say hi' to for them to contact you, it will not be displayed on the monthly database sent to users of the opposite gender.)</Form.Text>
          <Col className="without-left-right-padding">
            <Form.Control type="text" required onChange={handleChange('contact_info')} value={form.contact_info}/>
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="without-left-right-padding Essays1743">
          How often do you want to receive email notifications giving you the link to those who 'say hi' to you? <span className="color-red">*</span>
          </Form.Label>
          <Col className="without-left-right-padding" onChange={handleChange('notification_frequency')} value={form.notification_frequency}>
            <Form.Check
              type="radio"
              label="The same day"
              name="gender"
              value="same_day"
              checked={form.notification_frequency === "same_day" ? "checked" : null}
              required
            />
            <Form.Check
              type="radio"
              label="Weekly summary"
              name="gender"
              value="weekly"
              checked={form.notification_frequency === "weekly" ? "checked" : null}
              required
            />
          </Col>
        </Form.Group>
        <br />
        <div className="italic color-red">GETTING TO KNOW ME</div>
        <div className="italic color-red">from my FF's perspective...</div>
        <br />
        <img src={DescriptiveWords} id="descriptive-words-img" alt="Descriptive Words" style={{width:"100%"}} />
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">Pick 5-7 words that best describe your GSCF (please type in the space below) <span className="color-red">*</span></Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3} required type="text" onChange={handleChange('descriptive_words')} value={form.descriptive_words}/>
          </Col>
        </Form.Group>
        <br />
        <div>Personality/Temperament</div>
        <div className="font-size-small italic">Feel free to fill in what you are familiar with!</div>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm="4" className="Essays1743 text-align-left">MBTI</Form.Label>
          <Col sm="8">
            <Form.Control type="text" onChange={handleChange('mbti')} value={form.mbti}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4" className="Essays1743 text-align-left">Enneagram</Form.Label>
          <Col sm="8">
            <Form.Control type="text" onChange={handleChange('enneagram')} value={form.enneagram}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4" className="Essays1743 text-align-left">DISC</Form.Label>
          <Col sm="8">
            <Form.Control type="text" onChange={handleChange('disc')} value={form.disc}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="overflow-wrap align-items-center text-align-left">
          <Form.Label column sm="4" className="Essays1743">StrengthsFinder / Others</Form.Label>
          <Col sm="8">
            <Form.Control as="textarea" rows={3} type="text" onChange={handleChange('strengths_finder')} value={form.strengths_finder}/>
          </Col>
        </Form.Group>
        <br />
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743 margin-bottom-zero">What are some of his/her favorite topics of discussion?</Form.Label>
          <Form.Text className="margin-top-zero italic">Include favorite music/movies/books if there are any notable ones!</Form.Text>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3} type="text" onChange={handleChange('favorite_topics')} value={form.favorite_topics} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743 margin-bottom-zero">What does he/she do to chill out?</Form.Label>
          <Form.Text className="margin-top-zero italic">Netflix, outdoors, books sleep, eat with friends etc.</Form.Text>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3} type="text" onChange={handleChange('chill_activities')} value={form.chill_activities} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">What work does he/she do (paid and/or unpaid)?</Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3} type="text" onChange={handleChange('do')} value={form.do} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">What are some of his/her skills & talents?</Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3} type="text" onChange={handleChange('skills_and_talents')} value={form.skills_and_talents} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">What areas you would like to see him/her grow and develop in?</Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3}  type="text" onChange={handleChange('growth_and_development')} value={form.growth_and_development} />
          </Col>
        </Form.Group>
        <br />
        <img src={SpiritualGifts} id="spiritual-gifts-img" alt="Spiritual Gifts" style={{width:"100%"}}/>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">Select 4-8 spiritual gifts/characteristics that are demonstrated in his/her life (please type in the space below) <span className="color-red">*</span></Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3} type="text" required onChange={handleChange('spiritual_gifts')} value={form.spiritual_gifts} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743 margin-bottom-zero">How would you describe his/her spiritual maturity<span className="color-red">*</span></Form.Label>
          <Form.Text className="margin-top-zero italic text-align-left">e.g. baby Christian, average faith, hungry for more, sold out</Form.Text>
          <Col className="without-left-right-padding">
            <Form.Control type="text" required onChange={handleChange('spiritual_maturity')} value={form.spiritual_maturity} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743 margin-bottom-zero">Church background <span className="color-red">*</span></Form.Label>
          <Form.Text className="margin-top-zero italic">Denomination involved in (e.g. Baptist, Catholic, Methodist, Anglican, Charismatic, Pentecostal, HOP, YWAM, OMF)</Form.Text>
          <Col className="without-left-right-padding">
            <Form.Control type="text" required onChange={handleChange('church_background')} value={form.church_background} />
          </Col>
        </Form.Group>
        <br />
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">Has he/she ever been married? Or have kids?</Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control type="text" onChange={handleChange('has_been_married_or_has_kids')} value={form.has_been_married_or_has_kids} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">Does he/she want to have kids?</Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control type="text" onChange={handleChange('want_to_have_kids')} value={form.want_to_have_kids} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">Why do you think your GSCF would make a good partner? <span className="color-red">*</span></Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3} type="text" required onChange={handleChange('reasons_gscf_makes_a_good_partner')} value={form.reasons_gscf_makes_a_good_partner} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">What kind of person would make a good match for your GSCF? <span className="color-red">*</span></Form.Label>
          <Col className="without-left-right-padding">
            <Form.Control as="textarea" rows={3} type="text" required onChange={handleChange('good_match_for_gscf')} value={form.good_match_for_gscf} />
          </Col>
        </Form.Group>
        <Form.Group className="text-align-left">
          <Form.Label className="Essays1743">Something else that's particularly important to know about your GSCF</Form.Label>
          <Form.Text></Form.Text>
          <Col className="without-left-right-padding">
            <Form.Control type="text" onChange={handleChange('important_info_to_know')} value={form.important_info_to_know} />
          </Col>
        </Form.Group>
        <br />
        <Button variant="danger" type="submit" disabled={isLoading}>Submit</Button>
      </Form>
    </div>
  )
}
