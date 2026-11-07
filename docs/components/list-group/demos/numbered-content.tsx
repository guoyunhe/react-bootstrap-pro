import { Badge, Box, ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupNumberedContentDemo() {
  return (
    <ListGroup component='ol' numbered>
      {[1, 2, 3].map((item) => (
        <ListGroupItem key={item} d='flex' justifyContent='between' alignItems='start'>
          <Box ms={2} me='auto'>
            <Box fontWeight='bold'>Subheading</Box>Content for list item
          </Box>
          <Badge theme='primary'>14</Badge>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
