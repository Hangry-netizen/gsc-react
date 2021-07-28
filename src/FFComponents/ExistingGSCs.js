import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "../contexts/AuthContext";
import { url } from "../App";
import { Link } from 'react-router-dom';

export default function ExistingGSCs() {
  const { currentUser } = useAuth()
  const [existingGSCs, setExistingGSCs] = useState([])

  useEffect(() => {
    axios.get (`${url}/gscs/`)
      .then((response) => {
        setExistingGSCs(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      { 
        existingGSCs
        ?
        existingGSCs.map((existingGSC, i) => {
          if (existingGSC.ff_email === currentUser.email) {
            if (existingGSC.is_approved === false) {
              return (
                <div key={i}>
                  <button className="gsc-profile-button color-red Essays1743">{existingGSC.name}</button>
                  <div id="awaiting-txt" className="color-red font-size-small">Awaiting consent and screening</div>
                </div>
              )
            } else {
              return (
                <div key={i}>
                  <Link to={`/my-good-single-christian-friend/${existingGSC.uuid}`}>
                    <button id="existing-gsc-btn" className="gsc-profile-button color-red Essays1743" key={existingGSC.id}>{existingGSC.name}</button>
                  </Link>
                </div>
              )
            }
          } else {
            return null
          }
        })
        :
        null
      }
    </div>
  )
}
