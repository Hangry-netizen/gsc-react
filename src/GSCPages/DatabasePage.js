import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from '../App';
import DatabaseTable from '../GSCComponents/DatabaseComponents/DatabaseTable';

export default function DatabasePage() {
  let history = useHistory();
    const { uuid } = useParams();
    const [gscs, setGscs] = useState([]);
    const [currentGsc, setCurrentGsc] = useState({});
  
    useEffect(() => {
      axios.get (`${url}/gscs/`)
        .then((response) => {
          setGscs(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      axios.get (`${url}/gscs/${uuid}`)
        .then((response) => {
          setCurrentGsc(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [uuid])

  const backToProfile = () => {
    history.push(`/good-single-christian-friend/${uuid}`)
    window.scrollTo(0,0)
  }
  
  return (
    <div className="color-red" style={{boxSizing:"border-box", width:"90%", margin:"50px auto"}}>
      <div className="text-align-left">
        <button className="red-button" onClick={backToProfile} style={{padding:"5px 15px", borderRadius:"5px"}}>BACK</button>
      </div>
      <br />
      <h1>Monthly Database</h1>
      <p className="mobile-text-align-left">The database will be refreshed on the 1st of every month!</p>
      <DatabaseTable
        gscs={gscs}
        currentGsc={currentGsc}
      />
    </div>
  )
}
