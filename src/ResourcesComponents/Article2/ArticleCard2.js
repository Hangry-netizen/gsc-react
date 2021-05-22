import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ArticleImg2 from '../resources-utils/2.png'

export default function ArticleCard2() {
  const history = useHistory();

  function toArticle2() {
    history.push("/resources/articles/should-i-say-hi-someone-in-a-different-country")
    window.scrollTo(0,0)
  }

  return (
    <div className="article-card blue">
      <Card className="text-align-left" onClick={toArticle2}>
        <Card.Img top width="100%" src={ArticleImg2} alt="Should I 'say hi' someone in a different country?" name="Should I 'say hi' someone in a different country?" />
        <Card.Body>
          <Card.Title>
            <h4>
              Should I 'say hi' someone in a different country?
            </h4>
          </Card.Title>
          <Card.Text className="color-blue article-content">
          Finding the person you want to spend the rest of your life with, is a big deal. Sometimes we need to look beyond our immediate circle, but how far should we look?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
