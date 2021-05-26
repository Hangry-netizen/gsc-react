import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { url } from '../App';

import '../GSCComponents/GSCProfileComponents/GSCProfilePage.css';

export default function ProfilePage() {
  let history = useHistory();
  const { uuid } = useParams();
  const [gsc, setGsc] = useState({});

  useEffect(() => {
    axios.get (`${url}/gscs/${uuid}`)
      .then((response) => {
        setGsc(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [uuid])

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
    <div id="gsc-profile-page-container">
      <h1 className="color-red Essays1743" style={{margin:"50px auto 80px"}}>Welcome, {gsc.name}!</h1>
      {
        gsc.is_active
        ?
        <>
          <div>
            <button onClick={toEditPage} className="gsc-profile-page-btn color-red">EDIT PROFILE</button>
          </div>
          <div>
            <button onClick={toHelloPage} className="gsc-profile-page-btn color-red">VIEW HELLOS</button>
          </div>
          <div>
            <button onClick={toDatabasePage} className="gsc-profile-page-btn color-red">VIEW THIS MONTH'S DATABASE</button>
          </div>
        </>
        :
        <>
          <div>
            <button onClick={toEditPage} className="gsc-profile-page-btn color-red">EDIT PROFILE</button>
          </div>
        </>
      }
    </div>
  )
}
