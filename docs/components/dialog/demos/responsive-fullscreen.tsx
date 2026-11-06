import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogResponsiveFullscreenDemo() {
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        data-bs-toggle='dialog'
        data-bs-target='#dialog-responsive-fullscreen'
      >
        Fullscreen below lg
      </button>
      <Dialog
        id='dialog-responsive-fullscreen'
        className='lg-down:dialog-fullscreen'
        aria-labelledby='dialog-responsive-fullscreen-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-responsive-fullscreen-title'>Fullscreen below lg</DialogTitle>
          <CloseButton data-bs-dismiss='dialog' aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog fills the viewport below the lg breakpoint.</p>
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
