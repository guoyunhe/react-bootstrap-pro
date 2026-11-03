import { ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupBasicDemo() {
  return (
    <ListGroup>
      <ListGroupItem active>Current item</ListGroupItem>
      <ListGroupItem action component='a' href='/next'>
        Next item
      </ListGroupItem>
    </ListGroup>
  );
}
