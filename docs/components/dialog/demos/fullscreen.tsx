import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogFullscreenDemo() {
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        data-bs-toggle='dialog'
        data-bs-target='#dialog-fullscreen'
      >
        Fullscreen dialog
      </button>
      <Dialog id='dialog-fullscreen' fullscreen aria-labelledby='dialog-fullscreen-title'>
        <DialogHeader>
          <DialogTitle id='dialog-fullscreen-title'>Fullscreen dialog</DialogTitle>
          <CloseButton data-bs-dismiss='dialog' aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog covers the entire viewport.</p>
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
