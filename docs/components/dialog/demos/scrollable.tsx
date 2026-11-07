import { useState } from 'react';
import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogScrollableDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-controls='dialog-scrollable'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Launch scrollable body dialog
      </button>
      <Dialog
        show={show}
        onShowChange={setShow}
        id='dialog-scrollable'
        scrollable
        aria-labelledby='dialog-scrollable-title'
      >
        <DialogHeader>
          <DialogTitle id='dialog-scrollable-title'>Scrollable body</DialogTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>
            This content demonstrates scrolling within the dialog body while the header and footer
            remain fixed.
          </p>
          {Array.from({ length: 8 }, (_, index) => (
            <p key={index}>
              Scrollable dialog content {index + 1}. Add enough content to exceed the dialog&apos;s
              inner height.
            </p>
          ))}
          <p>The final paragraph appears at the bottom after scrolling.</p>
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
