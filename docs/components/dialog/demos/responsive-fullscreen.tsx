import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogResponsiveFullscreenDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-responsive-fullscreen'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Fullscreen below lg
      </button>
      <Dialog
        show={show}
        onShowChange={setShow}
        id='dialog-responsive-fullscreen'
        className='lg-down:dialog-fullscreen'
        aria-labelledby='dialog-responsive-fullscreen-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-responsive-fullscreen-title'>Fullscreen below lg</DialogTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog fills the viewport below the lg breakpoint.</p>
        </DialogBody>
        <DialogFooter>
          <button
            type='button'
            className='btn-solid theme-secondary'
            onClick={() => setShow(false)}
          >
            Close
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
