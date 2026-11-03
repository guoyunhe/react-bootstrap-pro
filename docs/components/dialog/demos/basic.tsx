import { Dialog, DialogHeader, DialogTitle, CloseButton, DialogBody } from 'react-bootstrap-pro';

export function DialogBasicDemo() {
  return (
    <Dialog open size='sm'>
      <DialogHeader>
        <DialogTitle>Dialog title</DialogTitle>
        <CloseButton />
      </DialogHeader>
      <DialogBody>Dialog content</DialogBody>
    </Dialog>
  );
}
