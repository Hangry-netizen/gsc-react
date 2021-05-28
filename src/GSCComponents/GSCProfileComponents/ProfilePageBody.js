import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ProfilePageBody({ gsc }) {
  let history = useHistory();

  const toEditPage = () => {
    history.push(`/good-single-christian-friend/${gsc.uuid}/edit`)
  }

  const toHelloPage = () => {
    history.push(`/good-single-christian-friend/${gsc.uuid}/hello`)
  }
  const toDatabasePage = () => {
    history.push(`/good-single-christian-friend/${gsc.uuid}/database`)
  }
  return (
    <div>
      {
      gsc.is_active
          ?
          <>
            <h1 className="color-red Essays1743" style={{margin:"50px auto 80px"}}>Welcome, {gsc.name}!</h1>
            <div>
              <button onClick={toEditPage} className="gsc-profile-page-btn color-blue">edit profile</button>
            </div>
            <div>
              <button onClick={toHelloPage} className="gsc-profile-page-btn color-blue">view my HELLO page</button>
            </div>
            <div>
              <button onClick={toDatabasePage} className="gsc-profile-page-btn color-blue">view this month's database</button>
            </div>
          </>
          :
          <>
            <h1 className="color-red Essays1743" style={{margin:"50px auto 80px"}}>Welcome, {gsc.name}!</h1>
            <div>
              <button onClick={toEditPage} className="gsc-profile-page-btn color-blue">edit profile</button>
            </div>
            <div>
              <button onClick={toHelloPage} className="gsc-profile-page-btn color-blue">view my HELLO page</button>
            </div>
            <div>
              <button onClick={toDatabasePage} className="gsc-profile-page-btn color-blue">view this month's database</button>
            </div>
          </>
      }   
    </div>
  )
}
