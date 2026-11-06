import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogStaticBackdropDemo() {
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        data-bs-toggle='dialog'
        data-bs-target='#dialog-static-backdrop'
        data-bs-backdrop='static'
      >
        Open static backdrop dialog
      </button>
      <Dialog id='dialog-static-backdrop' aria-labelledby='dialog-static-backdrop-title'>
        <DialogHeader>
          <DialogTitle id='dialog-static-backdrop-title'>Static backdrop</DialogTitle>
          <CloseButton data-bs-dismiss='dialog' aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>
            Clicking outside this dialog will not close it. Use the close button or press Escape.
          </p>
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
