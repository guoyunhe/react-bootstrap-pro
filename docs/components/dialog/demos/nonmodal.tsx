import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogNonmodalDemo() {
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        data-bs-toggle='dialog'
        data-bs-target='#dialog-nonmodal'
        data-bs-modal='false'
      >
        Open non-modal dialog
      </button>
      <Dialog id='dialog-nonmodal' nonmodal aria-labelledby='dialog-nonmodal-title'>
        <DialogHeader>
          <DialogTitle id='dialog-nonmodal-title'>Non-modal dialog</DialogTitle>
          <CloseButton data-bs-dismiss='dialog' aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog does not block the page; content behind it remains interactive.</p>
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
