import React, { useState } from 'react';
import { withStyles, TableRow } from '@material-ui/core';
import ReportsModal from './ReportsModal';

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

export default function ReportsRow({ report, StyledTableCell}) {
  const [showReportsModal, setShowReportsModal] = useState(false);

  const handleCloseReportsModal = () => setShowReportsModal(false);
  const handleShowReportsModal = () => setShowReportsModal(true);

  return (
    <>
      <StyledTableRow onClick={handleShowReportsModal}>
        <StyledTableCell className="text-align-center">{report.id}</StyledTableCell>
        <StyledTableCell>{report.reported_by_name}<br />{report.reported_by_email}</StyledTableCell>
        <StyledTableCell>{report.report_target_name}<br />{report.report_target_email}</StyledTableCell>
        <StyledTableCell>
          <div className="line-clamp-3" style={{width:'500px'}}>
            {report.reason}
          </div>
        </StyledTableCell>
        <StyledTableCell className="color-red" style={{borderLeft:"1px solid white"}}>
          <div className="line-clamp-3" style={{width:'500px'}}>
            {report.admin_remarks}
          </div>
        </StyledTableCell>
      </StyledTableRow>
      <ReportsModal
        report={report}
        showReportsModal={showReportsModal}
        handleCloseReportsModal={handleCloseReportsModal}
      />
    </>
  )
}
