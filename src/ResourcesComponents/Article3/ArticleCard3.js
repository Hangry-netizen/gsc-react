import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ArticleImg3 from '../resources-utils/3.png';

export default function ArticleCard3() {
  const history = useHistory();

  function toArticle3() {
    history.push("/resources/articles/what-if-someone-i-know-says-hi-to-me-and-i-dont-like-them")
    window.scrollTo(0,0)
  }

  return (
    <div className="article-card blue">
      <Card className="text-align-left" onClick={toArticle3}>
        <Card.Img top width="100%" src={ArticleImg3} alt="What if someone I know 'says hi' to me & I don't like them?" />
        <Card.Body style={{boxSizing:"border-box", height:"50%"}}>
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
