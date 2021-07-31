import React from 'react';
import { Form, Modal, Button, Col, Row } from 'react-bootstrap';
import DescriptiveWords from '../../utils/Descriptors.png';
import SpiritualGifts from '../../utils/SpiritualGifts.png';
import GscRef from './GscRef';

export default function GscProfile({ currentGsc, showGscProfile, handleCloseGscProfile, references }) {
  return (
    <>
      <Modal
        id="gsc-profile"
        show={showGscProfile}
        onHide={handleCloseGscProfile}
        scrollable={true}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-blue italic">{currentGsc.name}'s Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach text-align-left" style={{height:"80vh", overflowY:"auto"}}>
          <div className="italic color-red">PERSONAL DETAILS</div>
          <div className="color-red font-size-small">Required *</div>
          <br />
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="4" className="Essays1743 text-align-left">Full Name <span className="color-red">*</span></Form.Label>
              <Col sm="8">
                <Form.Control disabled type="name"  value={currentGsc.name}/>
                <Form.Text className="color-red font-size-x-small text-align-left">Only those your GSC 'say hi' to and those who 'say hi' to you will see your GSC's name.</Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="4" className="Essays1743 text-align-left">Alias <span className="color-red">*</span></Form.Label>
              <Col sm="8">
                <Form.Control disabled type="text" value={currentGsc.alias}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="4" className="Essays1743 text-align-left without-right-padding">Year of birth <span className="color-red">*</span></Form.Label>
              <Col sm="8">
                <Form.Control disabled type="text" value={currentGsc.year_of_birth}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="4" className="Essays1743 text-align-left">Height (cm) <span className="color-red">*</span></Form.Label>
              <Col sm="8">
                <Form.Control disabled type="text" value={currentGsc.height}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="4" className="Essays1743 text-align-left">Languages <span className="color-red">*</span></Form.Label>
              <Col sm="8">
                <Form.Control disabled type="text" value={currentGsc.languages}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm="4" className="Essays1743 overflow-wrap text-align-left" >Nationality & Ethnicity <span className="color-red">*</span></Form.Label>
              <Col sm="8">
                <Form.Control disabled type="text" value={currentGsc.nationality}/>
              </Col>
            </Form.Group>
            <div className="italic color-red">CURRENT LOCATION</div>
            <br />
            <Form.Group as={Row}>
              <Form.Label column sm="4" className="Essays1743 text-align-left">City/Town <span className="color-red">*</span></Form.Label>
              <Col sm="8">
                <Form.Control disabled type="text" value={currentGsc.city}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="4" className="Essays1743 text-align-left">Country <span className="color-red">*</span></Form.Label>
              <Col sm="8">
                <Form.Control disabled type="text" value={currentGsc.country}/>
              </Col>
            </Form.Group>
            <br />
            <p className="Essays1743 text-align-left">Willingness to relocate/move... <span className="color-red">*</span></p>
            <Form.Group className="without-left-right-padding Essays1743">
              <Form.Label>...to a different town within the same country:<span>{currentGsc.moving_to_a_different_town}%</span></Form.Label>
              <Form.Control disabled type="range" value={currentGsc.moving_to_a_different_town}/>
              <div className="display-flex">
                <div>unwilling</div>
                <div>willing</div>
              </div>
            </Form.Group>
            <Form.Group className="without-left-right-padding Essays1743">
              <Form.Label>...to a different country:<span>{currentGsc.moving_to_a_different_country}%</span></Form.Label>
              <Form.Control disabled type="range" value={currentGsc.moving_to_a_different_country}/>
              <div className="display-flex">
                <div>unwilling</div>
                <div>willing</div>
              </div>
            </Form.Group>
            <br />
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">(Optional) Provide a link (url) or your name to be visible on the database if you do not wish to be anonymous</Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control disabled type="text" value={currentGsc.social_media_profile_link}/>
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">Preferred Contact Method <span className="color-red">*</span></Form.Label>
              <Form.Text className="margin-top-zero italic mobile-text-align-justify">E.g., Whatsapp / Telegram / Signal / Email / FB Messenger. (This info will only be sent to those you 'say hi' to for them to contact you, it will not be displayed on the monthly database sent to users of the opposite gender.)</Form.Text>
              <Col className="without-left-right-padding">
                <Form.Control disabled type="text" value={currentGsc.preferred_contact_method}/>
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">Contact Information <span className="color-red">*</span></Form.Label>
              <Form.Text className="margin-top-zero italic mobile-text-align-justify">Number of the above contact method (include country code) / email address / profile link (This info will only be sent to those you 'say hi' to for them to contact you, it will not be displayed on the monthly database sent to users of the opposite gender.)</Form.Text>
              <Col className="without-left-right-padding">
                <Form.Control disabled type="text" value={currentGsc.contact_info}/>
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="without-left-right-padding Essays1743">
              How often do you want to receive email notifications giving you the link to those who 'say hi' to you? <span className="color-red">*</span>
              </Form.Label>
              <Col className="without-left-right-padding" value={currentGsc.notification_frequency}>
                <Form.Check
                  type="radio"
                  label="The same day"
                  name="gender"
                  value="same_day"
                  checked={currentGsc.notification_frequency === "same_day" ? "checked" : null}
                />
                <Form.Check
                  type="radio"
                  label="Weekly summary"
                  name="gender"
                  value="weekly"
                  checked={currentGsc.notification_frequency === "weekly" ? "checked" : null}
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
                <Form.Control disabled as="textarea" rows={3} type="text" value={currentGsc.descriptive_words}/>
              </Col>
            </Form.Group>
            <br />
            <div>Personality/Temperament</div>
            <div className="font-size-small italic">Feel free to fill in what you are familiar with!</div>
            <br />
            <Form.Group as={Row}>
              <Form.Label column sm="4" className="Essays1743 text-align-left">MBTI</Form.Label>
              <Col sm="8">
                <Form.Control disabled type="text" value={currentGsc.mbti}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="4" className="Essays1743 text-align-left">Enneagram</Form.Label>
              <Col sm="8">
                <Form.Control disabled type="text" value={currentGsc.enneagram}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="4" className="Essays1743 text-align-left">DISC</Form.Label>
              <Col sm="8">
                <Form.Control disabled type="text" value={currentGsc.disc}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="overflow-wrap align-items-center text-align-left">
              <Form.Label column sm="4" className="Essays1743">StrengthsFinder / Others</Form.Label>
              <Col sm="8">
                <Form.Control disabled as="textarea" rows={3} type="text" value={currentGsc.strengths_finder}/>
              </Col>
            </Form.Group>
            <br />
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743 margin-bottom-zero">What are some of his/her favorite topics of discussion?</Form.Label>
              <Form.Text className="margin-top-zero italic">Include favorite music/movies/books if there are any notable ones!</Form.Text>
              <Col className="without-left-right-padding">
                <Form.Control disabled as="textarea" rows={3} type="text" value={currentGsc.favorite_topics} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743 margin-bottom-zero">What does he/she do to chill out?</Form.Label>
              <Form.Text className="margin-top-zero italic">Netflix, outdoors, books sleep, eat with friends etc.</Form.Text>
              <Col className="without-left-right-padding">
                <Form.Control disabled as="textarea" rows={3} type="text" value={currentGsc.chill_activities} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">What work does he/she do (paid and/or unpaid)?</Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control disabled as="textarea" rows={3} type="text" value={currentGsc.do} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">What are some of his/her skills & talents?</Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control disabled as="textarea" rows={3} type="text" value={currentGsc.skills_and_talents} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">What areas you would like to see him/her grow and develop in?</Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control disabled as="textarea" rows={3}  type="text" value={currentGsc.growth_and_development} />
              </Col>
            </Form.Group>
            <br />
            <img src={SpiritualGifts} id="spiritual-gifts-img" alt="Spiritual Gifts" style={{width:"100%"}}/>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">Select 4-8 spiritual gifts/characteristics that are demonstrated in his/her life (please type in the space below) <span className="color-red">*</span></Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control disabled as="textarea" rows={3} type="text" value={currentGsc.spiritual_gifts} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743 margin-bottom-zero">How would you describe his/her spiritual maturity<span className="color-red">*</span></Form.Label>
              <Form.Text className="margin-top-zero italic text-align-left">e.g. baby Christian, average faith, hungry for more, sold out</Form.Text>
              <Col className="without-left-right-padding">
                <Form.Control disabled type="text" value={currentGsc.spiritual_maturity} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743 margin-bottom-zero">Church background <span className="color-red">*</span></Form.Label>
              <Form.Text className="margin-top-zero italic">Denomination involved in (e.g. Baptist, Catholic, Methodist, Anglican, Charismatic, Pentecostal, HOP, YWAM, OMF)</Form.Text>
              <Col className="without-left-right-padding">
                <Form.Control disabled type="text" value={currentGsc.church_background} />
              </Col>
            </Form.Group>
            <br />
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">Has he/she ever been married? Or have kids?</Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control disabled type="text" value={currentGsc.has_been_married_or_has_kids} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">Does he/she want to have kids?</Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control disabled type="text" value={currentGsc.want_to_have_kids} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">Why do you think your GSCF would make a good partner? <span className="color-red">*</span></Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control disabled as="textarea" rows={3} type="text" value={currentGsc.reasons_gscf_makes_a_good_partner} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">What kind of person would make a good match for your GSCF? <span className="color-red">*</span></Form.Label>
              <Col className="without-left-right-padding">
                <Form.Control disabled as="textarea" rows={3} type="text" value={currentGsc.good_match_for_gscf} />
              </Col>
            </Form.Group>
            <Form.Group className="text-align-left">
              <Form.Label className="Essays1743">Something else that's particularly important to know about your GSCF</Form.Label>
              <Form.Text></Form.Text>
              <Col className="without-left-right-padding">
                <Form.Control disabled type="text" value={currentGsc.important_info_to_know} />
              </Col>
            </Form.Group>
          </Form>
          {
            references.map((reference, i) => {
              console.log("mapping references")
              if (reference.is_approved && reference.reasons_gscf_makes_a_good_partner && reference.good_match_for_gscf) {
                return (
                  <GscRef key={i} reference={reference} />
                )
              }
              else {
                return null
              }
            })
          }
          <br />
          <div className="text-align-left">
            <Button variant="secondary" onClick={handleCloseGscProfile} style={{marginRight:"20px"}}>Close</Button>
          </div>
          <br />
        </Modal.Body>
      </Modal>
    </>
  )
}
