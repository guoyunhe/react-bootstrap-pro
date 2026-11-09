import { Box, Button, Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

export function PopoverDisabledDemo() {
  return (
    <Box py={5}>
      <Popover
        triggers={['hover', 'focus']}
        trigger={
          <span tabIndex={0} aria-label='More information about the disabled action'>
            <Button variant='solid' theme='secondary' disabled style={{ pointerEvents: 'none' }}>
              Disabled action
            </Button>
          </span>
        }
      >
        <PopoverHeader>Disabled action</PopoverHeader>
        <PopoverBody>Use a focusable wrapper as the popover trigger.</PopoverBody>
      </Popover>
    </Box>
  );
}
