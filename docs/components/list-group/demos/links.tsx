import { ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupLinksDemo() {
  return (
    <ListGroup component='div'>
      <ListGroupItem component='a' href='#' action active aria-current='true'>
        The current link item
      </ListGroupItem>
      <ListGroupItem component='a' href='#' action>
        A second link item
      </ListGroupItem>
      <ListGroupItem component='a' href='#' action>
        A third link item
      </ListGroupItem>
      <ListGroupItem component='a' href='#' action>
        A fourth link item
      </ListGroupItem>
      <ListGroupItem component='a' action className='disabled' aria-disabled='true'>
        A disabled link item
      </ListGroupItem>
    </ListGroup>
  );
}
