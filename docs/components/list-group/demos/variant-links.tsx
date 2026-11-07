import { ListGroup, ListGroupItem, type Theme } from 'react-bootstrap-pro';

export function ListGroupVariantLinksDemo() {
  const themes: Theme[] = [
    'primary',
    'accent',
    'success',
    'danger',
    'warning',
    'info',
    'inverse',
    'secondary',
  ];
  return (
    <ListGroup component='div'>
      <ListGroupItem component='a' href='#' action>
        A simple default list group item
      </ListGroupItem>
      {themes.map((theme) => (
        <ListGroupItem key={theme} component='a' href='#' action theme={theme}>
          A simple {theme} list group item
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
