import React from 'react';
import DatabaseRow from './DatabaseRow';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1e365c',
    color: theme.palette.common.white,
    '&:nth-of-type(1)': {
      position: '-webkit-sticky',
      left: 0,
      zIndex: 1000,
    },
  },
  body: {
    fontSize: 14,
    color: '#1e365c',
  },
}))(TableCell)

export default function DatabaseTable({ gscs, currentGsc }) {
  return (
    <TableContainer componenet={Paper} style={{maxHeight:"70vh", overflowX:"auto"}}>
      <Table stickyHeader id="gsc-database-table">
        <TableHead>
          <StyledTableCell className="sticky-left">Alias</StyledTableCell>
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
          <StyledTableCell style={{whiteSpace:'nowrap'}}>Spiritual characteristics</StyledTableCell>
          <StyledTableCell style={{whiteSpace:'nowrap'}}>Why do you think your GSCF would make a good partner?</StyledTableCell>
          <StyledTableCell style={{whiteSpace:'nowrap'}}>What kind of person would make a good match for your GSCF?</StyledTableCell>
          <StyledTableCell style={{whiteSpace:'nowrap'}}>Words from the GSC</StyledTableCell>
        </TableHead>
        <TableBody>
        {
          gscs.map((gsc, i) => {
            if(currentGsc.gender === "Male" && gsc.gender === "Female") {
              return (
                <DatabaseRow
                key={i}
                gsc={gsc}
                StyledTableCell={StyledTableCell}
                currentGsc={currentGsc}
              />
              )
            }
            else if (currentGsc.gender === "Female" && gsc.gender === "Male") {
              return (
                <DatabaseRow
                  key={i}
                  gsc={gsc}
                  StyledTableCell={StyledTableCell}
                  currentGsc={currentGsc}
                />
              )
              }
            return null
          })
        }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
