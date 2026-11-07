import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogNonmodalDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-nonmodal'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Open non-modal dialog
      </button>
      <Dialog
        show={show}
        onShowChange={setShow}
        id='dialog-nonmodal'
        nonmodal
        aria-labelledby='dialog-nonmodal-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-nonmodal-title'>Non-modal dialog</DialogTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog does not block the page; content behind it remains interactive.</p>
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
