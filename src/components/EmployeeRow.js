import moment from 'moment';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function EmployeeRow({ person }) {
  return (
    <TableRow key={person.email+person.phone}>
    <TableCell><img src={person.picture.thumbnail} alt={person.name.first} /></TableCell>
    <TableCell>{person.name.last}, {person.name.first}</TableCell>
    <TableCell>{person.phone}</TableCell>
    <TableCell>{person.email}</TableCell>
    <TableCell>{moment(person.dob.date).calendar()}</TableCell>
    </TableRow>
  )
};