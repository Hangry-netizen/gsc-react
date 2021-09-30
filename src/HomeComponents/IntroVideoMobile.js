import React from 'react'

export default function IntroVideoMobile() {
  return (
    <div id="intro-video-div" className="text-align-center">
      <div style={{boxSizing:"border-box", border:"none"}}>
        <iframe
          id="intro-video"
          src="https://www.youtube.com/embed/b4YhnrnWBgo?autoplay=1&mute=1&rel=0"
          title="Introducing MatchesUp"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; autoplay"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  )
}
