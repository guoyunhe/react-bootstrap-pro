import { useState } from 'react';
import { BiBook, BiGear, BiHouse } from 'react-bootstrap-icons-pro';
import { Button, Spotlight, type SpotlightAction } from 'react-bootstrap-pro';

export function SpotlightEmptyDemo() {
  const [show, setShow] = useState(false);

  const actions: SpotlightAction[] = [
    { label: 'Home', description: 'Project overview', icon: <BiHouse size={16} /> },
    { label: 'Documentation', description: 'Guides and reference', icon: <BiBook size={16} /> },
    { label: 'Settings', description: 'Workspace preferences', icon: <BiGear size={16} /> },
  ];

  return (
    <>
      <Button
        variant='outline'
        theme='secondary'
        aria-haspopup='dialog'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Search with no matches
      </Button>
      <Spotlight
        show={show}
        onShowChange={setShow}
        actions={actions}
        emptyMessage={
          <span>
            Nothing matches your query. Try <strong>home</strong> or <strong>settings</strong>.
          </span>
        }
      />
    </>
  );
}
