import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ManageFFAccountPage() {
  const { currentUser } = useAuth()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let history = useHistory()

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleDeleteAccount(e) {
    e.preventDefault()
    setMessage("")
    setError("")

    try {
      setIsLoading(true)
      await currentUser.delete()
      alert("Successfully deleted account")
      history.push("/")
    } catch {
      setError("Failed to delete account")
    }
    setIsLoading(false)
  }
  return (
    <div>
      <h1>Manage My Faithful Friend Account</h1>
      <button onClick={handleShow}>Delete My FF Account</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete my faithful friend account</Modal.Title>
        </Modal.Header>
        <Modal.Body>This action is irreversible. Are you sure you want to delete your FF account?</Modal.Body>
        <div>
            {error && <Alert className="color-red font-size-small">{error}</Alert>}
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" disabled={isLoading} onClick={handleDeleteAccount}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
