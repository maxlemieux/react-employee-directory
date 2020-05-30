import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import EmployeeList from './components/EmployeeList';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <Container>
        {/* <AppHeader /> */}
        <EmployeeList />
    </Container>
  );
}

export default App;
