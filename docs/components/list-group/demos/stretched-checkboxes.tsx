import { Box, Checkbox, FormField, ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupStretchedCheckboxesDemo() {
  return (
    <ListGroup>
      {['First', 'Second', 'Third'].map((name) => (
        <ListGroupItem key={name}>
          <FormField>
            <Checkbox id={`list-stretched-${name}`} />
            <Box component='label' className='stretched-link' htmlFor={`list-stretched-${name}`}>
              {name} checkbox
            </Box>
          </FormField>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
