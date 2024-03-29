import React from 'react';
import { Link } from 'react-router-dom';
import MatchesUpLogo from "../utils/MatchesUpLogo.png"

export default function Introduction() {
  return (
    <div id="introduction" className="bg-beach homepage-container-padding">
      <div id="intro-flex">
        <div className="text-align-right">
          <img src={MatchesUpLogo} alt="MatchesUpLogo" id="matchesup-logo-intro" />
        </div>
        <div>
          <iframe
            id="intro-video-laptop"
            src="https://www.youtube.com/embed/b4YhnrnWBgo?autoplay=1&mute=1&rel=0"
            title="Introducing MatchesUp"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
          >
          </iframe>
          <br />
          <br />
          <div id="what-is-matches-up-title" className="text-align-right color-blue bold">What is MatchesUp?</div>
          <div className="text-align-right color-blue Essays1743">Finally! A matchmaking site where community matters...</div>
        </div>
      </div>
      <br />
      <p className="color-red text-align-justify">
      MatchesUp (/Match-us-up/) is a Christian matchmaking site, based in South East Asia, with a uniquely Asian approach. We believe in the value of community input, of friends helping friends find a suitable match. It can be intimidating and vulnerable to put your personal data on a generic public dating site, and even harder to sift through the masses to find a good quality partner. But what if your friends could help you not only create an anonymous profile (identified not by name or picture but simply by your biodata), and also recommend suitable matches for you, and encourage you in your matchmaking journey? And what if this site had three high-priority filters:
      </p>
      <div id="for-people" className="color-red text-align-justify">
        <p className="padding-left">1) Good Single Christian’s (GSC’s) welcomed by friend referral only (peer to peer filter!)</p>
        <p className="padding-left">2) Only for those who acknowledge that their spiritual walk with Jesus is very important to them (not optional or just for show!)</p>
        <p className="padding-left">3) Designed for those who are serious about pursuing a genuine friendship in hopes that it might result in a lasting committed romantic relationship (this is not a casual hook-up site!)</p>
      </div>
      <p className="color-red text-align-left">We hope this inspires you to say, “Match us up!” </p>
      <br />
      <div id="to-cover-cost" className="color-blue text-align-left">
        To cover our cost of running this service, we ask for a small donation of a minimum of RM5 / SGD3 / PHP50 /THB40 for each GSC profile created. <Link to="/donation-info" id="donation-info-link">See donation info.</Link> Thank you for helping us maintain this service for the body of Christ!
      </div>
    </div>
  )
}
