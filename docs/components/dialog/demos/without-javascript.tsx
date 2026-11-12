import {
  Button,
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

const openCommand = { commandfor: 'dialog-invoker', command: 'show-modal' };
const closeCommand = { commandfor: 'dialog-invoker', command: 'close' };

export function DialogWithoutJavaScriptDemo() {
  return (
    <>
      <Button {...openCommand} variant='solid' theme='primary'>
        Open dialog
      </Button>
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
        <DialogFooter>
          <Button {...closeCommand} variant='solid' theme='secondary'>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
