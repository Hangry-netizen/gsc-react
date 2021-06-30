import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ArticleImg2 from '../resources-utils/2.png'

export default function ArticleCard2() {
  const history = useHistory();

  function toArticle2() {
    history.push("/resources/articles/should-i-say-hi-to-someone-in-a-different-country")
    window.scrollTo(0,0)
  }

  return (
    <div className="article-card blue">
      <Card className="text-align-left" onClick={toArticle2}>
        <Card.Img width="100%" src={ArticleImg2} alt="Should I 'say hi' to someone in a different country?" name="Should I 'say hi' to someone in a different country?" />
        <Card.Body style={{boxSizing:"border-box", height:"50%"}}>
          <Card.Title>
            <h4>
              Should I 'say hi' to someone in a different country?
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content" style={{paddingBottom:"55px"}}>
            These days, international friendships are becoming more and more normal as zoom and insta and so many others help bridge the gap.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
