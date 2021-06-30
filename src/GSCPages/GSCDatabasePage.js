import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { url } from '../App';
import DatabaseTable from '../GSCComponents/GSCDatabaseComponents/DatabaseTable';
import PointersModal from '../GSCComponents/GSCDatabaseComponents/PointersModal';
import "../GSCComponents/GSCDatabaseComponents/GSCDatabasePage.css"

export default function GSCDatabasePage() {
  let history = useHistory();
  const { uuid } = useParams();
  const [currentGsc, setCurrentGsc] = useState({});
  const [gscs, setGscs] = useState([]);
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

    axios.get(`${url}/gscs/database-display/${uuid}`)
      .then((response) => {
        setGscs(response.data)
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
    <div id="database-page-container">
      <div className="text-align-left" style={{marginTop:"20px"}}>
        <button className="red-button" onClick={backToProfile} style={{padding:"5px 15px", borderRadius:"5px"}}>back</button>
      </div>
      {
        currentGsc && gscs
        ?
        <>
          <h1 className="color-red" style={{margin:"50px auto"}}>Database Page</h1>
          <div className="color-red">Note: This is for your eyes only. Please refrain from viewing or discussing this database with others except your Faithful Friend who signed you up. Thank you for honoring your sisters/brothers!</div>
          <br />
          <div>
            <button className="red-button" style={{padding: "5px 15px", borderRadius:"10px"}} onClick={handleShowPointersModal}>See helpful pointers</button>
          </div>
          <PointersModal
          showPointersModal={showPointersModal}
          handleClosePointersModal={handleClosePointersModal}
          />
          <br />
          <div className="color-red">Your remaining 👋 for this month: {currentGsc.monthly_hellos}</div>
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
