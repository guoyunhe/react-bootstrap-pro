import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogSwappingDemo() {
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        data-bs-toggle='dialog'
        data-bs-target='#dialog-swap-first'
      >
        Open first dialog
      </button>
      <Dialog id='dialog-swap-first' aria-labelledby='dialog-swap-first-title'>
        <DialogHeader>
          <DialogTitle id='dialog-swap-first-title'>First dialog</DialogTitle>
          <CloseButton data-bs-dismiss='dialog' aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>Open the second dialog. The backdrop stays visible during the swap.</p>
        </DialogBody>
        <DialogFooter>
          <button type='button' className='btn-solid theme-secondary' data-bs-dismiss='dialog'>
            Close
          </button>
          <button
            type='button'
            className='btn-solid theme-primary'
            data-bs-toggle='dialog'
            data-bs-target='#dialog-swap-second'
          >
            Go to second dialog
          </button>
        </DialogFooter>
      </Dialog>
      <Dialog id='dialog-swap-second' aria-labelledby='dialog-swap-second-title'>
        <DialogHeader>
          <DialogTitle id='dialog-swap-second-title'>Second dialog</DialogTitle>
          <CloseButton data-bs-dismiss='dialog' aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>Swap back to the first dialog or close this one.</p>
        </DialogBody>
        <DialogFooter>
          <button type='button' className='btn-solid theme-secondary' data-bs-dismiss='dialog'>
            Close
          </button>
          <button
            type='button'
            className='btn-solid theme-primary'
            data-bs-toggle='dialog'
            data-bs-target='#dialog-swap-first'
          >
            Back to first dialog
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
