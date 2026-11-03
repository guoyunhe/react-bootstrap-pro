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

export function TableHoverDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <Table hover>
        <Head />
        <Rows />
      </Table>
      <Table striped hover>
        <Head />
        <Rows />
      </Table>
      <Table>
        <Head />
        <TableBody>
          <TableRow active>
            <TableHeader scope='row'>1</TableHeader>
            <TableCell>Mark</TableCell>
            <TableCell>Otto</TableCell>
            <TableCell>@mdo</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope='row'>2</TableHeader>
            <TableCell>Jacob</TableCell>
            <TableCell>Thornton</TableCell>
            <TableCell>@fat</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope='row'>3</TableHeader>
            <TableCell>John</TableCell>
            <TableCell>Doe</TableCell>
            <TableCell active>@social</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}
