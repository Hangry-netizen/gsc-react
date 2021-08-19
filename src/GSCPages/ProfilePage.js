import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { url } from '../App';

import '../GSCComponents/GSCProfileComponents/GSCProfilePage.css';
import ProfilePageBody from '../GSCComponents/GSCProfileComponents/ProfilePageBody';

export default function ProfilePage() {
  const { uuid } = useParams();
  const [gsc, setGsc] = useState();
  const[active, setActive] = useState()

  useEffect(() => {
    axios.get (`${url}/gscs/${uuid}`)
      .then((response) => {
        setGsc(response.data)
        setActive(response.data.is_active)
      })
      .catch((error) => {
        console.log(error)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="gsc-profile-page-container">
      {gsc ? <ProfilePageBody gsc={gsc} active={active} setActive={setActive}/> : null}
    </div>
  )
}
