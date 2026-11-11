import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'react-bootstrap-pro';

export function TableActiveDemo() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader scope='col'>#</TableHeader>
          <TableHeader scope='col'>First</TableHeader>
          <TableHeader scope='col'>Last</TableHeader>
          <TableHeader scope='col'>Handle</TableHeader>
        </TableRow>
      </TableHead>
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
  );
}
