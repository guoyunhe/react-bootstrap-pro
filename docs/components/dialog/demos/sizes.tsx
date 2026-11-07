import { useState } from 'react';
import { CloseButton, Dialog, DialogBody, DialogHeader, DialogTitle } from 'react-bootstrap-pro';

const sizes: {
  id: string;
  label: string;
  size: 'sm' | 'lg' | 'xl' | undefined;
}[] = [
  { id: 'small', label: 'Small', size: 'sm' },
  { id: 'default', label: 'Default', size: undefined },
  { id: 'large', label: 'Large', size: 'lg' },
  { id: 'extra-large', label: 'Extra large', size: 'xl' },
];

export function DialogSizesDemo() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className='d-flex flex-wrap gap-2'>
      {sizes.map(({ id, label, size }) => (
        <div key={id}>
          <button
            type='button'
            className='btn-solid theme-primary'
            aria-controls={`dialog-size-${id}`}
            aria-expanded={selected === id}
            onClick={() => setSelected(id)}
          >
            {label}
          </button>
          <Dialog
            id={`dialog-size-${id}`}
            show={selected === id}
            onShowChange={(show) => {
              if (!show) setSelected(null);
            }}
            size={size}
            aria-labelledby={`dialog-size-${id}-title`}
          >
            <DialogHeader>
              <DialogTitle id={`dialog-size-${id}-title`}>{label} dialog</DialogTitle>
              <CloseButton onClick={() => setSelected(null)} aria-label='Close' />
            </DialogHeader>
            <DialogBody>
              <p>This dialog uses the {label.toLowerCase()} width.</p>
            </DialogBody>
          </Dialog>
        </div>
      ))}
    </div>
  );
}
