import React from 'react';
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
  return (
    <TableContainer componenet={Paper} style={{maxHeight:"70vh", overflowX:"auto"}}>
      <Table stickyHeader id="admin-database-table">
        <TableHead>
          <StyledTableCell>Report no.</StyledTableCell>
          <StyledTableCell>Reported by</StyledTableCell>
          <StyledTableCell>Report target</StyledTableCell>
          <StyledTableCell>Reason</StyledTableCell>
          <StyledTableCell className="color-red" style={{borderLeft:"1px white solid"}}>Remarks by admin</StyledTableCell>
        </TableHead>
        <TableBody>
        {
          reports.map((report, i) => {
            if (report.archived === false) {
              return (
                <ReportsRow
                  key={i}
                  report={report}
                  StyledTableCell={StyledTableCell}
                />
              )
            } else return null
          })
        }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
