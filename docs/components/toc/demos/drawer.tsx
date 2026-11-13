import { useState } from 'react';
import { BiListUl } from 'react-bootstrap-icons-pro';
import type { TocHeading } from 'react-bootstrap-pro';
import {
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerTitle,
  Toc,
} from 'react-bootstrap-pro';

const headings: TocHeading[] = [
  { id: 'toc-drawer-demo-install', text: 'Install' },
  { id: 'toc-drawer-demo-cdn', text: 'CDN' },
  { id: 'toc-drawer-demo-download', text: 'Download' },
];

export function TocDrawerDemo() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant='solid'
        theme='primary'
        aria-controls='toc-drawer-demo'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        <BiListUl aria-hidden='true' />
        On this page…
      </Button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='toc-drawer-demo'
        placement='bottom'
        sheet
        aria-labelledby='toc-drawer-demo-title'
      >
        <DrawerHeader>
          <DrawerTitle id='toc-drawer-demo-title'>On this page</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <Toc
            headings={headings}
            activeId='toc-drawer-demo-cdn'
            onNavigate={() => setShow(false)}
          />
        </DrawerBody>
      </Drawer>
    </>
  );
}
