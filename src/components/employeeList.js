import React, { Component } from 'react';
import axios from 'axios';


import SearchForm from './SearchForm.js';
import SearchResults from './SearchResults.js';

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
        <SearchResults
          employeesFiltered={this.state.employeesFiltered}
          sortEmployees={this.sortEmployees}
          sortFunc={this.state.sortFunc}
          sortReversed={this.state.sortReversed}
        />
      </div>
    )
  }
};

export default employeeList;