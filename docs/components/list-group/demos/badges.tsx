import { Badge, ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupBadgesDemo() {
  return (
    <ListGroup>
      <ListGroupItem d='flex' justifyContent='between' alignItems='center'>
        A list item <Badge theme='primary'>14</Badge>
      </ListGroupItem>
      <ListGroupItem d='flex' justifyContent='between' alignItems='center'>
        A second list item <Badge theme='primary'>2</Badge>
      </ListGroupItem>
      <ListGroupItem d='flex' justifyContent='between' alignItems='center'>
        A third list item <Badge theme='primary'>1</Badge>
      </ListGroupItem>
    </ListGroup>
  );
}
