import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './searchForm.js';
// import { Paper } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
class employeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      sortOrder: 'lastName',
      employeesFiltered: [],
    };
  
    this.setSort = this.setSort.bind(this)
  }
  // const employees = axios.get("https://randomuser.me/api/?results=200&nat=us");
  
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
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
      .then(res => {
        let employees = res.data.results;
        employees.sort( this.compareLastName );
        
        this.setState({ employees, employeesFiltered: employees });
      })
  };

  handleSearchFilter = filter => {
    this.setState({
      filter,
      employeesFiltered: this.state.employees.filter(function(person) {
        const regex = new RegExp(`${filter}`, 'gi');
        return regex.test(person.name.first)
          || regex.test(person.name.last)
          || regex.test(person.email);
      }),
    });
  };

  setSort = (e, sortOrder) => {
    let employees = this.state.employees;
    if (sortOrder === 'lastName') {
      console.log('sorting by last name')
      employees.sort( this.compareLastName );
      this.setState({'sortOrder': 'lastName'})
    }
    if (sortOrder === 'phone') {
      console.log('sorting by phone')
      employees.sort( this.comparePhone );
      this.setState({'sortOrder': 'lastName'})
    }
    if (sortOrder === 'email') {
      console.log('sorting by email')
      employees.sort( this.compareEmail );
      this.setState({'sortOrder': 'lastName'})
    }
    if (sortOrder === 'dob') {
      console.log('sorting by DOB')
      employees.sort( this.compareDob );
      this.setState({'sortOrder': 'lastName'})
    }
    this.setState({
      employees,
    })
  }

  render() {
    return (
      <div>
        <SearchForm handleSearchFilter={this.handleSearchFilter} />

        <table>
          <tbody>
            <tr>
              <th></th>
              <th onClick={e => this.setSort(e, 'lastName')}>
                Name 
                {this.state.sortOrder==='lastName' && <ArrowDropDownIcon />}
                </th>
              <th onClick={e => this.setSort(e, 'phone')}>Phone</th>
              <th onClick={e => this.setSort(e, 'email')}>Email</th>
              <th onClick={e => this.setSort(e, 'dob')}>DOB</th>
            </tr>
            { this.state.employeesFiltered.map(person => {
              return (
                // <Paper>foo</Paper>
                <tr>
                  <td><img src={person.picture.thumbnail} alt={person.name.first} /></td>
                  <td>{person.name.last}, {person.name.first}</td>
                  <td>{person.phone}</td>
                  <td>{person.email}</td>
                  <td>{person.dob.date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
};

export default employeeList;