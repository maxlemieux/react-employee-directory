import moment from 'moment';
import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function EmployeeRow({ person }) {
  const { name, email, phone, picture, dob } = person;
  return (
    <TableRow key={email+phone}>
      <TableCell><img src={picture.thumbnail} alt={name.first} /></TableCell>
      <TableCell>{name.last}, {name.first}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{moment(dob.date).calendar()}</TableCell>
    </TableRow>
  )
};