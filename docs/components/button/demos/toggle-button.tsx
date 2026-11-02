import { useState } from 'react';

import { Button } from '../../../../src';

export function ButtonToggleDemo() {
  const [pressed, setPressed] = useState(false);

  return (
    <Button
      variant='solid'
      theme='primary'
      aria-pressed={pressed}
      className={pressed ? 'active' : undefined}
      onClick={() => setPressed((value) => !value)}
    >
      {pressed ? 'Pressed' : 'Toggle me'}
    </Button>
  );
}
