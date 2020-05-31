import React from 'react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import EmployeeRow from './EmployeeRow';

export default function SearchResults({ employeesFiltered, sortEmployees, sortFunc, sortReversed }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Employee List">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell onClick={() => sortEmployees('compareLastName')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Name 
                {sortFunc==='compareLastName'
                  && sortReversed === true
                  && <ArrowDropDownIcon />}
                {sortFunc==='compareLastName'
                  && sortReversed === false
                  && <ArrowDropUpIcon />}
              </div>
            </TableCell>
            <TableCell onClick={() => sortEmployees('comparePhone')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Phone
                {sortFunc==='comparePhone'
                  && sortReversed === true
                  && <ArrowDropDownIcon />}
                {sortFunc==='comparePhone'
                  && sortReversed === false
                  && <ArrowDropUpIcon />}
              </div>
            </TableCell>
            <TableCell onClick={() => sortEmployees('compareEmail')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Email 
                {sortFunc==='compareEmail'
                  && sortReversed === true
                  && <ArrowDropDownIcon />}
                {sortFunc==='compareEmail'
                  && sortReversed === false
                  && <ArrowDropUpIcon />}
              </div>
            </TableCell>
            <TableCell onClick={() => sortEmployees('compareDob')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                DOB
                {sortFunc==='compareDob'
                  && sortReversed === true
                  && <ArrowDropDownIcon />}
                {sortFunc==='compareDob'
                  && sortReversed === false
                  && <ArrowDropUpIcon />}
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { employeesFiltered.map(person => {
            return (
              /* This key isn't guaranteed to be unique but the odds are reasonably good */
              <EmployeeRow person={person} key={person.email+person.phone} />
            )
          }) }
        </TableBody>
      </Table>
    </TableContainer>
  )
}