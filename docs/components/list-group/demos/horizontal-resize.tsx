import { Box, ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupHorizontalResizeDemo() {
  return (
    <Box
      style={{
        resize: 'horizontal',
        overflow: 'auto',
        width: '100%',
        maxWidth: '100%',
        minWidth: '16rem',
      }}
    >
      <Box containerQuery='inline'>
        <ListGroup horizontal='md'>
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
      </Box>
    </Box>
  );
}
