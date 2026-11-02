import type { CSSProperties } from 'react';

import { Button } from '../../../../src';

const compactButtonStyle: CSSProperties & Record<`--${string}`, string> = {
  '--bs-btn-padding-y': '.25rem',
  '--bs-btn-padding-x': '.5rem',
  '--bs-btn-font-size': '.75rem',
};

export function ButtonCSSVariablesDemo() {
  return (
    <Button variant='solid' theme='primary' style={compactButtonStyle}>
      Custom-sized button
    </Button>
  );
}
