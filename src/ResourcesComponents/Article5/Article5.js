import React, { useState, useEffect } from 'react';
import src from '../resources-utils/5.jpg';
import placeholder from '../resources-utils/5-placeholder.jpg';
import { Link } from 'react-router-dom';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import "../Article.css";

export default function Article5() {
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
      <h1 className="article-header color-red">Should I talk to more than one person at a time?</h1>
      <div className="color-red flex-space-between italic">
        <div>By Jennifer Gumienny</div>
        <div>August 2021</div>
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
        <div className="font-size-x-small italic">Photo credit: Pavan Trikutam - unsplash</div>
      </div>
      <div className="article-content text-align-justify color-blue">
        <p>So, you’re becoming popular! You’ve received more than one ‘hi’ on MatchesUp… what should you do? Is it wrong to chat with more than one person? What if the newest profile is more suited to you than the last one? How can you be ethical and respect your brothers and sisters in Christ, while trying to find the one for you?</p>
        <p>Great questions. We’re glad you asked! First, remember that saying ‘hi’ is simply that - sending a greeting. Responding to a ‘hi’ notification is not committing to dating, it is simply a gesture of two human beings beginning a conversation unto a potential friendship. At MatchesUp we always promote <span className="color-red italic">friendship first</span>, as that is the best way to get to know one another and establish a healthy foundation moving forward. Because of this principle, we would suggest that it is absolutely fine to have conversations with more than one person. Imagine yourself at a party, being introduced to many different people, starting many potential friendships. Over time, one of them might become more significant to you, but at first you just have to spend time getting to know people. I mean think about it, you’re on a MatchesUp site - so both parties understand that you are both searching for some specific qualities you want in a life partner but neither of you wants to commit too early before you really know one another. It’s good to pursue <span className="color-red italic">friendship first</span>! It takes the pressure off and is a great way to expand your social circle.</p>
        <p>But how do you make the shift once one friendship begins to have more romantic potential than another? If you’ve decided you’d like to take your friendship to the next level, then make it exclusive and official by formally asking the other person to be your girlfriend/boyfriend. This makes the line clear so there’s no misunderstandings and you are on the same page.</p>
        <p>Also, once you’ve made the decision to open your heart romantically to one person, don’t string others along - it’s not fair to them, and it makes you look bad. Gently and politely let the others you’ve been chatting with know that you appreciate their friendship, but you’ve decided to start dating someone else and that you wish them the best. It’s up to you to decide if you can remain friends or not at this stage. If you guys are truly neutral friends and still wanna connect occasionally - great! But if they have had feelings for you, or the emotional connection line is complicated, it’s probably best to create some space so that your new relationship can find its wings, and other hearts can begin to heal and move on.</p>        
        <p>In summary, YES, please do say hi to more than one person as a gesture towards <span className="color-red italic">friendship first</span>. Over time the Holy Spirit will clarify for you which friend may have long term potential to become a potential spouse. This takes time! In the meantime, make lots of friends - maybe you’ll end up finding some potential spouses not only for yourself, but to set your friends up too!</p>
      </div>
      <hr />
      <div className='display-flex'>
        <div className="text-align-left" style={{maxWidth:"45%"}}>
          <Link to='/resources/articles/i-received-a-hello-notification' className="color-red hover-blue" onClick={scrollToTop}><ArrowBack /> PREVIOUS</Link>
          <div className="color-blue" style={{fontSize:"12px"}}>I received a 'hello' notification... what should I do?</div>
        </div>
        <div className="text-align-right" style={{maxWidth:"45%"}}>
          <Link to='/resources/articles/how-to-break-things-off-well' className="color-red hover-blue" onClick={scrollToTop}>NEXT <ArrowForward /></Link>
          <div className="color-blue" style={{fontSize:"12px"}}>How to break things off well</div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
