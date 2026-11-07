import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Menu,
  MenuItem,
  Toast,
  ToastBody,
  ToastContainer,
} from 'react-bootstrap-pro';

export function DialogOverlaysDemo() {
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        data-bs-toggle='dialog'
        data-bs-target='#dialog-overlays'
      >
        Open dialog
      </button>
      <Dialog id='dialog-overlays' aria-labelledby='dialog-overlays-title'>
        <DialogHeader>
          <DialogTitle id='dialog-overlays-title'>Overlays inside dialogs</DialogTitle>
          <CloseButton data-bs-dismiss='dialog' aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>These components work inside modal dialogs.</p>
          <div className='d-flex flex-wrap gap-2'>
            <button
              type='button'
              className='btn-solid theme-secondary'
              data-bs-toggle='tooltip'
              data-bs-title='Tooltip inside a dialog!'
              data-bs-container='#dialog-overlays'
            >
              Tooltip
            </button>
            <button
              type='button'
              className='btn-solid theme-secondary'
              data-bs-toggle='popover'
              data-bs-title='Popover title'
              data-bs-content='This popover is rendered inside the dialog.'
              data-bs-placement='top'
              data-bs-container='#dialog-overlays'
            >
              Popover
            </button>
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
          <button type='button' className='btn-solid theme-secondary' data-bs-dismiss='dialog'>
            Close
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
