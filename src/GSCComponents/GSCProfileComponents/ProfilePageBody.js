import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { url } from '../../App';
import axios from 'axios';

export default function ProfilePageBody({ gsc, setActive, active }) {
  let history = useHistory();
  const [loading, setLoading] = useState(false)

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
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }

  const toggleHideProfile = () => {
    setLoading(true)
    setActive(!active)
    handleActiveToggle()
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
                <div>
                  <button onClick={toDatabasePage} className="gsc-profile-page-btn color-blue">view database</button>
                </div>
                <div>
                  <button onClick={toHelloPage} className="gsc-profile-page-btn color-blue">view hellos</button>
                </div>
                {
                  active
                  ?
                  <div>
                    <button onClick={toggleHideProfile} disabled={loading} className="gsc-profile-page-btn color-blue">hide profile</button>
                  </div>
                  :
                  <div>
                    <button onClick={toggleHideProfile} disabled={loading} className="gsc-profile-page-btn color-blue">unhide profile</button>
                  </div>
                }
                <div>
                  <button onClick={toHelloPage} className="gsc-profile-page-btn color-blue">delete profile</button>
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
    </div>
  )
}
