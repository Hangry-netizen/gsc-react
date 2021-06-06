import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function DatabaseModal({ gsc, showGscModal, handleCloseGscModal, personality }) {
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
        <Modal.Body className="bg-beach" style={{height:"80vh", overflowY:"auto"}}>
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
        </Modal.Body>
        <Modal.Footer className="bg-beach">
          <Button variant="secondary" onClick={handleCloseGscModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
