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

export function PopoverBasicDemo() {
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
    useDismiss(context, { escapeKey: true }),
    useRole(context, { role: 'dialog' }),
  ]);

  return (
    <div className='d-flex justify-content-center py-5'>
      <button
        type='button'
        className='btn-solid theme-primary'
        ref={setReference}
        {...getReferenceProps({
          'aria-expanded': open,
          'aria-controls': open ? 'popover-basic' : undefined,
        })}
      >
        Toggle popover
      </button>
      {open && (
        <FloatingPortal>
          <Popover
            ref={setFloating}
            style={floatingStyles}
            show
            placement='top'
            {...getFloatingProps({
              id: 'popover-basic',
              'aria-labelledby': 'popover-basic-title',
            })}
          >
            <PopoverHeader id='popover-basic-title'>Popover title</PopoverHeader>
            <PopoverBody>This is the popover content. It is positioned by Floating UI.</PopoverBody>
          </Popover>
        </FloatingPortal>
      )}
    </div>
  );
}
