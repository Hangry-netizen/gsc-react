import React, { useState, useEffect } from 'react';
import HiRecipientModal from './HiRecipientModal';
import ReportModal from './ReportModal';
import ReportedModal from './ReportedModal';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import { Button } from 'react-bootstrap';


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
  const [showReportModal, setShowReportModal] = useState(false);
  const [showReportedModal, setShowReportedModal] = useState(false);
  const [ageRange, setAgeRange] = useState()
  const [personality, setPersonality] = useState("")

  const handleCloseHiRecipientModal = () => setShowHiRecipientModal(false);
  const handleShowHiRecipientModal = () => setShowHiRecipientModal(true);

  const handleCloseReportModal = () => setShowReportModal(false);
  const handleShowReportModal = () => setShowReportModal(true);

  const handleCloseReportedModal = () => setShowReportedModal(false);
  const handleShowReportedModal = () => setShowReportedModal(true);

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
            currentGsc.reports.includes(gsc.id)
            ?
            <div className="text-align-center">
              <Button onClick={handleShowReportedModal} variant="secondary">Reported</Button>
            </div>
            :
            <div className="text-align-center">
              <Button onClick={handleShowReportModal} variant='danger'>Report</Button>
            </div>
          }
        </StyledTableCell>
        <>
          <StyledTableCell onClick={handleShowHiRecipientModal} className="sticky-left" style={{background:'#1e365c'}}>{gsc.alias}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.name}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.preferred_contact_method}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.contact_info}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{ageRange}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.city}, {gsc.country}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal} style={{whiteSpace: 'nowrap'}}>Town: {gsc.moving_to_a_different_town}%,<br /> Country: {gsc.moving_to_a_different_country}%</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.height}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.languages}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.nationality}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.descriptive_words}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{personality}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.church_background}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.spiritual_maturity}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.spiritual_gifts}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.reasons_gscf_makes_a_good_partner}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.good_match_for_gscf}</StyledTableCell>
          <StyledTableCell onClick={handleShowHiRecipientModal}>{gsc.what_is_important_to_me}</StyledTableCell>
        </>
      </StyledTableRow>
      <HiRecipientModal
        gsc={gsc}
        showHiRecipientModal={showHiRecipientModal}
        handleCloseHiRecipientModal={handleCloseHiRecipientModal}
        personality={personality}
        currentGsc={currentGsc}
        ageRange={ageRange}
      />
      <ReportModal
        gsc={gsc}
        showReportModal={showReportModal}
        handleCloseReportModal={handleCloseReportModal}
        currentGsc={currentGsc}
        handleShowReportedModal={handleShowReportedModal}
      />
      <ReportedModal
        gsc={gsc}
        showReportedModal={showReportedModal}
        handleCloseReportedModal={handleCloseReportedModal}
      />
    </>
  )
}
