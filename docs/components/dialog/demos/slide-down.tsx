import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogSlideDownDemo() {
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        data-bs-toggle='dialog'
        data-bs-target='#dialog-slide-down'
      >
        Slide down dialog
      </button>
      <Dialog id='dialog-slide-down' slide='down' aria-labelledby='dialog-slide-down-title'>
        <DialogHeader>
          <DialogTitle id='dialog-slide-down-title'>Slide down dialog</DialogTitle>
          <CloseButton data-bs-dismiss='dialog' aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog slides down from the top of the viewport.</p>
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
