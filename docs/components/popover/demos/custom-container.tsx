import { useState } from 'react';
import { Box, Button, Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

export function PopoverCustomContainerDemo() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  return (
    <Box ref={setContainer} border rounded p={4} style={{ minHeight: 160 }}>
      <Popover
        container={container}
        trigger={
          <Button variant='solid' theme='secondary'>
            Toggle popover in this container
          </Button>
        }
      >
        <PopoverHeader>Custom container</PopoverHeader>
        <PopoverBody>The portal is mounted inside the bordered container.</PopoverBody>
      </Popover>
    </Box>
  );
}
