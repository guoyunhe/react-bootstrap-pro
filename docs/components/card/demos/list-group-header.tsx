import { Card, CardHeader, ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function CardListGroupHeaderDemo() {
  return (
    <Card style={{ width: 288 }}>
      <CardHeader>Featured</CardHeader>
      <ListGroup flush>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
    </Card>
  );
}
