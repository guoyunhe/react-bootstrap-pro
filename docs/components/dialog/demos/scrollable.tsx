import {
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'react-bootstrap-pro';

export function DialogScrollableDemo() {
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        data-bs-toggle='dialog'
        data-bs-target='#dialog-scrollable'
      >
        Launch scrollable body dialog
      </button>
      <Dialog id='dialog-scrollable' scrollable aria-labelledby='dialog-scrollable-title'>
        <DialogHeader>
          <DialogTitle id='dialog-scrollable-title'>Scrollable body</DialogTitle>
          <CloseButton data-bs-dismiss='dialog' aria-label='Close' />
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
          <button type='button' className='btn-solid theme-secondary' data-bs-dismiss='dialog'>
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
