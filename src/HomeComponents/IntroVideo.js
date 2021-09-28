import React from 'react'

export default function IntroVideo() {
  return (
    <div className="bg-blue text-align-center" style={{border:"none", paddingTop:"2vw", paddingBottom:"2vw"}}>
      <div style={{boxSizing:"content-box", border:"none"}}>
        <iframe
          id="intro-video"
          src="https://www.youtube.com/embed/b4YhnrnWBgo"
          title="Introducing MatchesUp"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  )
}
