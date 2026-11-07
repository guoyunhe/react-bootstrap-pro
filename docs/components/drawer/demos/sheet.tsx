import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerSheetDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-controls='drawer-sheet'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Toggle sheet drawer
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-sheet'
        placement='bottom'
        sheet
        aria-labelledby='drawer-sheet-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-sheet-title'>Sheet drawer</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>This bottom sheet reaches the viewport edge with its bottom corners flattened.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}
