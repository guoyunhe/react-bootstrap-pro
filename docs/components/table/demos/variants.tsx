import { Box, Table, TableBody, TableCell, TableHeader, TableRow } from 'react-bootstrap-pro';

import { users } from './data';

export function TableVariantsDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <Table theme='primary'>
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
      <Table>
        <TableBody>
          <TableRow theme='success'>
            <TableCell>Row</TableCell>
            <TableCell>themed</TableCell>
            <TableCell>with</TableCell>
            <TableCell>success</TableCell>
          </TableRow>
          <TableRow>
            <TableCell theme='warning'>Cell</TableCell>
            <TableCell theme='info'>themed</TableCell>
            <TableCell theme='danger'>with</TableCell>
            <TableCell theme='accent'>colors</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}
