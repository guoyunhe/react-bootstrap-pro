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

import './custom.css';

export function PopoverCustomDemo() {
  const [open, setOpen] = useState(false);
  const {
    refs: { setReference, setFloating },
    context,
    floatingStyles,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'right',
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
      <button
        type='button'
        className='btn-solid theme-primary'
        ref={setReference}
        {...getReferenceProps({
          'aria-expanded': open,
          'aria-controls': open ? 'popover-custom' : undefined,
        })}
      >
        Toggle custom popover
      </button>
      {open && (
        <FloatingPortal>
          <Popover
            ref={setFloating}
            style={floatingStyles}
            className='custom-popover'
            show
            placement='end'
            {...getFloatingProps({
              id: 'popover-custom',
              'aria-labelledby': 'popover-custom-title',
            })}
          >
            <PopoverHeader id='popover-custom-title'>Custom popover</PopoverHeader>
            <PopoverBody>Override local CSS variables to customize the surface.</PopoverBody>
          </Popover>
        </FloatingPortal>
      )}
    </div>
  );
}
