import React, { useState, useEffect } from 'react';
import { withStyles, TableRow } from '@material-ui/core';
import ReportsModal from './ReportsModal';
import ResolveModal from './ResolveModal';
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

export default function ReportsRow({ report, StyledTableCell }) {
  const [randomNum, setRandomNum] = useState()
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [resolved, setResolved] = useState(false)

  useEffect(() => {
    setResolved(report.resolved)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (answer === randomNum){
      setIsLoading(false)
    }
    else (
      setIsLoading(true)
    )
  }, [answer, randomNum])

  const [showReportsModal, setShowReportsModal] = useState(false);
  const [showResolveModal, setShowResolveModal] = useState(false);

  const handleCloseReportsModal = () => setShowReportsModal(false);
  const handleShowReportsModal = () => setShowReportsModal(true);

  const handleCloseResolveModal = () => setShowResolveModal(false);
  const handleShowResolveModal = () => {
    getRandomNum();
    setShowResolveModal(true);
  }

  const getRandomNum = () => {
    const num = Math.floor(1000 + Math.random() * 9000);
    setRandomNum(String(num))
  }

  return (
    <>
      <StyledTableRow>
        <StyledTableCell>
        {
          resolved
          ?
          <div className="text-align-center">
            <Button variant="secondary">Resolved</Button>
          </div>
          :
          <div className="text-align-center">
            <Button onClick={handleShowResolveModal} variant='danger'>Mark as Resolved</Button>
          </div>
        }
        </StyledTableCell>
        <>
          <StyledTableCell onClick={handleShowReportsModal} className="text-align-center">{report.id}</StyledTableCell>
          <StyledTableCell onClick={handleShowReportsModal}>{report.reported_by_name}<br />{report.reported_by_email}</StyledTableCell>
          <StyledTableCell onClick={handleShowReportsModal}>{report.report_target_name}<br />{report.report_target_email}</StyledTableCell>
          <StyledTableCell onClick={handleShowReportsModal}>{report.recommended_action}</StyledTableCell>
          <StyledTableCell onClick={handleShowReportsModal}>
            <div className="line-clamp-3" style={{width:'500px'}}>
              {report.reason}
            </div>
          </StyledTableCell>
          <StyledTableCell onClick={handleShowReportsModal} className="color-red" style={{borderLeft:"1px solid white"}}>
            <div className="line-clamp-3" style={{width:'500px'}}>
              {report.admin_remarks}
            </div>
          </StyledTableCell>
        </>
      </StyledTableRow>
      <ReportsModal
        report={report}
        showReportsModal={showReportsModal}
        handleCloseReportsModal={handleCloseReportsModal}
      />
      <ResolveModal
        report={report}
        showResolveModal={showResolveModal}
        handleCloseResolveModal={handleCloseResolveModal}
        randomNum={randomNum}
        setAnswer={setAnswer}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setResolved={setResolved}
      />
    </>
  )
}
