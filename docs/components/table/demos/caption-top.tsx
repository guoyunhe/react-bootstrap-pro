import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'react-bootstrap-pro';

import { users } from './data';

export function TableCaptionTopDemo() {
  return (
    <Table captionTop>
      <TableCaption>List of users</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader scope='col'>#</TableHeader>
          <TableHeader scope='col'>First</TableHeader>
          <TableHeader scope='col'>Last</TableHeader>
          <TableHeader scope='col'>Handle</TableHeader>
        </TableRow>
      </TableHead>
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
    </Table>
  );
}
