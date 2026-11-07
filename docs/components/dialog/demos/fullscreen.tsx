import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogFullscreenDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-fullscreen'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Fullscreen dialog
      </button>
      <Dialog
        show={show}
        onShowChange={setShow}
        id='dialog-fullscreen'
        fullscreen
        aria-labelledby='dialog-fullscreen-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-fullscreen-title'>Fullscreen dialog</DialogTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog covers the entire viewport.</p>
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
