import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'react-bootstrap-pro';

export function TableResponsiveBreakpointDemo() {
  return (
    <Table responsive='md' striped>
      <TableHead>
        <TableRow>
          <TableHeader scope='col'>#</TableHeader>
          {Array.from({ length: 9 }, (_, index) => (
            <TableHeader key={index} scope='col'>
              Heading
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {[1, 2, 3].map((row) => (
          <TableRow key={row}>
            <TableHeader scope='row'>{row}</TableHeader>
            {Array.from({ length: 9 }, (_, index) => (
              <TableCell key={index}>Cell</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
