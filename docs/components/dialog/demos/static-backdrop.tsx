import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogStaticBackdropDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-static-backdrop'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Open static backdrop dialog
      </button>
      <Dialog
        show={show}
        onShowChange={setShow}
        backdrop='static'
        id='dialog-static-backdrop'
        aria-labelledby='dialog-static-backdrop-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-static-backdrop-title'>Static backdrop</DialogTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>
            Clicking outside this dialog will not close it. Use the close button or press Escape.
          </p>
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
