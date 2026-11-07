import { Box, Checkbox, FormField, ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupCheckboxesDemo() {
  return (
    <ListGroup>
      {['First', 'Second', 'Third'].map((name) => (
        <ListGroupItem key={name}>
          <FormField>
            <Checkbox id={`list-check-${name}`} />
            <Box component='label' htmlFor={`list-check-${name}`}>
              {name} checkbox
            </Box>
          </FormField>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
