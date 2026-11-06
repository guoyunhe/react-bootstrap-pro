import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

const openCommand = { commandfor: 'drawer-invoker', command: 'show-modal' };
const closeCommand = { commandfor: 'drawer-invoker', command: 'close' };

export function DrawerWithoutJavaScriptDemo() {
  return (
    <>
      <button {...openCommand} type='button' className='btn-solid theme-primary'>
        Open drawer
      </button>
      <Drawer id='drawer-invoker' placement='start' aria-labelledby='drawer-invoker-title'>
        <DrawerHeader>
          <DrawerTitle id='drawer-invoker-title'>Invoker Commands</DrawerTitle>
          <CloseButton {...closeCommand} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>
            This drawer opens with <code>command=&apos;show-modal&apos;</code> and closes with{' '}
            <code>command=&apos;close&apos;</code>. No Bootstrap JavaScript is involved.
          </p>
        </DrawerBody>
      </Drawer>
    </>
  );
}
