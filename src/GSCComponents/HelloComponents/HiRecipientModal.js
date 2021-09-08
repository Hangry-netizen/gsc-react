import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { url } from "../../App";


export default function HiRecipientModal({ gsc, currentGsc, showHiRecipientModal, handleCloseHiRecipientModal, personality, ageRange }) {
  const [isLoading, setIsLoading] = useState(true)
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (answer.trim().toLowerCase() === gsc.name.trim().toLowerCase()){
      setIsLoading(false)
    }
    else (
      setIsLoading(true)
    )
  }, [answer, gsc.name])

  const handleContacted = (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    axios({
      method: "POST",
      url: `${url}/gscs/contacted/${currentGsc.uuid}`,
      data: {
        "contacted": gsc.id
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert(`${gsc.alias} had been marked as contacted`)
        handleCloseHiRecipientModal()
        window.location.reload()
      }
      else if (response.data.status === "failed") {
        setError(response.data.message)
      }
    })
    .catch((error) => {
      setError(error)
    })

    setIsLoading(false)
  };

  const handleRemove = (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    axios({
      method: "POST",
      url: `${url}/hellos/remove/${gsc.hello_id}`,
      data: {
        removed: true
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert(response.data.message)
        handleCloseHiRecipientModal()
        window.location.reload()
      }
    })
    .catch((error) => {
      setError(error)
    })

    setIsLoading(false)
  };
  return (
    <>
      <Modal
        id="gsc-modal"
        show={showHiRecipientModal}
        onHide={handleCloseHiRecipientModal}
        scrollable={true}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-blue">{gsc.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach" style={{height:"80vh", overflowY:"auto"}}>
          <div className="color-red">Name</div>
          <div className="color-blue">{gsc.name}</div>
          <br />
          <div className="color-red">Preferred Contact Method</div>
          <div className="color-blue">{gsc.preferred_contact_method}</div>
          <br />
          <div className="color-red">Contact Info</div>
          <div className="color-blue">{gsc.contact_info}</div>
          <br />
          <div className="color-red">Age Range</div>
          <div className="color-blue">{ageRange}</div>
          <br />
          <div className="color-red">Location</div>
          <div className="color-blue">{gsc.city}, {gsc.country}</div>
          <br />
          <div className="color-red">Willingness to relocate</div>
          <div className="color-blue">Town: {gsc.moving_to_a_different_town}%, Country: {gsc.moving_to_a_different_country}%</div>
          <br />
          <div className="color-red">Height</div>
          <div className="color-blue">{gsc.height}</div>
          <br />
          <div className="color-red">Languages</div>
          <div className="color-blue">{gsc.languages}</div>
          <br />
          <div className="color-red">Nationality/Ethnicity</div>
          <div className="color-blue">{gsc.nationality}</div>
          <br />
          <div className="color-red">Descriptors</div>
          <div className="color-blue">{gsc.descriptive_words}</div>
          <br />
          <div className="color-red">Personality/Temperament</div>
          <div className="color-blue">{personality}</div>
          <br />
          <div className="color-red">Church background</div>
          <div className="color-blue">{gsc.church_background}</div>
          <br />
          <div className="color-red">Spiritual maturity</div>
          <div className="color-blue">{gsc.spiritual_maturity}</div>
          <br />
          <div className="color-red">Spiritual characteristics</div>
          <div className="color-blue">{gsc.spiritual_gifts}</div>
          <br />
          <div className="color-red">Why do you think your GSCF would make a good partner?</div>
          <div className="color-blue">{gsc.reasons_gscf_makes_a_good_partner}</div>
          <br />
          <div className="color-red">What kind of person would make a good match for your GSCF?</div>
          <div className="color-blue">{gsc.good_match_for_gscf}</div>
          <br />
          <div className="color-red">Words from the GSC</div>
          <div className="color-blue">{gsc.what_is_important_to_me}</div>
          <br />
          <div className="color-red">Favorite topics/music/movies/books</div>
          <div className="color-blue">{gsc.favorite_topics}</div>
          <br />
          <div className="color-red">Paid/unpaid work</div>
          <div className="color-blue">{gsc.do}</div>
          <br />
          <div className="color-red">Chill out activities</div>
          <div className="color-blue">{gsc.chill_activities}</div>
          <br />
          <div className="color-red">Skills and talents</div>
          <div className="color-blue">{gsc.skills_and_talents}</div>
          <br />
          <div className="color-red">Area to develop</div>
          <div className="color-blue">{gsc.growth_and_development}</div>
          <br />
          <div className="color-red">Ever been married, has kids</div>
          <div className="color-blue">{gsc.has_been_married_or_has_kids}</div>
          <br />
          <div className="color-red">Want kids?</div>
          <div className="color-blue">{gsc.want_to_have_kids}</div>
          <br />
          <div className="color-red">Something else that is particularly important</div>
          <div className="color-blue">{gsc.important_info_to_know}</div>
          <br />
          <div className="color-red">Social media profile link</div>
          <div className="color-blue">{gsc.social_media_profile_link}</div>
          <br />
          <form className="bg-blue color-red" style={{padding:"20px", borderRadius:"10px"}}>
            <div>
              <label className="color-red font-size-small">Key in this profile's name to enable contacted/remove buttons:</label>
              <input style={{border:"none", paddingLeft:"10px",paddingRight:"10px", width:"60%", marginLeft: "10px", borderRadius:"10px" }} type="text" onChange={e => setAnswer(e.target.value)} placeholder={gsc.name}/>
            </div>
            <div>
              {error && <Alert className="color-red font-size-small">{error}</Alert>}
            </div>
            <br />
            <div style={{display:'flex', boxSizing:'border-box', width:'100%', justifyContent:'space-between'}}>
              <Button variant="secondary" onClick={handleCloseHiRecipientModal}>Close</Button>
              <div>
                {
                  isLoading
                  ?
                  <>
                    <Button variant="secondary" disabled={isLoading} onClick={handleContacted} style={{marginRight:'20px'}}>Contacted</Button>
                    <Button variant="secondary" disabled={isLoading} onClick={handleRemove}>Remove</Button>
                  </>
                  :
                  <>
                    <Button variant="primary" disabled={isLoading} onClick={handleContacted} style={{marginRight:'20px'}}>Contacted</Button>
                    <Button variant="danger" disabled={isLoading} onClick={handleRemove}>Remove</Button>
                  </>             
                }
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
