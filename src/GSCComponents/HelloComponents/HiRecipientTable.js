import React from 'react';
import HiRecipientRow from './HiRecipientRow';
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
    whiteSpace: 'nowrap',
    "&:nth-child(1)": {
      position: 'sticky',
      left: 0,
    },
  },
  body: {
    fontSize: 14,
    color: '#1e365c',
  },
}))(TableCell)

export default function HiRecipientTable({ receivedHellos, currentGsc }) {
  return (
    <div>
      <TableContainer componenet={Paper} style={{maxHeight:"70vh", overflowX:"auto"}}>
        <Table stickyHeader id="gsc-database-table">
          <TableHead>
            <StyledTableCell style={{position:'sticky', left:0, zIndex:2}}>Alias</StyledTableCell>
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
            receivedHellos.map((gsc, i) => {
              return (
                <HiRecipientRow
                  key={i}
                  gsc={gsc}
                  StyledTableCell={StyledTableCell}
                  currentGsc={currentGsc}
                />
              )
            })
          }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
