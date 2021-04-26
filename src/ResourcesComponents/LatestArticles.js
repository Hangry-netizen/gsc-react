import React from 'react';
import ArticleCard1 from './Article1/ArticleCard1';
import ArticleCard2 from './Article2/ArticleCard2';
import ArticleCard3 from './Article3/ArticleCard3';

export default function LatestArticles() {
    return (
      <div >
        <h2 className="text-align-left">LATEST</h2>
        <div className="display-flex-wrap">
          <ArticleCard1 />
          <ArticleCard2 />
          <ArticleCard3 />
        </div>
      </div>
    )
}
