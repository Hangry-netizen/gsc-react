import React from 'react';
import ArticleImg3 from '../resources-utils/3.png';
import "../Article.css";
import { Link } from 'react-router-dom';

export default function Article3() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className="article-container">
      <h1 className="article-header color-red">What if someone I know 'says hi' to me & I don't like them?</h1>
      <div className="color-red flex-space-between italic">
        <div>By Jennifer Gumienny</div>
        <div>May 2021</div>
      </div>
      <hr />
      <div className="text-align-center article-img-div">
        <img src={ArticleImg3} className="article-img" alt="Should I put myself out there?"/>
        <div className="font-size-x-small italic">Photo credit: Tim Mossholder - unsplash</div>
      </div>
      <div className="article-content text-align-justify color-blue">
        <p>Ding… email notification! “Another profile has sent you a ‘hi’ on MatchesUp!” Your heart soars, your stomach is full of butterflies, you go to the MatchesUp site on the “People who said hi to me” page… OMG. It’s the name of someone you <span className="italic">know</span>! And it’s someone you <span className="italic">don’t</span> like. What you do next, says a lot about who you are.</p>
        <p>The easy way out? On your HELLO page, simply click “remove” beside their profile on the “People who said hi to me” list. It will remove their profile from both your list and their “People I said hi to” list, so they’ll subtly get the message. But what happens when you see that person on the street? Awkward. To avoid this, choose the higher path.</p>
        <p>The higher path: honor them by personally addressing their effort to ‘say hi’. They put themselves out there. Consider how you would feel if you were in their shoes… how would you prefer to be turned down, so that it wasn’t awkward later. What would make you feel seen, validated, and honored in the process? You might consider something like this: “Hey - I just received your MatchesUp notification. I’m so honored you were interested in my profile. (<span className="italic">Then be honest and kind!</span>) I don’t want this to be weird, but I don’t think that we would make a great match. I genuinely wish you the best in your search for who God has for you, and I hope we can still be on good terms when we see each other again. Your friend in Christ…” Phew! A simple message can do a lot of good… it shows respect, consideration, encouragement, and addresses the elephant in the room of what will happen when you see each other. Find the right words for you. Ask the Holy Spirit for wisdom - he knows the heart of the other person.</p>
        <p>The challenge: remember, you can never judge a book by it’s cover. Even if you’ve known this person, or don’t feel immediately attracted, pause before you respond. Give yourself 24 hours to pray and ask God about it. Consider the compatibility of their profile and not just the impression of the person that you’ve already formed. Would you be willing to have a few more conversations with them on a friendship level so you can get to know them a little deeper than before, in order to make a truly informed decision? Many successfully married couples can attest to the fact that they weren’t attracted at first, or they disliked each other, only to find out there were true pearls inside that person, so valuable that it was  worth it to buy the whole field! Don’t judge prematurely. And whatever you do, honor the other person, and treat them the way you would want to be treated.</p>
      </div>
      <hr />
      <div className='display-flex'>
        <div className="text-align-left">
          <Link to='/resources/articles/should-i-say-hi-to-someone-in-a-different-country' className="color-red hover-blue" onClick={scrollToTop}>🡠 PREVIOUS</Link>
          <div className="color-blue" style={{fontSize:"12px"}}>Should I 'say hi' to someone in a different country?</div>
        </div>
        <div className="text-align-right">
          <Link to='/resources/articles/i-received-a-hello-notification' className="color-red hover-blue" onClick={scrollToTop}>NEXT 🡢</Link>
          <div className="color-blue" style={{fontSize:"12px"}}>I received a 'hello' notification... what should I do?</div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
