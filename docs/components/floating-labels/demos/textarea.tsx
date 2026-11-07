import type { CSSProperties } from 'react';
import { Box, FormFloating, Textarea } from 'react-bootstrap-pro';

const tallTextarea = { '--bs-form-floating-height': '100px' } as CSSProperties;

export function FloatingLabelsTextareaDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormFloating>
        <label htmlFor='floating-textarea'>Comments</label>
        <Textarea id='floating-textarea' placeholder='Leave a comment here' />
      </FormFloating>
      <FormFloating style={tallTextarea}>
        <label htmlFor='floating-textarea-tall'>Tall comments</label>
        <Textarea id='floating-textarea-tall' placeholder='Leave a comment here' />
      </FormFloating>
    </Box>
  );
}
