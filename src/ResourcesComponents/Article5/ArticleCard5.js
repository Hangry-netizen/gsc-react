import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ArticleImg5 from '../resources-utils/5.jpg';

export default function ArticleCard5() {
  const history = useHistory();

  function toArticle5() {
    history.push("/resources/articles/should-i-talk-to-more-than-one-person-at-a-time")
    window.scrollTo(0,0)
  }

  return (
    <div className="article-card blue">
      <Card className="text-align-left" onClick={toArticle5}>
        <Card.Img top width="100%" src={ArticleImg5} alt="Should I talk to more than one person at a time?" />
        <Card.Body style={{boxSizing:"border-box", height:"50%"}}>
          <Card.Title>
            <h4>
            Should I talk to more than one person at a time?
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content">
            So, you’re becoming popular! You’ve received more than one ‘hello’ on MatchesUp… what should you do?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
