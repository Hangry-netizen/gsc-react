import React, { useEffect, useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { Link } from 'react-router-dom';
import { Modal, Alert, Button } from 'react-bootstrap';
import axios from 'axios';
import { url } from '../App';

export default function ExistingGSCs({ existingGSCs }) {
  const { currentUser } = useAuth();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [answer, setAnswer] = useState("");
  const [randomNum, setRandomNum] = useState();

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (answer === randomNum){
      setIsLoading(false)
    }
    else (
      setIsLoading(true)
    )
  }, [answer, randomNum])

  const getRandomNum = () => {
    const num = Math.floor(1000 + Math.random() * 9000);
    setRandomNum(String(num))
  }

  const DeleteModalOnClick = () => {
    getRandomNum();
    handleShowDeleteModal()
    setMessage("")
    setError("")
  }

  const handleDeleteAccount = (existingGSC) => {
    setIsLoading(true)

    axios({
      method: 'POST',
      url: `${url}/gscs/delete/${existingGSC.id}`
    })
    .then(response => {
      if (response.data.status === 'success') {
        handleCloseDeleteModal();
        alert(`You have deleted ${existingGSC.name}'s GSC profile`)
        window.location.reload()
      }
    })
    .catch(error => {
      setError(error)
    })
    setIsLoading(false)
  }

  return (
    <div>
      {
        existingGSCs.map((existingGSC, i) => {
          if (existingGSC.ff_email === currentUser.email) {
            if (existingGSC.is_approved === false) {
              return (
                <div key={i}>
                  <button onClick={DeleteModalOnClick} className="gsc-profile-button color-red Essays1743">{existingGSC.name}</button>
                  <div id="awaiting-txt" className="color-red font-size-small">Awaiting consent and screening</div>
                  <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                    <Modal.Header className="bg-beach color-red">{existingGSC.name}</Modal.Header>
                    <Modal.Body className="bg-beach">
                      <div className="color-blue">Awaiting consent and approval.</div>
                      <br />
                      <form onSubmit={() => handleDeleteAccount(existingGSC)}>
                        <div>
                          <div className="color-blue">If you'd like to delete this profile, key in <span className="color-blue">{randomNum}</span>.</div>
                          <br />
                          <div className="color-red">ATTENTION:</div>
                          <div className="color-red"> Your GSCF will not be able to consent if you delete now, and this step is irreversible.</div>
                          <br />
                          <input style={{border:"none", paddingLeft:"10px",paddingRight:"10px", width:"70px", borderRadius:"10px"}} type="text" onChange={e => setAnswer(e.target.value)} placeholder="0000"/>
                        </div>
                        <div>
                          {error && <Alert className="color-red font-size-small">{error}</Alert>}
                          {message && <Alert className="color-green font-size-small">{message}</Alert>}
                        </div>
                        <br />
                        <div className="text-align-right">
                          <Button variant="secondary" onClick={handleCloseDeleteModal} style={{marginRight:"20px"}}>Close</Button>
                          <Button variant={isLoading ? "secondary" : "danger"} disabled={isLoading} type="submit">Delete</Button>
                        </div>
                      </form>
                    </Modal.Body>
                  </Modal>
                </div>
              )
            } 
            else {
              return (
                <div key={i}>
                  <Link to={`/my-good-single-christian-friend/${existingGSC.uuid}`}>
                    <button id="existing-gsc-btn" className="gsc-profile-button color-red Essays1743" key={existingGSC.id}>{existingGSC.name}</button>
                  </Link>
                </div>
              )
            }
          } 
          else {
            return null
          }
        })
      }
    </div>
  )
}
