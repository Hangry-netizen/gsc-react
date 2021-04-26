import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ArticleImg3 from '../resources-utils/3.png';

export default function ArticleCard3() {
  const history = useHistory();

  function toArticle3() {
    history.push("/resources/articles/what-if-i-receive-a-like-from-someone-I'm-not-interested-in")
    window.scrollTo(0,0)
  }

  return (
    <div className="article-card blue">
      <Card className="text-align-left" onClick={toArticle3}>
        <Card.Img top width="100%" src={ArticleImg3} alt="What if I receive a 'like' from someone I'm not interested in..." name="What if I receive a 'like' from someone I'm not interested in..." />
        <Card.Body>
          <Card.Title>
            <h4>
              What if I receive a 'like' from someone I'm not interested in...
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content">
          Ding… email notification! “You’ve received a ‘like’ on MatchesUp!” Your heart soars, your stomach is full of butterflies, you open the email… OMG. It’s the name of someone you know! And it’s someone you don’t like. What you do next, says a lot about who you are.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
