import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { url } from '../App';
import PointersModal from '../GSCComponents/GSCDatabaseComponents/PointersModal';
import DatabaseTable from '../FFComponents/FFDatabaseComponents/DatabaseTable';

export default function FFDatabasePage() {
  let history = useHistory();
  let { uuid } = useParams();
  const [currentGsc, setCurrentGsc] = useState();
  const [gscs, setGscs] = useState();
  const [showPointersModal, setShowPointersModal] = useState(false);

  const handleClosePointersModal = () => setShowPointersModal(false);
  const handleShowPointersModal = () => setShowPointersModal(true);

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
  }, [uuid])

  const backToProfile = () => {
    history.push(`/my-good-single-christian-friends`)
    window.scrollTo(0,0)
  }

  return (
    <div id="database-page-container">
      <div className="text-align-left" style={{marginTop:"20px"}}>
        <button className="red-button" onClick={backToProfile} style={{padding:"5px 15px", borderRadius:"5px"}}>back</button>
      </div>
      {
        currentGsc && gscs
        ?
        <>
          <h1 className="color-red" style={{margin:"50px auto"}}>{currentGsc.name}'s Database <div className="font-size-small">(updated on the 1st of every month)</div></h1>
          <div className="color-red">Note: This is for your eyes only. Please refrain from viewing or discussing this database with others except for {currentGsc.name}. Thank you for honoring your sisters/brothers!</div>
          <br />
          <div>
            <button className="red-button" style={{padding: "5px 15px", borderRadius:"10px"}} onClick={handleShowPointersModal}>See helpful pointers</button>
          </div>
          <PointersModal
          showPointersModal={showPointersModal}
          handleClosePointersModal={handleClosePointersModal}
          />
          <br />
          <div className="color-red">{currentGsc.name}'s remaining 👋 for this month: {currentGsc.monthly_hellos}</div>
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

