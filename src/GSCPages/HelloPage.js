import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { url } from '../App';
import SaidHiTable from '../GSCComponents/HelloComponents/SaidHiTable';
import HiRecipientTable from '../GSCComponents/HelloComponents/HiRecipientTable';
import ContactedTable from '../GSCComponents/HelloComponents/ContactedTable';
import '../GSCComponents/HelloComponents/HelloPage.css';

export default function HelloPage() {
  let history = useHistory();
  const { uuid } = useParams();
  const [currentGsc, setCurrentGsc] = useState({});
  const [saidHellos, setSaidHellos] = useState([]);
  const [receivedHellos, setReceivedHellos] = useState([]);

  useEffect(() => {
    axios.get (`${url}/gscs/${uuid}`)
      .then((response) => {
        setCurrentGsc(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get(`${url}/gscs/said-hi/${uuid}`)
      .then((response) => {
        setSaidHellos(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get(`${url}/gscs/hi-recipient/${uuid}`)
      .then((response) => {
        setReceivedHellos(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [uuid])

  const backToProfile = () => {
    history.push(`/good-single-christian-friend/${currentGsc.uuid}`)
    window.scrollTo(0,0)
  }

  return (
    <div id="hello-page-container">
      <div className="text-align-left" style={{marginTop:"20px"}}>
        <button className="red-button" onClick={backToProfile} style={{padding:"5px 15px", borderRadius:"5px"}}>BACK</button>
      </div>
      <br />
      {
        currentGsc && saidHellos && receivedHellos
        ?
        <>
          <h1 className="color-red">Your Hellos</h1>
          <br />
          <h3 className="color-blue">GSCs you have 👋 (said hi) to</h3>
          <SaidHiTable
            currentGsc={currentGsc}
            saidHellos={saidHellos}
          />
          <br />
          <h3 className="color-blue">GSCs who have 👋 (said hi) to you</h3>
          <HiRecipientTable
            currentGsc={currentGsc}
            receivedHellos={receivedHellos}
          />
          <br />
          <h3 className="color-blue">GSCs you've contacted</h3>
          <ContactedTable
            currentGsc={currentGsc}
            saidHellos={saidHellos}
            receivedHellos={receivedHellos}
          />
          <br />
          <br />
        </>
        :
        null
      }
    </div>
  )
}
