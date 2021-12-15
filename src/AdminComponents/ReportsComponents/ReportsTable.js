import React, { useState, useEffect } from 'react';
import ReportsRow from './ReportsRow';
import { withStyles, Table, TableBody, TableCell, TableContainer, TableHead, Paper } from '@material-ui/core';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1e365c',
    color: theme.palette.common.white,
    fontFamily: 'Josefin Sans',
    maxWidth: '500px',
    '&:nth-last-of-type(1)': {
      color: '#e9482b',
    },
    
  },
  body: {
    fontSize: 14,
    color: theme.palette.common.white,
    fontFamily: 'Josefin Sans',
    fontWeight: 200,
    padding: '5px 10px',
    height: '48px',
    lineHeight: '16px',
    overflow: 'hidden',
  },
}))(TableCell)

export default function ReportsTable({ reports }) {
  const [sortedReports, setSortedReports] = useState([])

  function compare (a,b) {
    const resolve_status_of_a = a.resolve;
    const resolve_status_of_b = b.resolve;

    let comparison = 0;

    if (resolve_status_of_a === true) {
      comparison = 1;
    }
    else if (resolve_status_of_b === true) {
      comparison = -1;
    }
    return comparison
  }

  useEffect(() => {
    setSortedReports(reports.sort(compare))
  }, [reports])


  return (
    <TableContainer componenet={Paper} style={{maxHeight:"70vh", overflowX:"auto"}}>
      <Table stickyHeader id="admin-database-table">
        <TableHead>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell>Report no.</StyledTableCell>
          <StyledTableCell>Reported by</StyledTableCell>
          <StyledTableCell>Report target</StyledTableCell>
          <StyledTableCell style={{width:'200px'}}>Recommended action</StyledTableCell>
          <StyledTableCell style={{width:'500px'}}>Concerns</StyledTableCell>
          <StyledTableCell className="color-red" style={{borderLeft:"1px white solid"}}>Remarks by admin</StyledTableCell>
        </TableHead>
        <TableBody>
        {
          sortedReports.map((report, i) => {
            return (
              <ReportsRow
                key={i}
                report={report}
                StyledTableCell={StyledTableCell}
              />
            )
          })
        }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
