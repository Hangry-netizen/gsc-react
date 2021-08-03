import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import src from '../resources-utils/4.jpg';
import placeholder from '../resources-utils/4-placeholder.jpg';


export default function ArticleCard4() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  function toArticle4() {
    history.push("/resources/articles/i-received-a-hello-notification")
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
      <Card className="text-align-left" onClick={toArticle4}>
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
              I received a 'hello' notification... what should I do?
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content">
            Someone has found your profile interesting enough that they’ve decided to take the risk and ‘say hi!’ The ball is in your court…. What will you do?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
