import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'react-bootstrap-pro';

import { users } from './data';

function Rows() {
  return (
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableHeader scope='row'>{user.id}</TableHeader>
          <TableCell>{user.first}</TableCell>
          <TableCell>{user.last}</TableCell>
          <TableCell>{user.handle}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

function Head() {
  return (
    <TableHead>
      <TableRow>
        <TableHeader scope='col'>#</TableHeader>
        <TableHeader scope='col'>First</TableHeader>
        <TableHeader scope='col'>Last</TableHeader>
        <TableHeader scope='col'>Handle</TableHeader>
      </TableRow>
    </TableHead>
  );
}

export function TableCardDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Table card hover>
        <Head />
        <Rows />
      </Table>
      <Table card responsive striped>
        <Head />
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableHeader scope='row'>{user.id}</TableHeader>
              <TableCell>{user.first}</TableCell>
              <TableCell>{user.last}</TableCell>
              <TableCell>{user.handle}</TableCell>
              <TableCell>{user.handle}</TableCell>
              <TableCell>{user.handle}</TableCell>
              <TableCell>{user.handle}</TableCell>
              <TableCell>{user.handle}</TableCell>
              <TableCell>{user.handle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
