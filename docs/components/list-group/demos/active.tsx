import { ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupActiveDemo() {
  return (
    <ListGroup>
      <ListGroupItem active aria-current='true'>
        An active item
      </ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  );
}
