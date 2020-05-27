import React, { Component } from 'react';
import axios from 'axios';

class employeeList extends Component {
  // const employees = axios.get("https://randomuser.me/api/?results=200&nat=us");
  state = {
    employees: [],
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
      .then(res => {
        const employees = res.data.results;
        this.setState({ employees });
      })
  }

  render() {
    return (
      <div>
        <p>
        {/* { this.state.employees } */}
        {/* { console.log(this.state.employees) } */}
        </p>
        <table>
          <tbody>
            <tr>
              <th>Image</th>
              <th>Name</th>
            </tr>
            { this.state.employees.map(person => {
              return (
                <tr>
                  <td><img src={person.picture.thumbnail} alt={person.name.first} /></td>
                  <td>{person.name.last}, {person.name.first}</td>
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