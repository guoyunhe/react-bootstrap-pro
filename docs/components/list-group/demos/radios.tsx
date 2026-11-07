import { Box, FormField, ListGroup, ListGroupItem, Radio } from 'react-bootstrap-pro';

export function ListGroupRadiosDemo() {
  return (
    <ListGroup>
      {['First', 'Second', 'Third'].map((name, index) => (
        <ListGroupItem key={name}>
          <FormField>
            <Radio id={`list-radio-${name}`} name='list-group-radio' defaultChecked={index === 0} />
            <Box component='label' htmlFor={`list-radio-${name}`}>
              {name} radio
            </Box>
          </FormField>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
