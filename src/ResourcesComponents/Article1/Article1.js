import React from 'react';
import ArticleImg1 from '../resources-utils/1.png';
import "../Article.css";

export default function Article1() {
  return (
    <div className="article-container">
      <h1 className="article-header color-red text-align-left">Should I put myself out there?</h1>
      <div className="color-red flex-space-between italic">
        <div>By Jennifer Gumienny</div>
        <div>April 2021</div>
      </div>
      <hr />
      <div className="text-align-center article-img-div">
        <img src={ArticleImg1} className="article-img" alt="Should I put myself out there?"/>
        <div className="font-size-x-small italic">Photo credit: Kelly Sikkema - unsplash</div>
      </div>
      <div className="article-content text-align-justify color-blue">
        <p>How do you know if you should click ‘like’ on a profile? Putting yourself out there is risky! What if you get rejected? Or worse, what if they don’t respond at all and leave your heart hanging on a question mark forever… Take a deep breath.</p>
        <p>There’s no doubt that entering the arena of romance requires risk. Love always requires risk. It requires risk at the beginning, and requires risk all the way through when you’re working through the hard parts. But if we remain shy, we remain hidden. If no one reaches out, no one finds love.</p>
        <p>One way to bolster your courage, is to find fellowship with Jesus in the risk of love he took. Jesus took a great risk in coming to earth to offer his life for the sins of mankind. What if humanity rejected him, despite his incredible gift of love? Jesus experienced both acceptance by friends like Peter and John, and rejection from so-called friends like Judas, and the religious leaders meant to teach people about his father. Jesus was very familiar with what rejection felt like. John writes about him, “He came to His own, and those who were His own did not receive Him” Jn 1:11. Isaiah 53:3 says,</p>
        <div className="margin-lr-auto width-400">
          <div>“He was despised and forsaken of men</div>
          <div>A man of sorrows and acquainted with grief;</div>
          <div>And like one from whom men hide their face</div>
          <div>He was despised, and we did not esteem Him.”</div>
        </div>
        <br />
        <p>We can find comfort and strength in fellowshipping with Jesus through our experience of putting ourselves out there. You’re not alone. He understands. Now, hopefully, when you do put yourself out there, you receive a response so you can see where this budding friendship will go. But prepare yourself in advance. Your heart first belongs to God - not to your potential match.</p>
        <p>Remember the end of the story. Why could Jesus handle the rejection he faced? Because he knew the scriptures: “The stone which the builders rejected has become the chief corner stone” Psalm 118:22. He knew that God’s destiny over his life was greater than any rejection from man. The same is true for you. You are loved by your heavenly father, no matter what. And He will never leave you or forsake you. In fact, he will use all of these experiences for your good in the end (Rom. 8:28). So take the risk, and leave the rest in God’s loving hands :)</p>
      </div>
    </div>
  )
}
