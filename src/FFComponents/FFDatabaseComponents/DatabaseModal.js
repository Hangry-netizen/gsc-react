import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { url } from "../../App";

export default function DatabaseModal({ gsc, showGscModal, handleCloseGscModal, personality, currentGsc, action }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSuggest = (e) => {
    e.preventDefault()
    setError("")

    setIsLoading(true)

    axios({
      method: "POST",
      url: `${url}/gscs/suggested/${currentGsc.uuid}`,
      data: {
        "suggested": gsc.id
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert(`You've suggested ${gsc.name} to ${currentGsc.name}!`)
        window.location.reload()
      }
    })
    .catch(() => {
      setError("Failed to suggest")
    })

    setIsLoading(false)
  };

  const handleRemoveSuggestion = (e) => {
    e.preventDefault()
    setError("")

    setIsLoading(true)

    axios({
      method: "POST",
      url: `${url}/remove-suggested/${currentGsc.uuid}`,
      data: {
        "remove-suggested": gsc.id
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert("You have removed your suggestion.")
        window.location.reload()
      }
      else {
        setError("Failed to remove your suggestion")
      }
    })
    .catch(() => {
      setError("Failed to remove your suggestion")
    })

    setIsLoading(false)
  };

  return (
    <>
      <Modal
        id="gsc-modal"
        show={showGscModal}
        onHide={handleCloseGscModal}
        scrollable={true}
      >
        <Modal.Header closeButton className="bg-beach">
          <Modal.Title className="color-blue">{gsc.alias}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach text-align-left" style={{height:"80vh", overflowY:"auto"}}>
          {
            currentGsc.suggested
            ?
            <>
              {
                currentGsc.suggested.includes(gsc.id)
                ?
                <div className="color-blue font-size-small">*scroll down to remove your suggestion 🔍</div>
                :
                <div className="color-blue font-size-small">*scroll down to suggest to {currentGsc.name}</div>
              }
            </>
            :
            <div className="color-blue font-size-small">*scroll down to suggest to {currentGsc.name}</div>
          }
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
          <div>
            {error && <Alert className="color-red font-size-small">{error}</Alert>}
          </div>
          <br />
          <div className="text-align-right">
            <Button variant="secondary" onClick={handleCloseGscModal} style={{marginRight:"20px"}}>Close</Button>
            {
              currentGsc.suggested
              ?
              <>
                {
                  currentGsc.suggested.includes(gsc.id)
                  ?
                  <Button variant={isLoading ? "secondary" : "secondary"} disabled={isLoading} onClick={handleRemoveSuggestion}>Remove 🔍</Button>
                  :
                  <Button variant={isLoading ? "secondary" : "danger"} disabled={isLoading} onClick={handleSuggest}>Suggest 🔍</Button>
                }
              </>
              :
              <Button variant={isLoading ? "secondary" : "danger"} disabled={isLoading} onClick={handleSuggest}>Suggest 🔍</Button>
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
