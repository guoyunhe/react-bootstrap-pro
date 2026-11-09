import { Box, Button, Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

import './custom.css';

export function PopoverCustomDemo() {
  return (
    <Box py={5}>
      <Popover
        className='custom-popover'
        trigger={
          <Button variant='solid' theme='primary'>
            Toggle custom popover
          </Button>
        }
      >
        <PopoverHeader>Custom popover</PopoverHeader>
        <PopoverBody>Override local CSS variables to customize the surface.</PopoverBody>
      </Popover>
    </Box>
  );
}
