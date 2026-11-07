import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogInstantDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-instant'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Instant dialog
      </button>
      <Dialog
        show={show}
        onShowChange={setShow}
        id='dialog-instant'
        instant
        aria-labelledby='dialog-instant-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-instant-title'>Instant dialog</DialogTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog appears and closes without a transition.</p>
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
