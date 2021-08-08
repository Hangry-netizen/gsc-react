import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import src from '../resources-utils/2.png';
import placeholder from '../resources-utils/2-placeholder.png';

export default function ArticleCard2() {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  const history = useHistory();

  function toArticle2() {
    history.push("/resources/articles/should-i-say-hi-to-someone-in-a-different-country")
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
      <Card className="text-align-left" onClick={toArticle2}>
        <Card.Img className="card-imgs"
          width="100%"
          height="250px"
          src={currentSrc}
          style={{
            opacity: loading ? 0.5 : 1,
            transition: "opacity .15s linear"
          }}
          alt="Should I 'say hi' to someone in a different country?" name="Should I 'say hi' to someone in a different country?" />
        <Card.Body className="cards-body">
          <Card.Title>
            <h4>
              Should I 'say hi' to someone in a different country?
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content">
            These days, international friendships are becoming more and more normal as zoom and insta and so many others help bridge the gap.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
