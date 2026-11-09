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

export function PopoverCustomContainerDemo() {
  const [open, setOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLDivElement | null>(null);
  const {
    refs: { setReference, setFloating },
    context,
    floatingStyles,
    placement,
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
    <div
      ref={setPortalRoot}
      className='border rounded p-4'
      style={{ minHeight: 160, overflow: 'hidden' }}
    >
      <button
        type='button'
        className='btn-solid theme-secondary'
        ref={setReference}
        {...getReferenceProps({
          'aria-expanded': open,
          'aria-controls': open ? 'popover-custom-container' : undefined,
        })}
      >
        Toggle popover in this container
      </button>
      {open && portalRoot && (
        <FloatingPortal root={portalRoot}>
          <Popover
            ref={setFloating}
            style={floatingStyles}
            show
            placement={
              placement.startsWith('right')
                ? 'end'
                : placement.startsWith('left')
                  ? 'start'
                  : placement.startsWith('bottom')
                    ? 'bottom'
                    : 'top'
            }
            {...getFloatingProps({
              id: 'popover-custom-container',
              'aria-labelledby': 'popover-custom-container-title',
            })}
          >
            <PopoverHeader id='popover-custom-container-title'>Custom container</PopoverHeader>
            <PopoverBody>The portal is mounted inside the bordered container.</PopoverBody>
          </Popover>
        </FloatingPortal>
      )}
    </div>
  );
}
