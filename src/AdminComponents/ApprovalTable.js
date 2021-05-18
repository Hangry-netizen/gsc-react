import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

export default function ApprovalTable({ gscs, handleApproval }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Table striped bordered hover variant="dark" responsive>
        <thead id="approval-table-head">
          <tr>
            <th>#</th>
            <th>Alias</th>
            <th>Height</th>
            <th>Languages</th>
            <th>Nationality/ Ethnicity</th>
            <th>Location</th>
            <th>Willingness to relocate</th>
            <th>Descriptors</th>
            <th>Personality/ Temperament</th>
            <th>Church background</th>
            <th>Spiritual maturity</th>
            <th>Spiritual characteristics</th>
            <th>What qualities make him a good partner?</th>
            <th>What kind of person will be a good match for him?</th>
            <th>Hear from the GSC</th>
          </tr>
        </thead>
        <tbody id="approval-table-body">
        {
          gscs.map((gsc) => {
            return (
              <>
                <tr onClick={handleShow} key={gsc.id}>
                  <th>
                    <Button variant="danger" value={gsc.uuid} onClick={handleApproval}>Approve</Button>
                  </th>
                  <td>{gsc.alias}</td>
                  <td>{gsc.height}</td>
                  <td>{gsc.languages}</td>
                  <td>{gsc.nationality}</td>
                  <td>{gsc.city}, {gsc.country}</td>
                  <td>Town: {gsc.moving_to_a_different_town}, Country: {gsc.moving_to_a_different_country}</td>
                  <td>{gsc.descriptive_words}</td>
                  <td>{gsc.mbti}, {gsc.enneagram}, {gsc.disc}, {gsc.strengths_finder} </td>
                  <td>{gsc.church_background}</td>
                  <td>{gsc.spiritual_maturity}</td>
                  <td>{gsc.spiritual_gifts}</td>
                  <td>{gsc.reasons_gscf_makes_a_good_partner}</td>
                  <td>{gsc.good_match_for_gscf}</td>
                  <td>{gsc.what_is_important_to_me}</td>
                </tr>
                <Modal
                  show={show}
                  onHide={handleClose}
                  centered
                >
                  <Modal.Header closeButton className="bg-beach">
                    <Modal.Title className="color-blue">{gsc.alias}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="bg-beach">
                    <div className="color-red">Favorite topics/music/movies/books: <span className="color-blue">{gsc.favorite_topics}</span></div>
                    <div className="color-red">Work: <span className="color-blue">{gsc.do}</span></div>
                    <div className="color-red">Chill out: <span className="color-blue">{gsc.chill_activites}</span></div>
                    <div className="color-red">Skills: <span className="color-blue">{gsc.skills_and_talents}</span></div>
                    <div className="color-red">Area to develop: <span className="color-blue">{gsc.growth_and_development}</span></div>
                    <div className="color-red">Ever been married, has kids: <span className="color-blue">{gsc.has_been_married_or_has_kids}</span></div>
                    <div className="color-red">Want kids?: <span className="color-blue">{gsc.want_to_have_kids}</span></div>
                    <div className="color-red">Something else: <span className="color-blue">{gsc.important_info_to_know}</span></div>
                  </Modal.Body>
                  <Modal.Footer className="bg-beach">
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            )
          })
        }
        </tbody>
      </Table>
    </div>
  )
}
