import React, { useState, useEffect } from 'react';
import ContactedModal from './ContactedModal';
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

export default function ContactedRow({ gsc, StyledTableCell, currentGsc }) {
  const [showContactedModal, setShowContactedModal] = useState(false);
  const [ageRange, setAgeRange] = useState()
  const [personality, setPersonality] = useState("")

  const handleCloseContactedModal = () => setShowContactedModal(false);
  const handleShowContactedModal = () => setShowContactedModal(true);

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
      <StyledTableRow>
        <StyledTableCell>
          {
            <span>reported</span>
          }
        </StyledTableCell>
        <>
          <StyledTableCell onClick={handleShowContactedModal} className="sticky-left" style={{background:'#1e365c'}}>{gsc.alias}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.name}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{ageRange}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.city}, {gsc.country}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal} style={{whiteSpace: 'nowrap'}}>Town: {gsc.moving_to_a_different_town}%,<br /> Country: {gsc.moving_to_a_different_country}%</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.height}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.languages}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.nationality}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.descriptive_words}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{personality}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.church_background}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.spiritual_maturity}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.spiritual_gifts}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.reasons_gscf_makes_a_good_partner}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.good_match_for_gscf}</StyledTableCell>
          <StyledTableCell onClick={handleShowContactedModal}>{gsc.what_is_important_to_me}</StyledTableCell>
        </>
      </StyledTableRow>
      <ContactedModal
        gsc={gsc}
        showContactedModal={showContactedModal}
        handleCloseContactedModal={handleCloseContactedModal}
        personality={personality}
        currentGsc={currentGsc}
        ageRange={ageRange}
      />
    </>
  )
}
