import React, { Component } from 'react';
import axios from 'axios';

import AppHeader from './AppHeader.js';
import SearchResults from './SearchResults.js';

export default class EmployeeDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      employees: [],
      employeesFiltered: [],
      sortOrder: 'lastName',
      sortFunc: 'compareLastName',
      sortReversed: false,
      search: '',
    };
  
    this.sortEmployees = this.sortEmployees.bind(this)
  }
  
  // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  compareLastName(a, b) {
    if ( a.name.last < b.name.last ) return -1;
    if ( a.name.last > b.name.last ) return 1;
    return 0;
  }
  compareEmail(a, b) {
    if ( a.email < b.email ) return -1;
    if ( a.email > b.email ) return 1;
    return 0;
  }
  comparePhone(a, b) {
    if ( a.phone < b.phone ) return -1;
    if ( a.phone > b.phone ) return 1;
    return 0;
  }
  compareDob(a, b) {
    if ( a.dob.date < b.dob.date ) return -1;
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

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    this.handleSearchFilter(value)
  };

  render() {
    return (
      <>
        <AppHeader searchFunc={this.handleInputChange} />
        <SearchResults
          employeesFiltered={this.state.employeesFiltered}
          sortEmployees={this.sortEmployees}
          sortFunc={this.state.sortFunc}
          sortReversed={this.state.sortReversed}
        />
      </>
    )
  }
};
