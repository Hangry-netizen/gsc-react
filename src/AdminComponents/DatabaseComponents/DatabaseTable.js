import React from 'react';
import DatabaseRow from './DatabaseRow';
import { withStyles, Table, TableBody, TableCell, TableContainer, TableHead, Paper } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1e365c',
    color: theme.palette.common.white,
    whiteSpace: 'nowrap',
    "&:nth-child(1)": {
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: theme.zIndex.appBar + 1,
    },
    maxWidth: '250px'
  },
  body: {
    fontSize: 14,
    color: '#1e365c',
  },
}))(TableCell)

export default function DatabaseTable({ gscs }) {
  return (
    <TableContainer componenet={Paper} style={{maxHeight:"70vh", overflowX:"auto"}}>
      <Table stickyHeader id="admin-database-table">
        <TableHead>
          <StyledTableCell>Alias</StyledTableCell>
          <StyledTableCell>Status</StyledTableCell>
          <StyledTableCell>Gender</StyledTableCell>
          <StyledTableCell>Age Range</StyledTableCell>
          <StyledTableCell>Location</StyledTableCell>
          <StyledTableCell>Willingness to relocate</StyledTableCell>
          <StyledTableCell>Height</StyledTableCell>
          <StyledTableCell>Languages</StyledTableCell>
          <StyledTableCell>Nationality/ Ethnicity</StyledTableCell>
          <StyledTableCell>Descriptors</StyledTableCell>
          <StyledTableCell>Personality/ Temperament</StyledTableCell>
          <StyledTableCell>Church background</StyledTableCell>
          <StyledTableCell>Spiritual maturity</StyledTableCell>
          <StyledTableCell>Spiritual characteristics</StyledTableCell>
          <StyledTableCell>Why do you think your GSCF would make a good partner?</StyledTableCell>
          <StyledTableCell>What kind of person would make a good match for your GSCF?</StyledTableCell>
          <StyledTableCell>Words from the GSC</StyledTableCell>
        </TableHead>
        <TableBody>
        {
          gscs.map((gsc, i) => {
            return (
              <DatabaseRow
                key={i}
                gsc={gsc}
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
