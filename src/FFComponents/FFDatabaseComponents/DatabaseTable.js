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
    color: theme.palette.common.white,
    fontFamily: 'Josefin Sans',
    fontWeight: 200,
    padding: '5px 10px',
    height: '48px',
    lineHeight: '16px',
    overflow: 'hidden',
  },
}))(TableCell)

export default function DatabaseTable({ gscs, currentGsc }) {
  return (
    <TableContainer componenet={Paper} style={{maxHeight:"70vh", overflowX:"auto"}}>
      <Table stickyHeader id="gsc-database-table">
        <TableHead>
          <StyledTableCell>Actions</StyledTableCell>
          <StyledTableCell>Alias</StyledTableCell>
          <StyledTableCell>Age range</StyledTableCell>
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
          <StyledTableCell style={{whiteSpace:'nowrap'}}>Why do you think your GSCF would make <br/> a good partner?</StyledTableCell>
          <StyledTableCell style={{whiteSpace:'nowrap'}}>What kind of person would make a good <br/> match for your GSCF?</StyledTableCell>
          <StyledTableCell style={{whiteSpace:'nowrap', paddingRight: '300px'}}>Words from the GSC</StyledTableCell>
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
