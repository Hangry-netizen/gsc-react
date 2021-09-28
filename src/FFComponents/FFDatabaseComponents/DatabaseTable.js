import React, { useEffect, useState } from 'react';
import DatabaseRow from './DatabaseRow';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, IconButton, Menu, MenuItem } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

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

const ITEM_HEIGHT = 48;

export default function DatabaseTable({ gscs, currentGsc }) {
  const [ageOptions, setAgeOptions] = useState([])
  const [ageFilter, setAgeFilter] = useState(0)
  const [locationFilter, setLocationFilter] = useState("")
  const [locationOptions] = useState([
    "Malaysia",
    "Philippines",
    "Singapore",
    "Others"
  ])

  const [sortedGscs, setSortedGscs] = useState([])

  function compare (a,b) {
    const id_of_a = a.id;
    const id_of_b = b.id;

    let comparison = 0;

    if (id_of_a < id_of_b) {
      comparison = 1;
    }
    else if (id_of_a > id_of_b) {
      comparison = -1;
    }
    return comparison
  }

  useEffect(() => {
    setSortedGscs(gscs.sort(compare))
  }, [gscs])

  let current_year = new Date().getFullYear()

  useEffect(() => {
    for ( let i = 21; i < 79; i += 3) {
      setAgeOptions(prevOptions => [...prevOptions, i])
    }  
  }, [])
  
  const [anchorAge, setAnchorAge] = useState(null);
  const openAge = Boolean(anchorAge);
  const handleClickAge = (event) => {
    setAnchorAge(event.currentTarget);
  };
  const handleCloseAge = () => {
    setAnchorAge(null);
  };

  const [anchorLocation, setAnchorLocation] = useState(null);
  const openLocation = Boolean(anchorLocation);
  const handleClickLocation = (event) => {
    setAnchorLocation(event.currentTarget);
  };
  const handleCloseLocation = () => {
    setAnchorLocation(null);
  };

  return (
    <TableContainer componenet={Paper} style={{maxHeight:"70vh", overflowX:"auto"}}>
      <Table stickyHeader id="gsc-database-table">
        <TableHead>
          <StyledTableCell>Actions</StyledTableCell>
          <StyledTableCell>Alias</StyledTableCell>
          <StyledTableCell>
            <div className="display-flex">
              <div>Age range</div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={openAge ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClickAge}
                style={{color:"white", paddingRight:"0"}}
              >
                <FilterListIcon />
              </IconButton>
            </div>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorAge}
              open={openAge}
              onClose={handleCloseAge}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '7ch',
                },
              }}
            >
             <MenuItem onClick={() => setAgeFilter(0)}>All</MenuItem>
            {
              ageOptions.map(minAge => 
                <MenuItem key={minAge} onClick={() => setAgeFilter(minAge)}>{minAge}-{minAge+2}</MenuItem>
              )
            }
            </Menu>
          </StyledTableCell>
          <StyledTableCell>
            <div className="display-flex" style={{alignItems:'center'}}>
              <div>Location</div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={openLocation ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClickLocation}
                style={{color:"white", paddingRight:"0"}}
              >
                <FilterListIcon />
              </IconButton>
            </div>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorLocation}
              open={openLocation}
              onClose={handleCloseLocation}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '10ch',
                },
              }}
            >
             <MenuItem onClick={() => setLocationFilter("")}>All</MenuItem>
            {
              locationOptions.map(country => 
                <MenuItem key={country} onClick={() => setLocationFilter(country)}>{country}</MenuItem>
              )
            }
            </Menu>
          </StyledTableCell>
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
          sortedGscs.map((gsc, i) => {
            let age = current_year - gsc.year_of_birth
            
            if (ageFilter || locationFilter) {
              if (ageFilter) {
                let maxAge = ageFilter + 2
                if (locationFilter) {
                  if (locationFilter === "Others") {
                    if (age >= ageFilter && age < maxAge + 1 && gsc.country !== "Malaysia" && gsc.country !== "Philippines" && gsc.country !== "Singapore"){
                      return (
                        <DatabaseRow
                          key={i}
                          gsc={gsc}
                          StyledTableCell={StyledTableCell}
                          currentGsc={currentGsc}
                          ageOptions={ageOptions}
                        />
                      )
                    }
                  }
                  else {
                    if (age >= ageFilter && age < maxAge + 1 && locationFilter === gsc.country){
                      return (
                        <DatabaseRow
                          key={i}
                          gsc={gsc}
                          StyledTableCell={StyledTableCell}
                          currentGsc={currentGsc}
                          ageOptions={ageOptions}
                        />
                      )
                    } 
                  }
                }
                else {
                  if (age >= ageFilter && age < maxAge + 1){
                    return (
                      <DatabaseRow
                        key={i}
                        gsc={gsc}
                        StyledTableCell={StyledTableCell}
                        currentGsc={currentGsc}
                        ageOptions={ageOptions}
                      />
                    )
                  }
                }
              } 
              else {
                if (locationFilter === "Others") {
                  if (gsc.country !== "Malaysia" && gsc.country !== "Philippines" && gsc.country !== "Singapore") {
                    return (
                      <DatabaseRow
                        key={i}
                        gsc={gsc}
                        StyledTableCell={StyledTableCell}
                        currentGsc={currentGsc}
                        ageOptions={ageOptions}
                      />
                    )
                  }
                }
                else {
                  if (locationFilter === gsc.country) {
                    return (
                      <DatabaseRow
                        key={i}
                        gsc={gsc}
                        StyledTableCell={StyledTableCell}
                        currentGsc={currentGsc}
                        ageOptions={ageOptions}
                      />
                    )
                  }
                }
              }
            }
            else {
              return (
                <DatabaseRow
                  key={i}
                  gsc={gsc}
                  StyledTableCell={StyledTableCell}
                  currentGsc={currentGsc}
                  ageOptions={ageOptions}
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
