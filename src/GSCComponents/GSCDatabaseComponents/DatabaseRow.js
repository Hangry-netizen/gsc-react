import React, { useState, useEffect } from 'react';
import DatabaseModal from './DatabaseModal';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function DatabaseRow({ gsc, StyledTableCell, currentGsc }) {
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
          setAgeRange(`${minRange}-${maxRange}`)
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
        <StyledTableCell>{ageRange}</StyledTableCell>
        <StyledTableCell>{gsc.city}, {gsc.country}</StyledTableCell>
        <StyledTableCell>Town:{gsc.moving_to_a_different_town}%, Country:{gsc.moving_to_a_different_country}%</StyledTableCell>
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
        <StyledTableCell style={{width:'250px'}}>{gsc.what_is_important_to_me}</StyledTableCell>
      </StyledTableRow>
      <DatabaseModal
        gsc={gsc}
        showGscModal={showGscModal}
        handleCloseGscModal={handleCloseGscModal}
        personality={personality}
        currentGsc={currentGsc}
      />
    </>
  )
}
