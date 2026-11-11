import type { CSSProperties } from 'react';
import { FormFloating, Textarea } from 'react-bootstrap-pro';

const tallTextarea = { '--bs-form-floating-height': '100px' } as CSSProperties;

export function TextareaFloatingHeightDemo() {
  return (
    <FormFloating style={tallTextarea}>
      <label htmlFor='textarea-floating-height'>Taller comments</label>
      <Textarea id='textarea-floating-height' placeholder='Leave a comment here' />
    </FormFloating>
  );
}
