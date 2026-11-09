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
import { useState, useSyncExternalStore } from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'react-bootstrap-pro';

type PopoverPlacement = 'end' | 'bottom';

const placementMediaQuery = '(min-width: 768px)';

function subscribeToPlacement(callback: () => void) {
  const mediaQuery = window.matchMedia(placementMediaQuery);

  mediaQuery.addEventListener('change', callback);

  return () => mediaQuery.removeEventListener('change', callback);
}

function getIsWide() {
  return window.matchMedia(placementMediaQuery).matches;
}

const getPopoverPlacement = (placement: string): PopoverPlacement =>
  placement.startsWith('right') ? 'end' : 'bottom';

export function PopoverResponsivePlacementDemo() {
  const [open, setOpen] = useState(false);
  const isWide = useSyncExternalStore(subscribeToPlacement, getIsWide, () => false);
  const placement = isWide ? 'right' : 'bottom';
  const {
    refs: { setReference, setFloating },
    context,
    floatingStyles,
    placement: actualPlacement,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
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
    <div className='d-flex flex-column align-items-center gap-2 py-5'>
      <button
        type='button'
        className='btn-solid theme-secondary'
        ref={setReference}
        {...getReferenceProps({
          'aria-expanded': open,
          'aria-controls': open ? 'popover-responsive-placement' : undefined,
        })}
      >
        Toggle responsive popover
      </button>
      <span className='fg-2'>Bottom below 768px; end at 768px and above.</span>
      {open && (
        <FloatingPortal>
          <Popover
            ref={setFloating}
            style={floatingStyles}
            show
            placement={getPopoverPlacement(actualPlacement)}
            {...getFloatingProps({
              id: 'popover-responsive-placement',
              'aria-labelledby': 'popover-responsive-placement-title',
            })}
          >
            <PopoverHeader id='popover-responsive-placement-title'>
              Responsive placement
            </PopoverHeader>
            <PopoverBody>Resize the viewport to change the requested placement.</PopoverBody>
          </Popover>
        </FloatingPortal>
      )}
    </div>
  );
}
