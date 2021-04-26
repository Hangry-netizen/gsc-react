import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ArticleImg1 from '../resources-utils/1.png'

export default function ArticleCard1() {
  const history = useHistory();

  function toArticle1() {
    history.push("/resources/articles/should-i-put-myself-out-there")
    window.scrollTo(0,0)
  }

  return (
    <div className="article-card blue">
      <Card className="text-align-left" onClick={toArticle1}>
        <Card.Img top width="100%" src={ArticleImg1} alt="Should I put myself out there?" name="Should I put myself out there?" />
        <Card.Body>
          <Card.Title>
            <h4>
              Should I put myself out there?
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content">
            How do you know if you should click ‘like’ on a profile? Putting yourself out there is risky! What if you get rejected? Or worse, what if they don’t respond at all and leave your heart hanging on a question mark forever…
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
