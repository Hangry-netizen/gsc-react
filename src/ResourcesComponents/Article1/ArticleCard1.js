import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import src from '../resources-utils/1.jpg';
import placeholder from '../resources-utils/1-placeholder.jpg';

export default function ArticleCard1() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  function toArticle1() {
    history.push("/resources/articles/should-i-put-myself-out-there")
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
      <Card className="text-align-left" onClick={toArticle1}>
        <Card.Img
          width="100%"
          height="250px"
          src={currentSrc}
          style={{
            opacity: loading ? 0.5 : 1,
            transition: "opacity .15s linear"
          }}
          alt="Should I put myself out there?"
        />
        <Card.Body style={{boxSizing:"border-box", height:"300px"}}>
          <Card.Title>
            <h4>
              Should I put myself out there?
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content">
            How do you know if you should click ‘say hi’ on a profile? Putting yourself out there is risky! What if you get rejected? Or worse, what if they don’t respond at all and leave your heart hanging on a question mark forever…
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
