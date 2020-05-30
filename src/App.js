import React from 'react';
import './App.css';
import EmployeeList from './components/employeeList';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container>
        <header className="App-header">
          <h1>Employee Directory</h1>
        </header>
        <EmployeeList />
    </Container>
  );
}

export default App;
