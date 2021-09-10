import React, { useState, useEffect } from 'react';
import DatabaseModal from './DatabaseModal';
import { withStyles, TableRow } from '@material-ui/core';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function DatabaseRow({ gsc, StyledTableCell }) {
  const [showGscModal, setShowGscModal] = useState(false);
  const [ageRange, setAgeRange] = useState()
  const [personality, setPersonality] = useState("")

  const handleCloseGscModal = () => setShowGscModal(false);
  const handleShowGscModal = () => setShowGscModal(true);

  useEffect(() => {
    let current_year = new Date().getFullYear()
    let age = current_year - gsc.year_of_birth
    setAgeRange(age)
    let minRange = 19
    let maxRange = 23
    function between(age, minRange, maxRange) {
      return age >= minRange && age <= maxRange
    }
    for (maxRange = 23; maxRange < 81; maxRange += 2) {
      minRange += 2
      if (between(age, minRange, maxRange)) {
        return (
          setAgeRange(`${minRange} - ${maxRange}`)
        )
      }
    }
  }, [gsc.year_of_birth])

  useEffect(() => {
    if (gsc.mbti !== "") {
      setPersonality(`${gsc.mbti}`)
    }
    if (gsc.enneagram !== "") {
      if (personality !== "") {
        setPersonality(`${personality}, Enneagram: ${gsc.enneagram}`)
      }
      else {
        setPersonality(`Enneagram: ${gsc.enneagram}`)
      }
    }
    if (gsc.disc !== "") {
      if (personality !== "") {
        setPersonality(`${personality}, ${gsc.disc}`)
      }
      else {
        setPersonality(gsc.disc)
      }
    }
    if (gsc.strengths_finder !== "") {
      if (personality !== "") {
        setPersonality(`${personality}, ${gsc.strengths_finder}`)
      }
      else {
        setPersonality(gsc.strengths_finder)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <>
      <StyledTableRow onClick={handleShowGscModal}>
        <StyledTableCell style={{whiteSpace:'nowrap', background:'#1e365c', color:'#fad4cd'}} className="sticky-left">{gsc.alias}</StyledTableCell>
        <StyledTableCell>{gsc.is_active ? "active" : "inactive"}</StyledTableCell>
        <StyledTableCell>{gsc.gender}</StyledTableCell>
        <StyledTableCell>{ageRange}</StyledTableCell>
        <StyledTableCell>{gsc.city}, {gsc.country}</StyledTableCell>
        <StyledTableCell style={{whiteSpace: 'nowrap'}}>Town: {gsc.moving_to_a_different_town}%, Country: {gsc.moving_to_a_different_country}%</StyledTableCell>
        <StyledTableCell>{gsc.height}</StyledTableCell>
        <StyledTableCell style={{maxWidth:'200px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{gsc.languages}</StyledTableCell>
        <StyledTableCell style={{maxWidth:'200px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{gsc.nationality}</StyledTableCell>
        <StyledTableCell style={{maxWidth:'200px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{gsc.descriptive_words}</StyledTableCell>
        <StyledTableCell style={{maxWidth:'200px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{personality}</StyledTableCell>
        <StyledTableCell style={{maxWidth:'200px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{gsc.church_background}</StyledTableCell>
        <StyledTableCell style={{maxWidth:'200px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{gsc.spiritual_maturity}</StyledTableCell>
        <StyledTableCell style={{maxWidth:'400px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{gsc.spiritual_gifts}</StyledTableCell>
        <StyledTableCell style={{maxWidth:'500px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{gsc.reasons_gscf_makes_a_good_partner}</StyledTableCell>
        <StyledTableCell style={{maxWidth:'500px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{gsc.good_match_for_gscf}</StyledTableCell>
        <StyledTableCell style={{maxWidth:'500px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{gsc.what_is_important_to_me}</StyledTableCell>
      </StyledTableRow>
      <DatabaseModal
        gsc={gsc}
        showGscModal={showGscModal}
        handleCloseGscModal={handleCloseGscModal}
        personality={personality}
      />
    </>
  )
}
