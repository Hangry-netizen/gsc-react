import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import src from '../resources-utils/5.jpg';
import placeholder from '../resources-utils/5-placeholder.jpg';

export default function ArticleCard5() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  function toArticle5() {
    history.push("/resources/articles/should-i-talk-to-more-than-one-person-at-a-time")
    window.scrollTo(0,0)
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
    <div className="article-card blue">
      <Card className="text-align-left" onClick={toArticle5}>
        <Card.Img 
          top width="100%"
          height="250px"
          src={currentSrc}
          style={{
            opacity: loading ? 0.5 : 1,
            transition: "opacity .15s linear"
          }}
          alt="I received a 'hello' notification... what should I do"
        />
        <Card.Body style={{boxSizing:"border-box", height:"300px"}}>
          <Card.Title>
            <h4>
              Should I talk to more than one person at a time?
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content">
            So, you’re becoming popular! You’ve received more than one ‘hi’ on MatchesUp… what should you do?  Is it wrong to chat with more than one person?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
