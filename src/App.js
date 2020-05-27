import React from 'react';
import './App.css';
import EmployeeList from './components/employeeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee List</h1>
      </header>
      <EmployeeList />
    </div>
  );
}

export default App;
