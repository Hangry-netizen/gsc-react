import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { url } from '../../App';
import axios from 'axios';

export default function ProfilePageBody({ gsc, setActive, active }) {
  let history = useHistory();
  const [toggleLoading, setToggleLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(true);
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [answer, setAnswer] = useState("")
  const [randomNum, setRandomNum] = useState()

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  const toEditPage = () => {
    history.push(`/good-single-christian-friend/${gsc.uuid}/edit`)
  }

  const toDatabasePage = () => {
    history.push(`/good-single-christian-friend/${gsc.uuid}/database`)
  }

  const toHelloPage = () => {
    history.push(`/good-single-christian-friend/${gsc.uuid}/hellos`)
  }

  const handleActiveToggle = () => {
    axios.post(`${url}/gscs/active-status/toggle/${gsc.id}`)
    .then(() => {
      setToggleLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setToggleLoading(false)
    })
  }

  const toggleHideProfile = () => {
    setToggleLoading(true)
    setActive(!active)
    handleActiveToggle()
  }

  const getRandomNum = () => {
    const num = Math.floor(1000 + Math.random() * 9000);
    setRandomNum(String(num))
  }

  useEffect(() => {
    if (answer === randomNum){
      setDeleteLoading(false)
    }
    else (
      setDeleteLoading(true)
    )
  }, [answer, randomNum])

  const handleDeleteProfile = () => {
    setDeleteLoading(true)
    setMessage("")
    setError("")

    axios.post(`${url}/gscs/delete/${gsc.id}`)
    .then((response) => {
      if (response.status === "success") {
        alert("You have successfully deleted your GSCF profile from matchesup.com")
      }
      else {
        setError("Failed to delete your profile. If this problem persists, please contact us at matchesup@gmail.com.")
      }
    })
    .catch(() => {
      setError("Failed to delete your profile. If this problem persists, please contact us at matchesup@gmail.com.")
    })
  }

  const DeleteModalOnClick = () => {
    getRandomNum();
    handleShowDeleteModal()
    setMessage("")
    setError("")
  }

  return (
    <div>
      {
      gsc.is_approved
          ?
          <>
            <h1 className="color-red Essays1743" style={{margin:"50px auto 80px"}}>Welcome, {gsc.name}!</h1>
            <div>
              <button onClick={toEditPage} className="gsc-profile-page-btn color-blue">edit profile</button>
            </div>
            {
              gsc.is_activated
              ?
              <>
                {
                  active
                  ?
                  <>
                    <div>
                      <button onClick={toDatabasePage} className="gsc-profile-page-btn color-blue">view database</button>
                    </div>
                    <div>
                      <button onClick={toHelloPage} className="gsc-profile-page-btn color-blue">view hellos</button>
                    </div>
                    <div>
                      <button onClick={toggleHideProfile} disabled={toggleLoading} className="gsc-profile-page-btn color-blue">hide profile</button>
                    </div>
                  </>
                  :
                  <div>
                    <button onClick={toggleHideProfile} disabled={toggleLoading} className="gsc-profile-page-btn color-blue">unhide profile</button>
                  </div>
                }
                <div>
                  <button onClick={DeleteModalOnClick} className="gsc-profile-page-btn color-blue">delete profile</button>
                </div>
              </>
              :
              null
            }
          </>
          :
          <>
            <h1 className="color-red Essays1743" style={{margin:"50px auto 80px"}}>Welcome, {gsc.name}!</h1>
            <div>
              <button onClick={toEditPage} className="gsc-profile-page-btn color-blue">edit profile</button>
            </div>
          </>
      }
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header className="bg-beach color-red">Permanently delete your GSCF profile?</Modal.Header>
        <Modal.Body className="bg-beach">
          <div className="color-blue">This action cannot be undone.</div>
          <br />
          <form onSubmit={handleDeleteProfile}>
            <div>
              <div className="color-blue">Enter this code to proceed: {randomNum}</div>
              <input style={{border:"none", paddingLeft:"10px",paddingRight:"10px", width:"70px"}} type="text" onChange={e => setAnswer(e.target.value)} placeholder="0000"/>
            </div>
            <div>
              {error && <Alert className="color-red font-size-small">{error}</Alert>}
              {message && <Alert className="color-green font-size-small">{message}</Alert>}
            </div>
            <br />
            <div className="text-align-right">
              <Button variant="secondary" onClick={handleCloseDeleteModal} style={{marginRight:"20px"}}>Close</Button>
              <Button variant={deleteLoading ? "secondary" : "danger"} disabled={deleteLoading} type="submit">Delete</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
