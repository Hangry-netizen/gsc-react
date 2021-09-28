import React, { useState, useEffect } from 'react';
import DatabaseModal from './DatabaseModal';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#3a3a3a',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#464646',
    },
  },
}))(TableRow);

export default function DatabaseRow({ StyledTableCell, gsc, currentGsc, ageOptions }) {
  const [showGscModal, setShowGscModal] = useState(false);
  const [personality, setPersonality] = useState("")
  const [ageRange, setAgeRange] = useState("")

  const handleCloseGscModal = () => setShowGscModal(false);
  const handleShowGscModal = () => setShowGscModal(true);

  let current_year = new Date().getFullYear()
  let age = current_year - gsc.year_of_birth
  
  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    ageOptions.map(minAge => {
      let maxAge = minAge + 2
      if ( age >=  minAge && age < maxAge + 1) {
        setAgeRange(`${minAge} - ${maxAge}`)
      }
    })
  })

  useEffect(() => {
    if (gsc.mbti !== "") {
      setPersonality(`${gsc.mbti}`)
    }
    if (gsc.enneagram !== "") {
      setPersonality(existing => `${existing} Enneagram: ${gsc.enneagram}`)
    }
    if (gsc.disc !== "") {
      setPersonality(existing => `${existing} ${gsc.disc}`)
    }
    if (gsc.strengths_finder !== "") {
      setPersonality(existing => `${existing} ${gsc.strengths_finder}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StyledTableRow onClick={handleShowGscModal}>
        <StyledTableCell className="text-align-center" style={{fontSize: "large"}}>
          {
            gsc.action === "said_hi" || gsc.action === "hi_recipient"
            ?
            <span>👋 </span>
            :
            null
          }
          {
            currentGsc.suggested
            ?
            <>
            {
              currentGsc.suggested.includes(gsc.id)
              ?
              <span>🔍 </span>
              :
              null
            }
            </>
            :
            null
          }
          {
            currentGsc.maybe
            ?
            <>
            {
              currentGsc.maybe.includes(gsc.id)
              ?
              <span>🤔 </span>
              :
              null
            }
            </>
            :
            null
          }
        </StyledTableCell>
        <StyledTableCell className="sticky-left" style={{background:'#1e365c'}}>{gsc.alias}</StyledTableCell>
        <StyledTableCell className="text-align-center">{ageRange}</StyledTableCell>
        <StyledTableCell>{gsc.city}, {gsc.country}</StyledTableCell>
        <StyledTableCell style={{whiteSpace:'nowrap'}}>Town: {gsc.moving_to_a_different_town}%,<br /> Country: {gsc.moving_to_a_different_country}%</StyledTableCell>
        <StyledTableCell>{gsc.height}</StyledTableCell>
        <StyledTableCell>{gsc.languages}</StyledTableCell>
        <StyledTableCell>{gsc.nationality}</StyledTableCell>
        <StyledTableCell>{gsc.descriptive_words}</StyledTableCell>
        <StyledTableCell>{personality}</StyledTableCell>
        <StyledTableCell>{gsc.church_background}</StyledTableCell>
        <StyledTableCell>{gsc.spiritual_maturity}</StyledTableCell>
        <StyledTableCell>{gsc.spiritual_gifts}</StyledTableCell>
        <StyledTableCell>{gsc.reasons_gscf_makes_a_good_partner}</StyledTableCell>
        <StyledTableCell>{gsc.good_match_for_gscf}</StyledTableCell>
        <StyledTableCell>{gsc.what_is_important_to_me}</StyledTableCell>
      </StyledTableRow>
      <DatabaseModal
        gsc={gsc}
        showGscModal={showGscModal}
        handleCloseGscModal={handleCloseGscModal}
        personality={personality}
        currentGsc={currentGsc}
        action={gsc.action}
      />
    </>
  )
}
