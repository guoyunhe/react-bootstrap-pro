import { ListGroup, ListGroupItem, type Theme } from 'react-bootstrap-pro';

export function ListGroupVariantsDemo() {
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
    <ListGroup>
      <ListGroupItem>A simple default list group item</ListGroupItem>
      {themes.map((theme) => (
        <ListGroupItem key={theme} theme={theme}>
          A simple {theme} list group item
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
