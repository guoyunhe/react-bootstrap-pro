import { CloseButton, Dialog, DialogBody, DialogHeader, DialogTitle } from 'react-bootstrap-pro';

const openCommand = { commandfor: 'dialog-invoker', command: 'show-modal' };
const closeCommand = { commandfor: 'dialog-invoker', command: 'close' };

export function DialogWithoutJavaScriptDemo() {
  return (
    <>
      <button {...openCommand} type='button' className='btn-solid theme-primary'>
        Open dialog
      </button>
      <Dialog id='dialog-invoker' aria-labelledby='dialog-invoker-title'>
        <DialogHeader>
          <DialogTitle id='dialog-invoker-title'>Invoker Commands</DialogTitle>
          <CloseButton {...closeCommand} aria-label='Close' />
        </DialogHeader>
        <DialogBody>
          <p>
            This dialog opens with <code>command=&apos;show-modal&apos;</code> and closes with{' '}
            <code>command=&apos;close&apos;</code>. No Bootstrap JavaScript is involved.
          </p>
        </DialogBody>
        <div className='dialog-footer'>
          <button {...closeCommand} type='button' className='btn-solid theme-secondary'>
            Close
          </button>
        </div>
      </Dialog>
    </>
  );
}
