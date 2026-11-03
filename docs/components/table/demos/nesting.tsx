import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'react-bootstrap-pro';

export function TableNestingDemo() {
  return (
    <Table striped bordered>
      <TableHead>
        <TableRow>
          <TableHeader scope='col'>#</TableHeader>
          <TableHeader scope='col'>First</TableHeader>
          <TableHeader scope='col'>Last</TableHeader>
          <TableHeader scope='col'>Handle</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableHeader scope='row'>1</TableHeader>
          <TableCell>Mark</TableCell>
          <TableCell>Otto</TableCell>
          <TableCell>@mdo</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={4}>
            <Table marginBottom={0}>
              <TableHead>
                <TableRow>
                  <TableHeader scope='col'>Header</TableHeader>
                  <TableHeader scope='col'>Header</TableHeader>
                  <TableHeader scope='col'>Header</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>A</TableCell>
                  <TableCell>First</TableCell>
                  <TableCell>Last</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>B</TableCell>
                  <TableCell>First</TableCell>
                  <TableCell>Last</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeader scope='row'>3</TableHeader>
          <TableCell>John</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>@social</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
