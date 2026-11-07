import { ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupNumberedDemo() {
  return (
    <ListGroup component='ol' numbered>
      <ListGroupItem>A list item</ListGroupItem>
      <ListGroupItem>A list item</ListGroupItem>
      <ListGroupItem>A list item</ListGroupItem>
    </ListGroup>
  );
}
