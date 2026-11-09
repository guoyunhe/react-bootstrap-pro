import { Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

export function PopoverDisabledDemo() {
  return (
    <div className='py-5'>
      <Popover
        triggers={['hover', 'focus']}
        trigger={
          <span tabIndex={0} aria-label='More information about the disabled action'>
            <button
              type='button'
              className='btn-solid theme-secondary'
              disabled
              style={{ pointerEvents: 'none' }}
            >
              Disabled action
            </button>
          </span>
        }
      >
        <PopoverHeader>Disabled action</PopoverHeader>
        <PopoverBody>Use a focusable wrapper as the popover trigger.</PopoverBody>
      </Popover>
    </div>
  );
}
