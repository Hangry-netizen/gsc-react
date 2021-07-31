import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { url } from '../App';
import DatabaseTable from '../FFComponents/FFDatabaseComponents/DatabaseTable';
import GscProfile from '../FFComponents/FFDatabaseComponents/GscProfile';

export default function FFDatabasePage() {
  let history = useHistory();
  let { uuid } = useParams();
  const [currentGsc, setCurrentGsc] = useState();
  const [gscs, setGscs] = useState();
  const [references, setReferences] = useState();
  const [showGscProfile, setShowGscProfile] = useState(false);

  const handleCloseGscProfile = () => setShowGscProfile(false);
  const handleShowGscProfile = () => setShowGscProfile(true);

  useEffect(() => {
    axios.get (`${url}/gscs/${uuid}`)
    .then((response) => {
      setCurrentGsc(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

    axios.get (`${url}/gscs/database-display/${uuid}`)
      .then((response) => {
        setGscs(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get(`${url}/references/gsc/${uuid}`)
      .then((response) => {
        setReferences(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      
  }, [uuid])

  const backToProfile = () => {
    history.push(`/my-good-single-christian-friends`)
    window.scrollTo(0,0)
  }

  return (
    <div id="database-page-container">
      {
        currentGsc && gscs && references
        ?
        <>
          <div className="text-align-left" style={{marginTop:"20px"}}>
            <button className="red-button font-size-small" onClick={backToProfile} style={{padding:"10px 15px", borderRadius:"5px"}}>back</button>
          </div>
          <br />
          <div className="text-align-left">
            <button onClick={handleShowGscProfile} className="font-size-small red-button" style={{padding:"10px 15px", borderRadius:"5px", border:'none'}}>View {currentGsc.name}'s profile</button>
          </div>
          <h1 className="color-red" style={{margin:"50px auto"}}>{currentGsc.name}'s Database <div className="font-size-small">(updated on the 1st of every month)</div></h1>
          <GscProfile
            currentGsc={currentGsc}
            references={references}
            showGscProfile={showGscProfile}
            handleCloseGscProfile={handleCloseGscProfile}
          />
          <div className="color-blue">Note: This is for your eyes only. Please refrain from viewing or discussing this database with others except for {currentGsc.name}. Thank you for honoring your sisters/brothers!</div>
          <div className="color-blue">Click anywhere on a profile to view the full profile. As a Faithful Friend, you can suggest this profile to your GSCF ({currentGsc.name}) at the bottom of the full profile view.</div>
          <br />
          {
            currentGsc && gscs
            ? 
            <DatabaseTable
              currentGsc={currentGsc}
              gscs={gscs}
            />
            :
            null
          }
          <br />
          <br />
        </>
        :
        null
      }
    </div>
  )
}

