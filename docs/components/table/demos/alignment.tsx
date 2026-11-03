import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'react-bootstrap-pro';

const placeholder =
  'This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.';

export function TableAlignmentDemo() {
  return (
    <Table responsive verticalAlign='middle'>
      <TableHead>
        <TableRow>
          <TableHeader scope='col'>Heading 1</TableHeader>
          <TableHeader scope='col'>Heading 2</TableHeader>
          <TableHeader scope='col'>Heading 3</TableHeader>
          <TableHeader scope='col'>Heading 4</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>This cell inherits vertical-align: middle from the table</TableCell>
          <TableCell>This cell inherits vertical-align: middle from the table</TableCell>
          <TableCell>This cell inherits vertical-align: middle from the table</TableCell>
          <TableCell>{placeholder}</TableCell>
        </TableRow>
        <TableRow verticalAlign='bottom'>
          <TableCell>This cell inherits vertical-align: bottom from the table row</TableCell>
          <TableCell>This cell inherits vertical-align: bottom from the table row</TableCell>
          <TableCell>This cell inherits vertical-align: bottom from the table row</TableCell>
          <TableCell>{placeholder}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>This cell inherits vertical-align: middle from the table</TableCell>
          <TableCell>This cell inherits vertical-align: middle from the table</TableCell>
          <TableCell verticalAlign='top'>This cell is aligned to the top.</TableCell>
          <TableCell>{placeholder}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
