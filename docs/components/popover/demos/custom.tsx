import { Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

import './custom.css';

export function PopoverCustomDemo() {
  return (
    <div className='py-5'>
      <Popover
        className='custom-popover'
        trigger={
          <button type='button' className='btn-solid theme-primary'>
            Toggle custom popover
          </button>
        }
      >
        <PopoverHeader>Custom popover</PopoverHeader>
        <PopoverBody>Override local CSS variables to customize the surface.</PopoverBody>
      </Popover>
    </div>
  );
}
