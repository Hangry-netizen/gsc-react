import React from 'react';
import ArticleCard1 from './Article1/ArticleCard1';
import ArticleCard2 from './Article2/ArticleCard2';
import ArticleCard3 from './Article3/ArticleCard3';
import ArticleCard4 from './Article4/ArticleCard4';
import ArticleCard5 from './Article5/ArticleCard5';
import ArticleCard6 from './Article6/ArticleCard6';

export default function LatestArticles() {
    return (
      <div>
        <h2 className="text-align-left">LATEST</h2>
        <div className="display-flex-wrap">
          <ArticleCard6 />
          <ArticleCard5 />
          <ArticleCard4 />
          <ArticleCard3 />
          <ArticleCard2 />
          <ArticleCard1 />
        </div>
      </div>
    )
}
