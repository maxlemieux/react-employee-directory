import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './searchForm.js';

class employeeList extends Component {
  // const employees = axios.get("https://randomuser.me/api/?results=200&nat=us");
  state = {
    employees: [],
    employeesFiltered: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
      .then(res => {
        const employees = res.data.results;
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

  

  render() {
    return (
      <div>
        <SearchForm handleSearchFilter={this.handleSearchFilter} />

        <table>
          <tbody>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
            { this.state.employeesFiltered.map(person => {
              return (
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