import React, { Component } from 'react';
import axios from 'axios';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import SearchForm from './SearchForm.js';
import EmployeeRow from './EmployeeRow';

class employeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      employees: [],
      employeesFiltered: [],
      sortOrder: 'lastName',
      sortFunc: 'compareLastName',
      sortReversed: false,
    };
  
    this.sortEmployees = this.sortEmployees.bind(this)
  }
  
  // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  compareLastName(a, b) {
    if ( a.name.last < b.name.last ){
      return -1;
    }
    if ( a.name.last > b.name.last ){
      return 1;
    }
    return 0;
  }
  compareEmail(a, b) {
    if ( a.email < b.email ){
      return -1;
    }
    if ( a.email > b.email ){
      return 1;
    }
    return 0;
  }
  comparePhone(a, b) {
    if ( a.phone < b.phone ){
      return -1;
    }
    if ( a.phone > b.phone ){
      return 1;
    }
    return 0;
  }
  compareDob(a, b) {
    if ( a.dob.date < b.dob.date ){
      return -1;
    }
    if ( a.dob.date > b.dob.date ) return 1;
    return 0;
  }

  componentDidMount() {
    console.log('componentDidMount fired')
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
      .then(res => {
        let employees = res.data.results;
        /* Initial sort */
        employees.sort( this.compareLastName );
        /* The first filtered set is the full set */
        this.setState({ employees, employeesFiltered: employees });
      })
  };

  handleSearchFilter = filter => {
    const employeesFiltered = this.state.employees.filter(function(person) {
      const regex = new RegExp(`${filter}`, 'gi');
      return regex.test(person.name.first)
        || regex.test(person.name.last)
        || regex.test(person.email);
    });

    if (this.state.sortReversed === true) {
      employeesFiltered.reverse();
    };
    this.setState({
      filter,
      employeesFiltered,
    });
    // this.sortEmployees(null, this.state.sortOrder)
  };

  sortEmployees = (sortFunc) => {
    let employeesFiltered = this.state.employeesFiltered;
    employeesFiltered.sort(this[sortFunc]);
    
    if (this.state.sortFunc === sortFunc) {
      /* This was already the active header, so reverse the current order */
      this.setState(
        {sortReversed: this.state.sortReversed ? false : true },
        () => {
          if (this.state.sortReversed === true) {
            this.setState({employeesFiltered: employeesFiltered.reverse()});   
          } else {
            this.setState({employeesFiltered});   
          }
        }
      );
    }
    
    this.setState({
      sortFunc
    });
  }

  render() {
    return (
      <div>
        <SearchForm handleSearchFilter={this.handleSearchFilter} />

        <TableContainer component={Paper}>
        <Table aria-label="Employee List">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell onClick={() => this.sortEmployees('compareLastName')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Name 
                  {this.state.sortFunc==='compareLastName'
                   && this.state.sortReversed === true
                   && <ArrowDropDownIcon />}
                  {this.state.sortFunc==='compareLastName'
                   && this.state.sortReversed === false
                   && <ArrowDropUpIcon />}
                </div>
              </TableCell>
              <TableCell onClick={() => this.sortEmployees('comparePhone')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Phone
                  {this.state.sortFunc==='comparePhone'
                   && this.state.sortReversed === true
                   && <ArrowDropDownIcon />}
                  {this.state.sortFunc==='comparePhone'
                   && this.state.sortReversed === false
                   && <ArrowDropUpIcon />}
                </div>
              </TableCell>
              <TableCell onClick={() => this.sortEmployees('compareEmail')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Email 
                  {this.state.sortFunc==='compareEmail'
                   && this.state.sortReversed === true
                   && <ArrowDropDownIcon />}
                  {this.state.sortFunc==='compareEmail'
                   && this.state.sortReversed === false
                   && <ArrowDropUpIcon />}
                </div>
              </TableCell>
              <TableCell onClick={() => this.sortEmployees('compareDob')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  DOB
                  {this.state.sortFunc==='compareDob'
                   && this.state.sortReversed === true
                   && <ArrowDropDownIcon />}
                  {this.state.sortFunc==='compareDob'
                   && this.state.sortReversed === false
                   && <ArrowDropUpIcon />}
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { this.state.employeesFiltered.map(person => {
              return (
                /* This key isn't guaranteed to be unique but the odds are reasonably good */
                <EmployeeRow person={person} key={person.email+person.phone} />
              )
            }) }
          </TableBody>
        </Table>
        </TableContainer>
      </div>
    )
  }
};

export default employeeList;