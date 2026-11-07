import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Menu,
  MenuItem,
  Popover,
  PopoverBody,
  PopoverHeader,
  Toast,
  ToastBody,
  ToastContainer,
  Tooltip,
  TooltipInner,
} from 'react-bootstrap-pro';

export function DialogOverlaysDemo() {
  const [show, setShow] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const closeDialog = (next: boolean) => {
    setShow(next);
    if (!next) {
      setPopoverOpen(false);
      setTooltipOpen(false);
    }
  };
  const {
    refs: { setReference: setTooltipReference, setFloating: setTooltipFloating },
    context: tooltipContext,
    floatingStyles: tooltipStyles,
  } = useFloating({
    open: tooltipOpen,
    onOpenChange: setTooltipOpen,
    placement: 'top',
    middleware: [offset(6), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });
  const tooltipInteractions = useInteractions([
    useHover(tooltipContext),
    useFocus(tooltipContext),
    useDismiss(tooltipContext),
    useRole(tooltipContext, { role: 'tooltip' }),
  ]);
  const {
    refs: { setReference: setPopoverReference, setFloating: setPopoverFloating },
    context,
    floatingStyles,
  } = useFloating({
    open: popoverOpen,
    onOpenChange: setPopoverOpen,
    placement: 'top',
    middleware: [offset(8), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context, { role: 'dialog' }),
  ]);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-overlays'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Open dialog
      </button>
      <Dialog
        show={show}
        onShowChange={closeDialog}
        id='dialog-overlays'
        aria-labelledby='dialog-overlays-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-overlays-title'>Overlays inside dialogs</DialogTitle>
          <CloseButton onClick={() => closeDialog(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>These components work inside modal dialogs.</p>
          <div className='d-flex flex-wrap gap-2'>
            <button
              type='button'
              className='btn-solid theme-secondary'
              ref={setTooltipReference}
              {...tooltipInteractions.getReferenceProps()}
            >
              Tooltip
            </button>
            {tooltipOpen && (
              <Tooltip
                show
                ref={setTooltipFloating}
                style={tooltipStyles}
                {...tooltipInteractions.getFloatingProps()}
              >
                <TooltipInner>Tooltip inside a dialog!</TooltipInner>
              </Tooltip>
            )}
            <button
              type='button'
              className='btn-solid theme-secondary'
              ref={setPopoverReference}
              {...getReferenceProps()}
            >
              Popover
            </button>
            {popoverOpen && (
              <Popover
                show
                ref={setPopoverFloating}
                style={floatingStyles}
                {...getFloatingProps({ 'aria-labelledby': 'dialog-popover-title' })}
              >
                <PopoverHeader id='dialog-popover-title'>Popover title</PopoverHeader>
                <PopoverBody>This popover is rendered inside the dialog.</PopoverBody>
              </Popover>
            )}
            <Menu
              trigger={
                <button type='button' className='btn-solid theme-secondary'>
                  Menu
                </button>
              }
            >
              <MenuItem href='#dialog-overlays'>Action</MenuItem>
              <MenuItem href='#dialog-overlays'>Another action</MenuItem>
            </Menu>
          </div>
          <ToastContainer position='fixed' bottom={0} end={0} p={3}>
            <Toast show>
              <ToastBody>Toast inside a dialog.</ToastBody>
            </Toast>
          </ToastContainer>
        </DialogBody>
        <DialogFooter>
          <button
            type='button'
            className='btn-solid theme-secondary'
            onClick={() => closeDialog(false)}
          >
            Close
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
