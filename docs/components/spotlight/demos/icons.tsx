import { useState } from 'react';
import { BiBook, BiGear, BiGraphUp, BiHouse, BiPalette, BiPerson } from 'react-bootstrap-icons-pro';
import { Button, Spotlight, type SpotlightAction } from 'react-bootstrap-pro';

export function SpotlightIconsDemo() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<string>();

  const actions: SpotlightAction[] = [
    { label: 'Dashboard', description: 'Workspace overview', icon: <BiHouse size={16} /> },
    { label: 'Analytics', description: 'Traffic and usage reports', icon: <BiGraphUp size={16} /> },
    { label: 'Team', description: 'People with access', icon: <BiPerson size={16} /> },
    { label: 'Documentation', description: 'Guides and reference', icon: <BiBook size={16} /> },
    { label: 'Appearance', description: 'Theme and color mode', icon: <BiPalette size={16} /> },
    { label: 'Settings', description: 'Workspace preferences', icon: <BiGear size={16} /> },
  ].map((action) => ({ ...action, onClick: () => setSelected(action.label) }));

  return (
    <>
      <Button
        variant='outline'
        theme='secondary'
        aria-haspopup='dialog'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Search actions
      </Button>
      <p className='mt-3 mb-0'>
        Selected action: <strong>{selected ?? 'none'}</strong>
      </p>
      <Spotlight actions={actions} show={show} onShowChange={setShow} />
    </>
  );
}
