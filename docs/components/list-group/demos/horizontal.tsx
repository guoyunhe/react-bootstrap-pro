import { Box, ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupHorizontalDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      {([true, 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((horizontal) => (
        <Box key={String(horizontal)} containerQuery='inline'>
          <ListGroup horizontal={horizontal}>
            <ListGroupItem>An item</ListGroupItem>
            <ListGroupItem>A second item</ListGroupItem>
            <ListGroupItem>A third item</ListGroupItem>
          </ListGroup>
        </Box>
      ))}
    </Box>
  );
}
