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

type PopoverPlacement = 'top' | 'end' | 'bottom' | 'start';

const floatingPlacements = {
  top: 'top',
  end: 'right',
  bottom: 'bottom',
  start: 'left',
} as const;

const getPopoverPlacement = (placement: string): PopoverPlacement => {
  const side = placement.split('-')[0];

  if (side === 'right') return 'end';
  if (side === 'left') return 'start';
  if (side === 'bottom') return 'bottom';
  return 'top';
};

function PlacementPopover({ placement }: { placement: PopoverPlacement }) {
  const [open, setOpen] = useState(false);
  const id = `popover-placement-${placement}`;
  const {
    refs: { setReference, setFloating },
    context,
    floatingStyles,
    placement: actualPlacement,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: floatingPlacements[placement],
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
    <div>
      <button
        type='button'
        className='btn-solid theme-secondary'
        ref={setReference}
        {...getReferenceProps({
          'aria-expanded': open,
          'aria-controls': open ? id : undefined,
        })}
      >
        Popover on {placement}
      </button>
      {open && (
        <FloatingPortal>
          <Popover
            ref={setFloating}
            style={floatingStyles}
            show
            placement={getPopoverPlacement(actualPlacement)}
            {...getFloatingProps({
              id,
              'aria-labelledby': `${id}-title`,
            })}
          >
            <PopoverHeader id={`${id}-title`}>Popover on {placement}</PopoverHeader>
            <PopoverBody>Floating UI positions this popover.</PopoverBody>
          </Popover>
        </FloatingPortal>
      )}
    </div>
  );
}

export function PopoverPlacementDemo() {
  const placements: PopoverPlacement[] = ['top', 'end', 'bottom', 'start'];

  return (
    <div className='d-flex flex-wrap justify-content-center gap-2 py-5'>
      {placements.map((placement) => (
        <PlacementPopover key={placement} placement={placement} />
      ))}
    </div>
  );
}
