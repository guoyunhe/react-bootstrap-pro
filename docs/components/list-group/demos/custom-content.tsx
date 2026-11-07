import { Box, ListGroup, ListGroupItem } from 'react-bootstrap-pro';

export function ListGroupCustomContentDemo() {
  return (
    <ListGroup component='div'>
      {[0, 1, 2].map((index) => (
        <ListGroupItem
          key={index}
          component='a'
          href='#'
          action
          active={index === 0}
          aria-current={index === 0 ? 'true' : undefined}
        >
          <Box d='flex' w={100} justifyContent='between'>
            <Box component='h5' mb={1}>
              List group item heading
            </Box>
            <Box component='small' fg={index === 0 ? undefined : '2'}>
              3 days ago
            </Box>
          </Box>
          <Box component='p' mb={1}>
            Some placeholder content in a paragraph.
          </Box>
          <Box component='small' fg={index === 0 ? undefined : '2'}>
            And some {index === 0 ? '' : 'muted '}small print.
          </Box>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
