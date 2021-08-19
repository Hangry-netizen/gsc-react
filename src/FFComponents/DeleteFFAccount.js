import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function DeleteFFAccount() {
  const { currentUser } = useAuth()

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [answer, setAnswer] = useState("")
  const [randomNum, setRandomNum] = useState()

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  let history = useHistory()

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

  async function handleDeleteAccount(e) {
    e.preventDefault()
    setMessage("")
    setError("")

    try {
      setIsLoading(true)
      await currentUser.delete()
      alert("Successfully deleted your FF account")
      history.push("/")
    } catch {
      setError("Failed to delete account. Try logging out and signing in again before deleting if this problem persists.")
    }
    setIsLoading(false)
  }

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

  return (
    <div>
      <button onClick={DeleteModalOnClick} className="blue-button" id="delete-ff-acc-btn">Delete My FF Account</button>
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header className="bg-beach color-red">Delete FF {currentUser.displayName}'s account?</Modal.Header>
        <Modal.Body className="bg-beach">
          <div className="color-blue">This action cannot be undone.</div>
          <br />
          <form onSubmit={handleDeleteAccount}>
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
              <Button variant={isLoading ? "secondary" : "danger"} disabled={isLoading} type="submit">Delete</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
