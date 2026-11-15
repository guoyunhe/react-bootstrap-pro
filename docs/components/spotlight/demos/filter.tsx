import { useState } from 'react';
import { Button, Spotlight, type SpotlightAction } from 'react-bootstrap-pro';

export function SpotlightFilterDemo() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<string>();

  const actions: SpotlightAction[] = [
    'Accordion',
    'Alert',
    'Badge',
    'Breadcrumb',
    'Button',
    'Carousel',
    'Dialog',
    'Drawer',
  ].map((label) => ({ label, onClick: () => setSelected(label) }));

  return (
    <>
      <Button
        variant='outline'
        theme='secondary'
        aria-haspopup='dialog'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Search components
      </Button>
      <p className='mt-3 mb-0'>
        Selected action: <strong>{selected ?? 'none'}</strong>
      </p>
      <Spotlight
        show={show}
        onShowChange={setShow}
        placeholder='Components starting with…'
        actions={actions}
        filter={(action, query) => action.label.toLowerCase().startsWith(query)}
      />
    </>
  );
}
