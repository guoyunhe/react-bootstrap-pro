import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

export function PopoverDismissDemo() {
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
    useFocus(context),
    useDismiss(context, { escapeKey: true }),
    useRole(context, { role: 'dialog' }),
  ]);

  return (
    <div className='d-flex flex-wrap align-items-center gap-3 py-5'>
      <button
        type='button'
        className='btn-solid theme-secondary'
        ref={setReference}
        {...getReferenceProps()}
      >
        Focus to open
      </button>
      <button type='button' className='btn-solid theme-primary'>
        Click elsewhere to dismiss
      </button>
      {open && (
        <FloatingPortal>
          <Popover
            ref={setFloating}
            style={floatingStyles}
            show
            placement='top'
            {...getFloatingProps({
              id: 'popover-dismiss',
              'aria-labelledby': 'popover-dismiss-title',
            })}
          >
            <PopoverHeader id='popover-dismiss-title'>Dismissible popover</PopoverHeader>
            <PopoverBody>Move focus or click outside, or press Escape.</PopoverBody>
          </Popover>
        </FloatingPortal>
      )}
    </div>
  );
}
