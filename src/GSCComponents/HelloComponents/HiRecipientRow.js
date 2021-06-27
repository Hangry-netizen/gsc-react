import React, { useState, useEffect } from 'react';
import HiRecipientModal from './HiRecipientModal';
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

export default function HiRecipientRow({ gsc, StyledTableCell, currentGsc }) {
  const [showHiRecipientModal, setShowHiRecipientModal] = useState(false);
  const [ageRange, setAgeRange] = useState()
  const [personality, setPersonality] = useState("")

  const handleCloseHiRecipientModal = () => setShowHiRecipientModal(false);
  const handleShowHiRecipientModal = () => setShowHiRecipientModal(true);

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
      <StyledTableRow onClick={handleShowHiRecipientModal}>
        <StyledTableCell className="sticky-left" style={{background:'#1e365c'}}>{gsc.name}</StyledTableCell>
        <StyledTableCell>{gsc.preferred_contact_method}</StyledTableCell>
        <StyledTableCell>{gsc.contact_info}</StyledTableCell>
        <StyledTableCell>{ageRange}</StyledTableCell>
        <StyledTableCell>{gsc.city}, {gsc.country}</StyledTableCell>
        <StyledTableCell style={{whiteSpace: 'nowrap'}}>Town: {gsc.moving_to_a_different_town}%,<br /> Country: {gsc.moving_to_a_different_country}%</StyledTableCell>
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
      <HiRecipientModal
        gsc={gsc}
        showHiRecipientModal={showHiRecipientModal}
        handleCloseHiRecipientModal={handleCloseHiRecipientModal}
        personality={personality}
        currentGsc={currentGsc}
        ageRange={ageRange}
      />
    </>
  )
}
