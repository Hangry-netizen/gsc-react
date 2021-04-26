import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Resources() {
  let history = useHistory()
  const handleShowResources = () => {
    history.push("/resources")
    window.scrollTo(0,0)
  }
  
  return (
    <div id="resources" className="bg-beach text-align-center homepage-container-padding">
      <div className="color-blue semibold">Check out our resources to help you know how to start, sustain or end your connection!</div>
      <button id="resources-btn" className="red-button" onClick={handleShowResources}>RESOURCES</button>
    </div>
  )
}
