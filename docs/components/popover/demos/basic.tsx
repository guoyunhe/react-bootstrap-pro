import { Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

export function PopoverBasicDemo() {
  return (
    <div className='py-5'>
      <Popover
        trigger={
          <button type='button' className='btn-solid theme-primary'>
            Toggle popover
          </button>
        }
      >
        <PopoverHeader>Popover title</PopoverHeader>
        <PopoverBody>And here’s some amazing content. It’s very engaging. Right?</PopoverBody>
      </Popover>
    </div>
  );
}
