import React, { useState, useEffect } from 'react';
import src from '../resources-utils/6.jpg';
import placeholder from '../resources-utils/6-placeholder.jpg';
import { Link } from 'react-router-dom';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import "../Article.css";

export default function Article6() {
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
      <h1 className="article-header color-red">How to break things off well</h1>
      <div className="color-red flex-space-between italic">
        <div>By Jennifer Gumienny</div>
        <div>October 2021</div>
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
        <div className="font-size-x-small italic">Photo credit: Kelly Sikkema - unsplash</div>
      </div>
      <div className="article-content text-align-justify color-blue">
        <p>You’ve walked a few miles together, but you’ve become clear that it’s best to take separate paths… how do you turn someone down without crushing them or offending them? Is there a way to break things off in a God-honoring, healthy way? Yes, yes there is. </p>
        
        <p>First, let’s consider what not to do:</p>
        <div className="underline">Non God-honoring ways:</div>
        <div className="padding-left-20">- <span className="bold">Ghost them</span> - just stop responding without any explanation (Ouch!)</div>
        <div className="padding-left-20">- <span className="bold">Lie about it</span> - make up excuses that aren’t really true (WWJD?!)</div>
        <div className="padding-left-20">- <span className="bold">Send a blunt text</span> - “it’s over” “I’m dating someone else” “I don’t like you” (Rude.)</div>

        <p>There are better ways. They take courage, but they display the honesty of Christ, and consideration for the other person’s feelings. Afterall, “treat others as you want to be treated” - right?? Take a moment to think about that. If they were breaking up with you, how would you want them to do it?</p>
        
        <div className="underline">Ideal God-honoring ways:</div>
        <div className="padding-left-20">- <span className="bold">Face to face</span> - this shows value for them and how far you’ve come. It takes away room for miscommunication and gives them space to respond to you in person. It may help them to talk it through. Give them this chance. </div>
        <div className="padding-left-20">- <span className="bold">Phone call </span> - still better than text, because they can hear your tone of voice, which will hopefully have caring sensitivity in it. It’s never easy being dumped. Aim to help them receive the message well. </div>
        <div className="padding-left-20">- <span className="bold">Letter or long-typed message</span> - If you prefer to write your feelings, to give you and the other person space before actually talking about it in person, that’s ok too. But be sure to invite them to respond. You’ve had a two way relationship up to this point, and ending it, has to be a two-way conversation too - or else it’s like getting a door slammed in your face! </div>

        <p>But what to say?!?!</p>
        <p className="padding-left-20">1) Before you say anything, be really clear in your own self what you are feeling and why. This will give you strength and clarity when you open up to them. It may help to write down your reasons on paper so you can see them for yourself.</p>
        <p className="padding-left-20">2) Ask your friends to pray for you! These are tricky moments, and we need all the help we can get!</p>
        <p className="padding-left-20">3) Be straight with them - give them your ‘headline’ (a gentle headline) so they get the gist of where you’re going, and then get into more detail. For example, “I wanted to talk about our relationship because I’m not sure it’s going where I want to go” or “I’ve recently become clear on a few things that may affect things moving forward”.</p>
        <p className="padding-left-20">4) Address the feelings in the room: “That might make you nervous to hear, but hear me out, and then I’d like to hear what you think too” or “This is hard to say, so I hope you’ll hear this with an open heart”. This just helps everybody ready themselves, and accept the message with openness.</p>
        <p className="padding-left-20">5) Tell them briefly about your journey towards arriving at this clarity. “I’ve been praying about this for some time now…” / “I haven’t been able to put my finger on it until recently…” </p>
        <p className="padding-left-20">6) Make it about you, not about them. “I’ve realized that I am looking for something different…” / “I feel my future is taking me in a different direction” / “I think we’re both good people, but maybe not meant for one another.”</p>
        <p className="padding-left-20">7) Don’t criticize their faults or communicate that they weren’t good enough for you. Those kinds of messages are really hard to recover from. So choose your words carefully. Honesty should be given responsibly, and with consideration. Be gentle and maybe even vague at first. They can ask for details later if they really want to know.</p>
        <p className="padding-left-20">8) Be clear on what you're asking. “So I think it’s best if we take some space and don’t talk for a while” / “So I’d like to be friends, but not pursue a romantic path” / “So I think it’s best if we take different paths from here.”</p>
        <p className="padding-left-20">9) Reassure them. “I believe God has someone for each of us. I don’t want to stand in the way or delay that process.” / “I really hope you find someone great for you, because you have a lot going for you. I just don’t think that person is me”.  Offer honest praise and thanks (not ingenuine fluff) for what you’ve experienced together. Something like, “I want you to know, that I’ve really enjoyed (getting to know you/our conversations/your friendship)…. And I think you’ll make a great match for someone because, (your taste in food, your sense of humor) etc.” Be generous here - these words are what’s going to help them get through the next week of feeling low! End with “I hope you understand”.</p>
        <p className="padding-left-20">10) Let them respond. Whether this happens now or at a later date is up to them, but do allow them to respond. It helps them process, understand and move on clearly without baggage. Respond to them kindly, with respect and gentle truth.</p>
        <p className="padding-left-20">11) Once you can both respond respectfully, and come to an acceptance of the new path moving forward, consider sharing forgiveness and speaking a blessing over them, this is the ideal way to end a relationship!  Ask them “Please forgive me for anything I’ve done that may have hurt you in our relationship. I don’t want any bad feelings moving forward”. (Hopefully they’ll offer the same). Then bless them: “Thanks for the opportunity to get to know you. God bless you. I really wish you the best”. Maybe even pray together, giving your futures to God.</p>
        <br />
        <p>Can you hear the angels singing? No offended hearts here! But two people that were made better by their friendship, honoring each other as they take a new path to continue their search for their match.</p>
      </div>
      <hr />
      <div className='display-flex'>
        <div className="text-align-left" style={{maxWidth:"45%"}}>
          <Link to='/resources/articles/should-i-talk-to-more-than-one-person-at-a-time' className="color-red hover-blue" onClick={scrollToTop}><ArrowBack /> PREVIOUS</Link>
          <div className="color-blue" style={{fontSize:"12px"}}>Should I talk to more than one person at a time?</div>
        </div>
        <div className="text-align-right" style={{maxWidth:"45%"}}>
          <Link to='/resources/articles/should-i-put-myself-out-there' className="color-red hover-blue" onClick={scrollToTop}>NEXT <ArrowForward /></Link>
          <div className="color-blue" style={{fontSize:"12px"}}>Should I put myself out there?</div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
