import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import url from '../App';

export default function HelloPage() {
  let history = useHistory();
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
      <h1>HELLO {gsc.name}</h1>
    </div>
  )
}
