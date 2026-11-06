import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerSheetDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-sheet'
        aria-controls='drawer-sheet'
      >
        Toggle sheet drawer
      </button>
      <Drawer id='drawer-sheet' placement='bottom' sheet aria-labelledby='drawer-sheet-title'>
        <DrawerHeader>
          <DrawerTitle id='drawer-sheet-title'>Sheet drawer</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>This bottom sheet reaches the viewport edge with its bottom corners flattened.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}
