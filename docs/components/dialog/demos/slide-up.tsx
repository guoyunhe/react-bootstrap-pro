import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogSlideUpDemo() {
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        data-bs-toggle='dialog'
        data-bs-target='#dialog-slide-up'
      >
        Slide up dialog
      </button>
      <Dialog id='dialog-slide-up' slide='up' aria-labelledby='dialog-slide-up-title'>
        <DialogHeader>
          <DialogTitle id='dialog-slide-up-title'>Slide up dialog</DialogTitle>
          <CloseButton data-bs-dismiss='dialog' aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog slides up from the bottom of the viewport.</p>
        </DialogBody>
        <DialogFooter>
          <button type='button' className='btn-solid theme-secondary' data-bs-dismiss='dialog'>
            Close
          </button>
          <button type='button' className='btn-solid theme-primary'>
            Save changes
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
