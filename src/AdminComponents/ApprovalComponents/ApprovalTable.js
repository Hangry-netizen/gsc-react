import React from 'react';
import ApprovalRow from './ApprovalRow';
import { withStyles, Table, TableBody, TableCell, TableContainer, TableHead, Paper } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1e365c',
    color: theme.palette.common.white,
    fontFamily: 'Josefin Sans',
    maxWidth: '300px',
    '&:nth-of-type(2)': {
      position: 'sticky',
      left: 0,
      maxWidth: '100px',
      zIndex: 3,
    },
  },
  body: {
    fontSize: 14,
    color: '#1e365c',
  },
}))(TableCell)


export default function ApprovalTable({ gscs }) {
  return (
    <>
      <TableContainer componenet={Paper} style={{maxHeight:"70vh", overflowX:"auto"}}>
        <Table stickyHeader id="admin-approval-table">
          <TableHead>
            <StyledTableCell style={{paddingRight: "50px"}}>Status</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>FF name</StyledTableCell>
            <StyledTableCell>FF email</StyledTableCell>
            <StyledTableCell>Alias</StyledTableCell>
            <StyledTableCell>Age Range</StyledTableCell>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell>Willingness to relocate</StyledTableCell>
            <StyledTableCell>Height</StyledTableCell>
            <StyledTableCell>Languages</StyledTableCell>
            <StyledTableCell>Nationality/ Ethnicity</StyledTableCell>
            <StyledTableCell style={{paddingRight: '150px'}}>Descriptors</StyledTableCell>
            <StyledTableCell>Personality/ Temperament</StyledTableCell>
            <StyledTableCell>Church background</StyledTableCell>
            <StyledTableCell style={{paddingRight: '100px'}}>Spiritual maturity</StyledTableCell>
            <StyledTableCell style={{paddingRight: '150px'}}>Spiritual characteristics</StyledTableCell>
            <StyledTableCell style={{whiteSpace:'nowrap'}} className="bg-red">Why do you think your GSCF would make <br/> a good partner?</StyledTableCell>
            <StyledTableCell style={{whiteSpace:'nowrap'}} className="bg-red">What kind of person would make a good  <br/> match for your GSCF?</StyledTableCell>
            <StyledTableCell style={{whiteSpace:'nowrap', paddingRight: '300px'}}>Words from the GSC</StyledTableCell>
          </TableHead>
          <TableBody>
          {
            gscs.map((gsc, i) => {
              if (gsc.admin_archived === false) {
                return (
                  <ApprovalRow
                    key={i}
                    gsc={gsc}
                    StyledTableCell={StyledTableCell}
                  />
                )
              }
              else return null
            })
          }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
