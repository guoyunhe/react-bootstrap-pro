import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogSwappingDemo() {
  const [show, setShow] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-swap'
        aria-expanded={show}
        onClick={() => {
          setSecond(false);
          setShow(true);
        }}
      >
        Open first dialog
      </button>
      <Dialog
        id='dialog-swap'
        show={show}
        onShowChange={setShow}
        aria-labelledby='dialog-swap-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-swap-title'>
            {second ? 'Second dialog' : 'First dialog'}
          </DialogTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>
            {second
              ? 'Swap back to the first dialog or close this one.'
              : 'Open the second dialog. The backdrop stays visible during the swap.'}
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
          <button
            type='button'
            className='btn-solid theme-primary'
            onClick={() => setSecond(!second)}
          >
            {second ? 'Back to first dialog' : 'Go to second dialog'}
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
