import { useState } from 'react';
import { Button, Spotlight, type SpotlightAction } from 'react-bootstrap-pro';

export function SpotlightBasicDemo() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<string>();

  const actions: SpotlightAction[] = [
    { id: 'home', label: 'Home', description: 'Project overview and recent activity' },
    { id: 'projects', label: 'Projects', description: 'Browse and manage your projects' },
    { id: 'team', label: 'Team members', description: 'Invite people and manage their roles' },
    { id: 'billing', label: 'Billing', description: 'Invoices, payment methods and plans' },
    { id: 'settings', label: 'Settings', description: 'Workspace preferences' },
  ].map((action) => ({ ...action, onClick: () => setSelected(action.label) }));

  return (
    <>
      <Button
        theme='primary'
        aria-haspopup='dialog'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Open spotlight
      </Button>
      <p className='mt-3 mb-0'>
        Selected action: <strong>{selected ?? 'none'}</strong>
      </p>
      <Spotlight actions={actions} show={show} onShowChange={setShow} />
    </>
  );
}
