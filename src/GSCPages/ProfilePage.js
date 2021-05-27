import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { url } from '../App';

import '../GSCComponents/GSCProfileComponents/GSCProfilePage.css';
import ProfilePageBody from '../GSCComponents/GSCProfileComponents/ProfilePageBody';

export default function ProfilePage() {
  const { uuid } = useParams();
  const [gsc, setGsc] = useState();

  useEffect(() => {
    axios.get (`${url}/gscs/${uuid}`)
      .then((response) => {
        setGsc(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [uuid])

  return (
    <div id="gsc-profile-page-container">
      {gsc ? <ProfilePageBody gsc={gsc}/> : null}
    </div>
  )
}
