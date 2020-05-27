import React from 'react';
const axios = require('axios');

async function employeeList (props) {
  const employees = await axios.get("https://randomuser.me/api/?results=200&nat=us");

  return (
    <>
    {employees}
    </>
  );
}

export default employeeList;