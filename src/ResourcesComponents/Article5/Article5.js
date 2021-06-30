import React from 'react';
import ArticleImg5 from '../resources-utils/5.jpg';
import { Link } from 'react-router-dom';
import "../Article.css";

export default function Article5() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className="article-container">
      <h1 className="article-header color-red">Should I talk to more than one person at a time?</h1>
      <div className="color-red flex-space-between italic">
        <div>By Jennifer Gumienny</div>
        <div>May 2021</div>
      </div>
      <hr />
      <div className="text-align-center article-img-div">
        <img src={ArticleImg5} className="article-img" alt="Should I talk to more than one person at a time?"/>
        <div className="font-size-x-small italic">Photo credit: Pavan Trikutam - unsplash</div>
      </div>
      <div className="article-content text-align-justify color-blue">
        <p>So, you’re becoming popular! You’ve received more than one ‘hello’ on MatchesUp… what should you do? Is it wrong to chat with more than one person? What if the newest profile is better than the last one? How can you be ethical and respect your brothers and sisters in Christ, while trying to find the one for you?</p>
        <p>Great questions. We’re glad you asked! First, remember that ‘saying hi’ is simply that - sending a greeting. Responding to a ‘hello’ notification does not commit you into a relationship of any kind, it is simply two human beings beginning a conversation. From there, we at MatchesUp would suggest that it is absolutely fine to talk to more than one person because we promote <span className='color-red italic'>friendship first</span>, and you are both still searching for the specific qualities you want in a life partner, and you won’t know, until you start to get to know one another... BUT, you <span className='italic'>must</span> protect your heart, and the other person’s heart, <span className='italic'>by making sure you are on the same page first!</span></p>
        <p>Basic rule: If you both agree at the beginning that you are just getting to know one another as friends - then YES - talk to more people if you get the chance. If you’ve never asked them what they think, then presume NO - only talk to them until you clear the air. You don’t want to be misunderstood. Best to be safe and talk about it together. </p>
        <p>How do you do this? Early on in your conversation, say something like:</p>
        <div>
          <div className="padding-left-20">🡪 Have you talked to many people on MatchesUp? Are you comfortable chatting with more than one person at a time?</div>
          <div className="padding-left-20">🡪 Hey, I just wanted to check with you, as we are just getting to know one another, it’s okay if we are getting to know others too, right? I want to make sure we are on the same page with that, so there is no misunderstanding.</div>
          <div className="padding-left-20">🡪 I don’t know how you feel about this, but I think I’d be more comfortable if we: both just chatted with each other for a while/were open to chat with others too as we are getting to know one another (as you prefer)</div>
          <div className="padding-left-20">🡪 Just so you know, I’m okay if either of us decide to chat with other people too, because we are just getting to know one another, but I’d prefer if we agreed to let each other know first. Is that ok with you?</div>
        </div>
        <br />
        <p>We understand, this may feel a bit awkward… but consider this: it’s better than the feeling of betrayal and the rumor mill that could start if you or the other person acts differently than expected. The bottom line is, honesty is the best policy. Take proactive, protective steps, and find out where you stand with each other. Then you can proceed with peace of mind and heart.</p>
        <p>Scenario 1: What if they think chatting with more than one person is bad, and I disagree? Sounds like it’s time for a robust conversation - the perfect way to get to know each other’s intentions better! We recommend that you speak up for yourself. If you silently submit to their desire, and hold the disagreement in your heart without voicing it out, you will likely end up resenting them for trapping you… even though it’s your own silence forming the cage. Maybe you could gently explain your perspective (ex. that you believe in friendship first, and taking time to get to know one another without any commitments so you can freely and prayerfully evaluate what God has for this relationship). Hopefully this will help them understand your heart and see that you’re not a ‘player’ just being careless with their emotions. If at the end of the day you choose to disagree, then this likely isn’t the match for you, or at least not the right timing</p>
        <p>Scenario 2: If you’re chatting with a few people but one person is standing out that you’d like to pursue more seriously, then make sure the others know you are chatting with other people. Once you’ve made the decision to open your heart romantically to one, don’t string the others along - it’s not fair to them, and it makes you look bad. Gently and politely let the others know that friendship is all you are interested in, or that you feel God leading you in another direction, and that you wish them the best.</p>
        <p>Because dating culture is different in various churches and communities, it’s best to be clear on the expectations upfront to protect your heart and theirs. Be courageous, and be clear. You won’t regret it!</p>
      </div>
      <hr />
      <div className="display-flex">
        <div className="text-align-left">
          <Link to='/resources/articles/i-received-a-hello-notification' className="color-red hover-blue" onClick={scrollToTop}>🡠 PREVIOUS</Link>
          <div className="color-blue" style={{fontSize:"12px"}}>I received a 'hello' notification... what should I do?</div>
        </div>
        <div className="text-align-right">
          <Link to='/resources/articles/should-i-put-myself-out-there' className="color-red hover-blue" onClick={scrollToTop}>NEXT 🡢</Link>
          <div className="color-blue" style={{fontSize:"12px"}}>Should I put myself out there?</div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
