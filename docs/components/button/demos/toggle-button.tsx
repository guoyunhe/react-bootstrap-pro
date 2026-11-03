import { useState } from 'react';
import { Button } from 'react-bootstrap-pro';

export function ButtonToggleDemo() {
  const [pressed, setPressed] = useState(false);

  return (
    <Button
      variant='solid'
      theme='primary'
      active={pressed}
      aria-pressed={pressed}
      onClick={() => setPressed((value) => !value)}
    >
      {pressed ? 'Pressed' : 'Toggle me'}
    </Button>
  );
}
