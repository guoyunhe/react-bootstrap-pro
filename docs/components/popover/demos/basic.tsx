import { Box, Button, Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

export function PopoverBasicDemo() {
  return (
    <Box py={5}>
      <Popover
        trigger={
          <Button variant='solid' theme='primary'>
            Toggle popover
          </Button>
        }
      >
        <PopoverHeader>Popover title</PopoverHeader>
        <PopoverBody>And here’s some amazing content. It’s very engaging. Right?</PopoverBody>
      </Popover>
    </Box>
  );
}
