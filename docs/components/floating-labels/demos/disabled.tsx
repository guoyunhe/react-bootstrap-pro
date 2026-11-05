import type { CSSProperties } from 'react';
import { Box, FormControl, FormFloating } from 'react-bootstrap-pro';

const tallTextarea = { '--bs-form-floating-height': '100px' } as CSSProperties;

export function FloatingLabelsDisabledDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormFloating>
        <label htmlFor='floating-disabled-email'>Email address</label>
        <FormControl
          type='email'
          id='floating-disabled-email'
          placeholder='name@example.com'
          disabled
        />
      </FormFloating>
      <FormFloating>
        <label htmlFor='floating-disabled-textarea'>Comments</label>
        <FormControl
          component='textarea'
          id='floating-disabled-textarea'
          placeholder='Leave a comment here'
          disabled
        />
      </FormFloating>
      <FormFloating style={tallTextarea}>
        <label htmlFor='floating-disabled-textarea-value'>Comments</label>
        <FormControl
          component='textarea'
          id='floating-disabled-textarea-value'
          placeholder='Leave a comment here'
          defaultValue='Disabled textarea with some text inside'
          disabled
        />
      </FormFloating>
      <FormFloating>
        <label htmlFor='floating-disabled-select'>Works with selects</label>
        <FormControl
          component='select'
          id='floating-disabled-select'
          defaultValue=''
          aria-label='Floating label disabled select example'
          disabled
        >
          <option value=''>Open this select menu</option>
        </FormControl>
      </FormFloating>
    </Box>
  );
}
