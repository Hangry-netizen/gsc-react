import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ProfilePageBody({ gsc }) {
  let history = useHistory();

  const toEditPage = () => {
    history.push(`/good-single-christian-friend/${gsc.uuid}/edit`)
  }

  const toDatabasePage = () => {
    history.push(`/good-single-christian-friend/${gsc.uuid}/database`)
  }

  const toHelloPage = () => {
    history.push(`/good-single-christian-friend/${gsc.uuid}/hellos`)
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
            <div>
              <button onClick={toDatabasePage} className="gsc-profile-page-btn color-blue">view database</button>
            </div>
            <div>
              <button onClick={toHelloPage} className="gsc-profile-page-btn color-blue">view hellos</button>
            </div>
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
