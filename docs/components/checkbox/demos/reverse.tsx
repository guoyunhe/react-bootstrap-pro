import { Box, Checkbox } from 'react-bootstrap-pro';

export function CheckboxReverseDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      <Box d='flex' flexDirection='row-reverse' alignItems='center' justifyContent='start' gap={2}>
        <Checkbox id='checkbox-reverse' />
        <label htmlFor='checkbox-reverse'>Reverse checkbox</label>
      </Box>
      <Box d='flex' flexDirection='row-reverse' alignItems='center' justifyContent='start' gap={2}>
        <Checkbox id='checkbox-reverse-disabled' disabled />
        <label htmlFor='checkbox-reverse-disabled'>Disabled reverse checkbox</label>
      </Box>
    </Box>
  );
}
