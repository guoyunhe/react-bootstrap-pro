import { useState } from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

export function PopoverCustomContainerDemo() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={setContainer} className='border rounded p-4' style={{ minHeight: 160 }}>
      <Popover
        container={container}
        trigger={
          <button type='button' className='btn-solid theme-secondary'>
            Toggle popover in this container
          </button>
        }
      >
        <PopoverHeader>Custom container</PopoverHeader>
        <PopoverBody>The portal is mounted inside the bordered container.</PopoverBody>
      </Popover>
    </div>
  );
}
