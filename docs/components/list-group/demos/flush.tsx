import { ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupFlushDemo() {
  return (
    <ListGroup flush>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  );
}
