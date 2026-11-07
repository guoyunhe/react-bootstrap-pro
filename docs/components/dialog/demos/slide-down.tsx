import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogSlideDownDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-slide-down'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Slide down dialog
      </button>
      <Dialog
        show={show}
        onShowChange={setShow}
        id='dialog-slide-down'
        slide='down'
        aria-labelledby='dialog-slide-down-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-slide-down-title'>Slide down dialog</DialogTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>This dialog slides down from the top of the viewport.</p>
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
