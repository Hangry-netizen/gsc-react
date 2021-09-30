import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import src from '../resources-utils/6.jpg';
import placeholder from '../resources-utils/6-placeholder.jpg';

export default function ArticleCard6() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  function toArticle6() {
    history.push("/resources/articles/how-to-break-things-off-well")
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
      <Card className="text-align-left" onClick={toArticle6}>
        <Card.Img className="card-imgs"
          top width="100%"
          height="250px"
          src={currentSrc}
          style={{
            opacity: loading ? 0.5 : 1,
            transition: "opacity .15s linear"
          }}
          alt="You’ve walked a few miles together, but you’ve become clear that it’s best to take separate paths…"
        />
        <Card.Body className="cards-body">
          <Card.Title>
            <h4>
              How to break things off well
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content">
            You’ve walked a few miles together, but you’ve become clear that it’s best to take separate paths… how do you turn someone down without crushing them or offending them? Is there a way to break things off in a God-honoring, healthy way?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
