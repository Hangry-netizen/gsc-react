import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import src from '../resources-utils/3.png';
import placeholder from '../resources-utils/3-placeholder.png';

export default function ArticleCard3() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  function toArticle3() {
    history.push("/resources/articles/what-if-someone-i-know-says-hi-to-me-and-i-dont-like-them")
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
      <Card className="text-align-left" onClick={toArticle3}>
        <Card.Img className="card-imgs"
          top width="100%"
          height="250px"
          src={currentSrc}
          style={{
            opacity: loading ? 0.5 : 1,
            transition: "opacity .15s linear"
          }}
          alt="What if someone I know 'says hi' to me & I don't like them?"
        />
        <Card.Body className="cards-body">
          <Card.Title>
            <h4>
              What if someone I know <span style={{whiteSpace:"nowrap"}}>'says hi'</span> to me & I don't like them?
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content">
            Ding… email notification! “Another profile has sent you a ‘hi’ on MatchesUp!” Your heart soars, your stomach is full of butterflies, you go to the MatchesUp site on the “People who said hi to me” page… OMG.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
