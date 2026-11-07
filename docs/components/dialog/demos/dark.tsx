import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogDarkDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-dark'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Open dark dialog
      </button>
      <Dialog
        show={show}
        onShowChange={setShow}
        id='dialog-dark'
        data-bs-theme='dark'
        aria-labelledby='dialog-dark-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-dark-title'>Dark dialog title</DialogTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This native dialog uses the dark color mode.</p>
        </DialogBody>
        <DialogFooter>
          <button
            type='button'
            className='btn-solid theme-secondary'
            onClick={() => setShow(false)}
          >
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
