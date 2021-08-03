import React, { useState, useEffect } from 'react';
import src from '../resources-utils/4.jpg';
import placeholder from '../resources-utils/4-placeholder.jpg';
import { Link } from 'react-router-dom';
import "../Article.css";

export default function Article4() {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setLoading(false);
      updateSrc(src)
    }
  }, [])

  return (
    <div className="article-container">
      <h1 className="article-header color-red">I received a 'hello' notification... what should I do?</h1>
      <div className="color-red flex-space-between italic">
        <div>By Jennifer Gumienny</div>
        <div>May 2021</div>
      </div>
      <hr />
      <div className="text-align-center article-img-div">
        <img
          src={currentSrc}
          className="article-img"
          style={{
            opacity: loading ? 0.5 : 1,
            transition: "opacity .15s linear"
          }}
          alt="I received a 'hello' notification... what should I do?"
        />
        <div className="font-size-x-small italic">Photo credit: Drew Beamer - unsplash</div>
      </div>
      <div className="article-content text-align-justify color-blue">
        <p>Someone has found your profile interesting enough that they’ve decided to take the risk and ‘say hi!’ The ball is in your court…. What will you do?</p>
        <div>
          <div>Option 1: say hi, back.</div>
          <div>Option 2: hide in shock and fear, and ignore the poor soul who put themselves out there :(</div>
          <div>Option 3: politely decline.</div>
        </div>
        <br />
        <p>Let’s just get Option 2 out of the way first - DON’T DO THAT. We are all brothers and sisters in Christ, and ignoring or ghosting, does not show care for their heart or the risk they took for you. We strongly encourage you to respond in some way and fairly promptly. It shows maturity, courage, honor, and care.</p>
        <p>But how to respond?? First, take a good look at their profile. Make a note of the things you like, and the unanswered questions you’d like to know first. Observe their location and consider the implications if long-distance is an issue (<span className="italic">maybe read our article: <Link to="/resources/articles/should-i-say-hi-to-someone-in-a-different-country" className="color-red red-link underline">Should I ‘Say Hi’ to Someone in a Different Country?</Link></span>) If there’s enough there to interest you, we strongly encourage you to choose Option 1: say hi back. Maybe you’ll make a great friend, or maybe it’ll go further. How you ‘say hi’, is up to you… whether via text or email or phone call, a simple message can go a long way. Stuck for words?? Maybe something like this:</p>
        <div>
          <p className="padding-left-20">• Hi. I received your ‘hi’ on MatchesUp. Your profile also looks interesting to me, maybe we should chat a bit more.</p>
          <p className="padding-left-20">• Thanks for sending a ‘hi’ from the MatchesUp site. I also took a look at your profile and had a couple of questions…  (<span className="italic">proceed to ask your questions</span>).</p>
          <p className="padding-left-20">• Hello. Thanks for your interest in my profile. Maybe we could set up a zoom call later this week to get to know one another as friends first.</p>
        </div>
        <br />
        <p>From there, let it flow naturally. Hopefully you’ll communicate back and forth for a while, focusing on getting to know one another at a deeper level first. At MatchesUp we notice that <span className="color-red">friendship comes first</span> in all the best relationships. So leave the flirting and romancing to the side, until you’ve strongly established this person is really suited to you, that over time there are no ‘red flags’, and they seem worthy to be considered as a life-long partner.</p>
        <p>Option 3: Politely decline. You may choose to decline for several reasons - maybe you’re just too busy to start a new friendship, or maybe you’re already chatting with someone else and it has already taken a romantic turn. It wouldn’t be fair to string another along if you’re already getting serious elsewhere (<span className="italic">read more about this in our article - <Link to="/resources/articles/should-i-talk-to-more-than-one-person-at-a-time" className="color-red red-link underline">Should I Talk to More Than One Person at a Time?</Link></span>). Honesty is the best policy. Say something like:</p>
        <div>
          <p className="padding-left-20">• Thanks so much for your ‘hi’ on MatchesUp. I’m honored you liked my profile. This isn’t about you, but I am not available at the moment to pursue further conversation. If things change, I’ll get back to you. Thanks again for your interest.</p>
          <p className="padding-left-20">• I just wanted to acknowledge the notification I received that you liked my profile. While I’m honored, this is not something I feel to pursue at this time. I wish you all the best in your search for who God has for you.</p>
        </div>
        <br />
        <p>Whatever your reason is, take time to acknowledge their interest, and be kind without being dishonest. Wouldn’t you appreciate sensitivity and also honesty? Do likewise. And if you are in a season where you aren’t available for more friendships or matches, please do the community a favor and ‘hide’ your profile on your MatchesUp profile page. This is temporary, so no one can see your profile, until you choose to make yourself available again. </p>
        <p>So, don’t hesitate. Take action. Don’t leave their ‘hello’ hanging… go right now and respond so each person can happily continue with their matchmaking journey.</p>
      </div>
      <hr />
      <div className='display-flex'>
        <div className="text-align-left" style={{maxWidth:"45%"}}>
          <Link to='/resources/articles/what-if-someone-i-know-says-hi-to-me-and-i-dont-like-them' className="color-red hover-blue" onClick={scrollToTop}>🡠 PREVIOUS</Link>
          <div className="color-blue" style={{fontSize:"12px"}}>What if someone I know 'says hi' to me & I don't like them?</div>
        </div>
        <div className="text-align-right" style={{maxWidth:"45%"}}>
          <Link to='/resources/articles/should-i-talk-to-more-than-one-person-at-a-time' className="color-red hover-blue" onClick={scrollToTop}>NEXT 🡢</Link>
          <div className="color-blue" style={{fontSize:"12px"}}>Should I talk to more than one person at a time?</div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
