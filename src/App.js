import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import EmployeeList from './components/employeeList';

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
