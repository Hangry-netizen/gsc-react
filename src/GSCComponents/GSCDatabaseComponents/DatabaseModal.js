import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { url } from "../../App";

export default function DatabaseModal({ gsc, showGscModal, handleCloseGscModal, personality, currentGsc, action }) {
  const [answer, setAnswer] = useState("")
  
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (answer === gsc.alias){
      setIsLoading(false)
    }
    else (
      setIsLoading(true)
    )
  }, [answer, gsc.alias])

  const handleSayHi = (e) => {
    e.preventDefault()
    setError("")

    if (currentGsc.monthly_hellos === 0) {
      return alert("You have no more 👋 'say hi's remaining for this month")
    }

    setIsLoading(true)

    axios({
      method: "POST",
      url: `${url}/hellos/`,
      data: {
        said_hi: currentGsc.id,
        hi_recipient: gsc.id
      }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert(response.data.message)
        window.location.reload()
      }
    })
    .catch(() => {
      setError("Failed to like")
    })

    setIsLoading(false)
  };

  const handleUndoHi = (e) => {
    e.preventDefault()
    setError("")

    setIsLoading(true)

    axios({
      method: "POST",
      url: `${url}/hellos/delete/${gsc.hello_id}`
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert("You have undone your 👋")
        window.location.reload()
      }
      else {
        setError("Failed to undo your 👋")
      }
    })
    .catch(() => {
      setError("Failed to undo your 👋")
    })

    setIsLoading(false)
  };

  const handleRemoveHi = (e) => {
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
        alert(`You have removed ${gsc.alias}'s 👋`)
        window.location.reload()
      }
      else {
        setError(`Failed to remove ${gsc.alias}'s 👋`)
      }
    })
    .catch(() => {
      setError(`Failed to remove ${gsc.alias}'s 👋`)
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
            action === "said_hi" || action === "hi_recipient"
            ?
            <>
            {
              action === "said_hi"
              ?
              <div className="color-blue font-size-small">*scroll down to undo your 👋</div>
              :
              <div className="color-blue font-size-small">*scroll down to remove {gsc.alias}'s 👋</div>
            }
            </>
            :
            <div className="color-blue font-size-small">*scroll down to 👋</div>
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
          <form className="bg-blue color-red" style={{padding:"15px", borderRadius:"10px"}}>
            {
              action === "said_hi" || action === "hi_recipient"
              ?
              <>
              {
                action === "said_hi"
                ?
                <div className="text-align-left">
                  <div>You have 👋 at {gsc.alias}!</div>
                  <br />
                  <div style={{marginLeft: "5px"}}>
                    <input style={{border:"white", padding:" 5px 15px", width:"90%", borderRadius:"5px" }} type="text" onChange={e => setAnswer(e.target.value)} placeholder={gsc.alias}/>
                    <label className="font-size-small color-beach">Key in this profile's alias to <span className="color-red">undo</span> your 👋</label>
                  </div>
                </div>
                :
                <div className="text-align-left">
                  <div>{gsc.alias} has 👋 at you!</div>
                  <br />
                  <div>
                    <input style={{border:"white", padding:" 5px 15px", width:"90%", borderRadius:"5px" }} type="text" onChange={e => setAnswer(e.target.value)} placeholder={gsc.alias}/>
                    <label className="font-size-small color-beach">Key in this profile's alias to <span className="color-red">remove</span> 👋</label>
                  </div>
                </div>
              }
              </>
              :
              <div className="display-flex text-align-left">
                <div style={{margin:" 5px 15px auto 0", whiteSpace:"nowrap"}}>'Say hi' 👋 to </div>
                <div style={{marginLeft: "5px"}}>
                  <input style={{border:"white", padding:" 5px 15px", width:"90%", borderRadius:"5px" }} type="text" onChange={e => setAnswer(e.target.value)} placeholder={gsc.alias}/>
                  <label className="font-size-small color-beach">Key in this profile's alias to 👋!</label>
                </div>
              </div>
            }
            <div>
              {error && <Alert className="color-red font-size-small">{error}</Alert>}
            </div>
            <br />
            <div className="text-align-right">
              <Button variant="secondary" onClick={handleCloseGscModal} style={{marginRight:"20px"}}>Close</Button>
              {
                action === "said_hi" || action === "hi_recipient"
                ?
                <>
                {
                  action === "said_hi"
                  ?
                  <Button variant={isLoading ? "secondary" : "danger"} disabled={isLoading} onClick={handleUndoHi}>Undo 'hi' 👋</Button>
                  :
                  <Button variant={isLoading ? "secondary" : "danger"} disabled={isLoading} onClick={handleRemoveHi}>Remove 'hi' 👋</Button>

                }
                </>
                :
                <Button variant={isLoading ? "secondary" : "danger"} disabled={isLoading} onClick={handleSayHi}>Say 'hi' 👋</Button>
              }
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
