import React, { useState, useEffect } from 'react';
import src from '../resources-utils/2.png';
import placeholder from '../resources-utils/2-placeholder.png';
import "../Article.css";
import { Link } from 'react-router-dom';

export default function Article2() {
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
      <h1 className="article-header color-red text-align-left">Should I 'say hi' to someone in a different country?</h1>
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
          alt="Should I 'say hi' someone in a different country?"
        />
        <div className="font-size-x-small italic">Photo credit: Alice Yamamura - unsplash</div>
      </div>
      <div className="article-content text-align-justify color-blue">
        <p>These days, international friendships are becoming more and more normal as zoom and insta and so many others help bridge the gap. In one sense, there’s no harm in clicking ‘say hi’ on an international profile as all relationships begin with friendship first. You can chat and get to know one another without much risk. However, if your deepest desire is to find the person you want to spend the rest of your life with, it’s best to ask some additional questions first. As Jesus says, <span className="italic">“Suppose one of you wants to build a tower. Won’t you first sit down and estimate the cost to see if you have enough money to complete it?”</span> (Luke 14:28) It’s wise to consider the implications of the commitments that you are going to make. So let’s consider, what are the implications of giving your heart to someone far away?</p>
        <div className="padding-left-20">
          <div className="italic bold">1) Proximity Pains</div>
          <div className="padding-left-20">Especially for those of us with love languages such as ‘physical touch’ or ‘acts of service’, being at a distance is challenging. You may want to consider how you can adjust your budget to make occasional trips to see the person face to face. Long distance can work, but it takes being creative in how to show care, and extra patience until either one of you is ready to consider relocation. Consider how long you will realistically be happy in this kind of arrangement, and be honest about it, with the person you are pursuing.</div>
          <br />
          <div className="italic bold">2) Relocation Realities</div>
          <div className="padding-left-20">To prepare yourself and ‘count the cost,’ before you click ‘say hi’ on an international profile, ask yourself if you are willing to relocate <span className="italic">if</span> you find the person you want to be with (and check their profile for their willingness to relocate!) Relocating could mean moving to their home country or pursuing God’s call together in a third nation. In either case, it implies a willingness to leave the familiar to pursue what God has for you long term. You don’t have to have a solid ‘yes’ at the beginning, (because thankfully, love and conviction grow over time), but it’s good to consider the reality of the situation before you allow your hearts to bond. If you bond before you answer this question in your own heart, you’re setting yourself up for heart-ache! Even if you are willing to date cross-culturally and expect the other person to relocate, remember that entering into a cross-cultural commitment may require spending seasons of your life together in both places, as you both strive to maintain relationships with family in your home countries. To honor the other person’s heart and needs, and to be true to God’s call on your life, this should be something you consider seriously, before you ‘say hi’.</div>
          <br />
          <div className="italic bold">3) Cultural Contrast</div>
          <div className="padding-left-20">There’s no doubt that each culture comes with it’s own set of values and practices. Dating cross-culturally can be fun and exciting because you get to learn about new ways of thinking and doing things. It can be eye-opening and heart widening for those who approach it with curiosity. If you’re entering into a cross-cultural connection, make sure you are ready to grow and adapt. Even within Asia, family expectations, humor, ways of dealing with conflict, gender roles in the home can vary widely. In some ways it’s ‘easier’ to choose someone who shares your culture, because a lot of the unwritten expectations are already understood. But dating cross-culturally also has its joys and treasures. Just be prepared to ask more questions, and to work harder on self-awareness, open communication, and personal flexibility.</div>
        </div>
        <br />
        <p>Remember, clicking ‘say hi’ doesn’t mean you’re signing a marriage contract! It just means you’re interested in exploring the friendship to see where it goes. It’s okay to reach out if you’re still not sure about the international aspect, just be upfront about it. Honesty is how we protect one another’s hearts along the journey.</p>
      </div>
      <hr />
      <div className='display-flex'>
        <div className="text-align-left" style={{maxWidth:"45%"}}>
          <Link to='/resources/articles/should-i-put-myself-out-there' className="color-red hover-blue" onClick={scrollToTop}>🡠 PREVIOUS</Link>
          <div className="color-blue" style={{fontSize:"12px"}}>Should I put myself out there?</div>
        </div>
        <div className="text-align-right" style={{maxWidth:"45%"}}>
          <Link to='/resources/articles/what-if-someone-i-know-says-hi-to-me-and-i-dont-like-them' className="color-red hover-blue" onClick={scrollToTop}>NEXT 🡢</Link>
          <div className="color-blue" style={{fontSize:"12px"}}>What if someone I know 'says hi' to me & I don't like them?</div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
