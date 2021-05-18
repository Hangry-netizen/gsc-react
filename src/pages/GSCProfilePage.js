import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { url } from '../App';

import EditProfilePage from '../GSCComponents/GSCProfileComponents/EditProfilePage';
import LikesPage from '../GSCComponents/GSCProfileComponents/LikesPage';
import DatabasePage from '../GSCComponents/GSCProfileComponents/DatabasePage';
import HideProfile from '../GSCComponents/GSCProfileComponents/HideProfile';
import RemoveProfile from '../GSCComponents/GSCProfileComponents/RemoveProfile';

import '../GSCComponents/GSCProfileComponents/GSCProfilePage.css';

export default function GSCProfilePage() {
  const { uuid, name } = useParams();
  const [gsc, setGsc] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.get (`${url}/gscs/${uuid}`)
      .then((response) => {
        setGsc(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div id="gsc-profile-page-container">
      <h1 className="color-red Essays1743" style={{margin:"50px auto 80px"}}>Welcome, {name}!</h1>
      <EditProfilePage />
      <LikesPage />
      <DatabasePage />
      <HideProfile gsc={gsc}/>
      <RemoveProfile />
    </div>
  )
}
