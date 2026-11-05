import { Box, FormControl, FormFloating } from 'react-bootstrap-pro';

export function FloatingLabelsDateTimeDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormFloating>
        <label htmlFor='floating-date'>Date</label>
        <FormControl type='date' id='floating-date' />
      </FormFloating>
      <FormFloating>
        <label htmlFor='floating-time'>Time</label>
        <FormControl type='time' id='floating-time' />
      </FormFloating>
    </Box>
  );
}
