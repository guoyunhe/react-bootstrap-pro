import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'react-bootstrap-pro';

const dialogs = [
  {
    name: 'backdrop',
    type: "boolean or 'static'",
    defaultValue: 'true',
    description:
      'Includes a backdrop element. Specify static for a backdrop which doesn’t close on click.',
  },
  {
    name: 'keyboard',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Closes the component when escape key is pressed.',
  },
  {
    name: 'focus',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Puts the focus on the component when initialized.',
  },
];

export function TableStackedDemo() {
  return (
    <Table stacked='md'>
      <TableHead>
        <TableRow>
          <TableHeader scope='col'>Name</TableHeader>
          <TableHeader scope='col'>Type</TableHeader>
          <TableHeader scope='col'>Default</TableHeader>
          <TableHeader scope='col'>Description</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {dialogs.map((dialog) => (
          <TableRow key={dialog.name}>
            <TableCell cell='Name'>{dialog.name}</TableCell>
            <TableCell cell='Type'>{dialog.type}</TableCell>
            <TableCell cell='Default'>{dialog.defaultValue}</TableCell>
            <TableCell cell='Description'>{dialog.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
