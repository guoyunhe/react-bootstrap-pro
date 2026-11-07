import { ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupButtonsDemo() {
  return (
    <ListGroup component='div'>
      <ListGroupItem component='button' type='button' action active aria-current='true'>
        The current button
      </ListGroupItem>
      <ListGroupItem component='button' type='button' action>
        A second button item
      </ListGroupItem>
      <ListGroupItem component='button' type='button' action>
        A third button item
      </ListGroupItem>
      <ListGroupItem component='button' type='button' action>
        A fourth button item
      </ListGroupItem>
      <ListGroupItem component='button' type='button' action disabled>
        A disabled button item
      </ListGroupItem>
    </ListGroup>
  );
}
