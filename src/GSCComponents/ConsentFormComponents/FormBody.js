import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function FormBody({ isLoading, handleChange, submitForm }) {
  return (
    <div>
      <div className="consent-form-container">
        <div className="consent-form-header-content text-align-left">
          <br />
          <div className="color-red">*Required</div>
        </div>
        <hr />
        <div className="consent-form-body color-blue mobile-text-align-justify text-align-left">
          <Form onSubmit={submitForm}>
            <Form.Group>
              <Form.Check
                required
                label={
                  <div className="color-red text-align-left">
                    <span>I have read, understand, and agree to the Terms of Use of MatchesUp and its privacy policy (</span>
                    <Link to="/terms-and-privacy-policy" target="_blank" className="color-red underline">www.matchesup.com/terms-and-privacy-policy</Link>
                    <span>).</span>
                  </div>
                }
                feedback="You must agree before submitting."
              />
              <Form.Check
                required
                label={
                  <div className="color-red">I hereby give consent to my Faithful Friend (name and email address as per email) to submit a PROFILE for me on the MatchesUp database, and view the profiles of the opposite gender for discussion purposes.</div>
                }
                feedback="You must agree before submitting."
              />
              <Form.Check
                required
                label={
                  <div className="color-red">I understand that my MatchesUp profile is created in collaboration with: myself, my Faithful Friend, and up to two other friends (optionally invited by myself). I understand that I can view and edit all of this information before it is published by clicking on the link in the email sent to me when my profile is approved.</div>
                }
                feedback="You must agree before submitting."
              />
              <Form.Check
                required
                label={
                  <div className="color-red">I understand that GSCs of the opposite gender who have signed up for this service, and their Faithful Friends, will be able to view all of this information (except for my real name and email address which will only be sent to the GSCs if I choose to “say hi” them, or if I respond to their “say hi” on my profile). I understand that I can hide or remove my profile at any time for any reason.</div>
                }
                feedback="You must agree before submitting."
              />
              <Form.Check
                required
                label={
                  <div className="color-red">I understand that if someone of the opposite gender submits a complaint about me, that my FF may be notified to follow up with me, and my MatchesUp account may be terminated, if deemed necessary.</div>
                }
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Form.Group controlId="formBasicSelectAnonymousity">
              <Form.Label className="without-left-padding Essays1743">
                Because we have chosen not to upload pictures and name as a part of the available biodata, would you like to link an identifier to be visible on the database or remain anonymous?<span className="color-red">*</span>
              </Form.Label>
              <Form.Text>It could be a link to your social media account, or a LinkedIn profile or your blog, or your picture(s) in a GDrive link, or revealing your real name etc.</Form.Text>
              <Col className="without-left-padding">
                <Form.Check
                  type="radio"
                  label="No, I want to remain anonymous."
                  name="gender"
                  value="anonymous"
                  required
                />
                <Form.Check
                  type="radio"
                  label="Yes."
                  name="gender"
                  value="not anonymous"
                  required
                />
              </Col>
            </Form.Group> 
            <Form.Group controlId="formBasicNotAnonymous">
              <Form.Label className="Essays1743">If you selected "Yes" above, please provide a link (url) or your name to be visible on the database</Form.Label>
              <Col className="without-left-padding">
                <Form.Control type="text" onChange={handleChange('social_media_profile_link')}/>
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicPreferredContactMethod">
              <Form.Label className="Essays1743">Preferred Contact Method <span className="color-red">*</span></Form.Label>
              <Form.Text className="mobile-text-align-justify">E.g., Whatsapp / Telegram / Signal / Email / FB Messenger. (This info will only be sent to those you 'say hi' to for them to contact you, it will not be displayed on the monthly database sent to users of the opposite gender.)</Form.Text>
              <Col className="without-left-padding">
                <Form.Control type="text" required onChange={handleChange('preferred_contact_method')}/>
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicContactInformation">
              <Form.Label className="Essays1743">Contact Information <span className="color-red">*</span></Form.Label>
              <Form.Text className="mobile-text-align-justify">Number of the above contact method (include country code) / email address / profile link (This info will only be sent to those you 'say hi' to for them to contact you, it will not be displayed on the monthly database sent to users of the opposite gender.)</Form.Text>
              <Col className="without-left-padding">
                <Form.Control type="text" required onChange={handleChange('contact_info')}/>
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicSelectAnonymousity">
              <Form.Label className="without-left-padding Essays1743">
              How often do you want to receive email notifications giving you the link to those who 'say hi' to you? <span className="color-red">*</span>
              </Form.Label>
              <Col className="without-left-padding" onChange={handleChange('notification_frequency')}>
                <Form.Check
                  type="radio"
                  label="The same day"
                  name="gender"
                  value="same_day"
                  required
                />
                <Form.Check
                  type="radio"
                  label="Weekly summary"
                  name="gender"
                  value="weekly"
                  required
                />
              </Col>
            </Form.Group> 
            <Form.Group controlId="formBasicWhatIsImportantToMe">
              <Form.Label className="Essays1743">Now’s the time for you to tell your potential matches: What's important to you, whether in life or in a partner?</Form.Label>
              <Form.Text className="mobile-text-align-justify">Optional, but imagine how helpful it'd be to hear directly from you! This can be as macro as sharing your passion or calling, or as micro as wanting a partner who likes Chinese food and Netflix. I’m sure there’s a lot on your wish list, but try and list some essentials to give them a gist of what’s most important to you personally (max. 1500 characters).</Form.Text>
              <Col className="without-left-padding">
                <Form.Control type="textarea" onChange={handleChange('what_is_important_to_me')}/>
              </Col>
            </Form.Group>
            <br />
            <p className="Essays1743">REFERENCES (optional)</p>
            <p>It's always helpful to get several perspectives. Can you recommend two other friends who would be able and willing to answer two questions about you? (This part is optional.)</p>
            <p>They will only need to answer two questions:</p>
            <div>1. What qualities within him/her would make them a good partner? </div>
            <div>2. What are one or two qualities that would make a good match for him/her?</div>
            <br />
            <Form.Group controlId="formBasicFirstReferralName">
              <Form.Label className="Essays1743">Name 1</Form.Label>
              <Col className="without-left-padding">
                <Form.Control type="name" onChange={handleChange('first_referral_name')}/>
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicFirstReferralEmail">
              <Form.Label className="Essays1743">Email 1</Form.Label>
              <Col className="without-left-padding">
                <Form.Control type="email" onChange={handleChange('first_referral_email')}/>
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicSecondReferralName">
              <Form.Label className="Essays1743">Name 2</Form.Label>
              <Col className="without-left-padding">
                <Form.Control type="name" onChange={handleChange('second_referral_name')}/>
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicSecondReferralEmail">
              <Form.Label className="Essays1743">Email 2</Form.Label>
              <Col className="without-left-padding">
                <Form.Control type="email" onChange={handleChange('second_referral_email')}/>
              </Col>
            </Form.Group>
            <br />
            <div className="text-align-right">
              <Button id="consent-form-next-btn" disabled={isLoading} type="submit" value="submit">Submit</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
