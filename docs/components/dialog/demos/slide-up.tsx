import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogSlideUpDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-slide-up'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Slide up dialog
      </button>
      <Dialog
        show={show}
        onShowChange={setShow}
        id='dialog-slide-up'
        slide='up'
        aria-labelledby='dialog-slide-up-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-slide-up-title'>Slide up dialog</DialogTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog slides up from the bottom of the viewport.</p>
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
