import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ArticleImg4 from '../resources-utils/4.jpg';

export default function ArticleCard4() {
  const history = useHistory();

  function toArticle4() {
    history.push("/resources/articles/i-received-a-hello-notification")
    window.scrollTo(0,0)
  }

  return (
    <div className="article-card blue">
      <Card className="text-align-left" onClick={toArticle4}>
        <Card.Img top width="100%" src={ArticleImg4} alt="I received a 'hello' notification... what should I do" />
        <Card.Body style={{boxSizing:"border-box", height:"50%"}}>
          <Card.Title>
            <h4>
              I received a 'hello' notification... what should I do?
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content" style={{paddingBottom:"70px"}} >
            Someone has found your profile interesting enough that they’ve decided to take the risk and ‘say hi!’ The ball is in your court…. What will you do?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
