import React from 'react';
import LatestArticles from '../ResourcesComponents/LatestArticles'
import "../ResourcesComponents/ResourcesPage.css"

export default function ResourcesPage() {
  return (
    <div id="resources-page-container" className="color-red text-align-center">
      <h1 id="resources-page-header">RESOURCES</h1>
      <div id="resources-page-desc" className="color-blue">At MatchesUp, we want to support you in developing happy, healthy relationships. There is a way to relate well, whether you are beginning, sustaining, or ending a relationship. We hope these articles serve you, as you serve one another. (More articles will be added in the days to come.)</div>
      <hr style={{margin:"30px 0"}}/>
      <LatestArticles />
    </div>
  )
}