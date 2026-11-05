import { Card, CardFooter, ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function CardListGroupFooterDemo() {
  return (
    <Card style={{ width: 288 }}>
      <ListGroup flush>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
      <CardFooter>Card footer</CardFooter>
    </Card>
  );
}
