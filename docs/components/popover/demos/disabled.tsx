import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

export function PopoverDisabledDemo() {
  const [open, setOpen] = useState(false);
  const {
    refs: { setReference, setFloating },
    context,
    floatingStyles,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'top',
    middleware: [offset(8), flip(), shift({ padding: 8 })],
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context, { role: 'dialog' }),
  ]);

  return (
    <div className='d-flex justify-content-center py-5'>
      <span
        ref={setReference}
        role='button'
        tabIndex={0}
        aria-label='More information about the disabled action'
        className='d-inline-block'
        {...getReferenceProps({
          'aria-expanded': open,
          'aria-controls': open ? 'popover-disabled' : undefined,
        })}
      >
        <button
          type='button'
          className='btn-solid theme-secondary'
          disabled
          aria-hidden='true'
          style={{ pointerEvents: 'none' }}
        >
          Disabled action
        </button>
      </span>
      {open && (
        <FloatingPortal>
          <Popover
            ref={setFloating}
            style={floatingStyles}
            show
            placement='top'
            {...getFloatingProps({
              id: 'popover-disabled',
              'aria-labelledby': 'popover-disabled-title',
            })}
          >
            <PopoverHeader id='popover-disabled-title'>Disabled action</PopoverHeader>
            <PopoverBody>Use a focusable wrapper as the popover trigger.</PopoverBody>
          </Popover>
        </FloatingPortal>
      )}
    </div>
  );
}
