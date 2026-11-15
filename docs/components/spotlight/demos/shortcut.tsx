import { useState } from 'react';
import { BiSearch } from 'react-bootstrap-icons-pro';
import {
  Box,
  Button,
  Spotlight,
  getSpotlightShortcut,
  type SpotlightAction,
} from 'react-bootstrap-pro';

export function SpotlightShortcutDemo() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<string>();

  const actions: SpotlightAction[] = ['Getting started', 'Components', 'Guides', 'Examples'].map(
    (label) => ({ label, onClick: () => setSelected(label) }),
  );

  return (
    <>
      <Button
        variant='outline'
        theme='secondary'
        aria-haspopup='dialog'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        <Box component='span' d='inline-flex' alignItems='center' gap={2}>
          <BiSearch size={16} aria-hidden='true' />
          Search
          <Box component='kbd' fontSize='xs'>
            {getSpotlightShortcut()}
          </Box>
        </Box>
      </Button>
      <p className='mt-3 mb-0'>
        Press <kbd>{getSpotlightShortcut()}</kbd> anywhere on this page to open it. Selected action:{' '}
        <strong>{selected ?? 'none'}</strong>
      </p>
      <Spotlight
        shortcut
        show={show}
        onShowChange={setShow}
        label='Search documentation'
        placeholder='Search documentation…'
        actions={actions}
      />
    </>
  );
}
