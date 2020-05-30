import React from 'react';
import './App.css';
import EmployeeList from './components/employeeList';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container>
      <header className="App-header">
        <h1>Employee List</h1>
      </header>
      <Container>
        <EmployeeList />
      </Container>
    </Container>
  );
}

export default App;
