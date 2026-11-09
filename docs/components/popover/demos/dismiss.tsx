import { Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

export function PopoverDismissDemo() {
  return (
    <div className='py-5'>
      <Popover
        triggers={['focus']}
        trigger={
          <button type='button' className='btn-solid theme-secondary'>
            Focus to open
          </button>
        }
      >
        <PopoverHeader>Dismissible popover</PopoverHeader>
        <PopoverBody>Click anywhere else or press Escape to dismiss.</PopoverBody>
      </Popover>
    </div>
  );
}
