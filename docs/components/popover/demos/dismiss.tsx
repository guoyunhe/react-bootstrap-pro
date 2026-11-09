import { Box, Button, Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

export function PopoverDismissDemo() {
  return (
    <Box py={5}>
      <Popover
        triggers={['focus']}
        trigger={
          <Button variant='solid' theme='secondary'>
            Focus to open
          </Button>
        }
      >
        <PopoverHeader>Dismissible popover</PopoverHeader>
        <PopoverBody>Click anywhere else or press Escape to dismiss.</PopoverBody>
      </Popover>
    </Box>
  );
}
