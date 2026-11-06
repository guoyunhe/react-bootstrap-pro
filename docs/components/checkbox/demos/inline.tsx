import { Box, Checkbox } from 'react-bootstrap-pro';

export function CheckboxInlineDemo() {
  return (
    <Box d='flex' flexWrap='wrap' gap={3}>
      <Box component='label' d='inline-flex' alignItems='center' gap={2}>
        <Checkbox id='checkbox-inline-1' />1
      </Box>
      <Box component='label' d='inline-flex' alignItems='center' gap={2}>
        <Checkbox id='checkbox-inline-2' />2
      </Box>
      <Box component='label' d='inline-flex' alignItems='center' gap={2}>
        <Checkbox id='checkbox-inline-3' disabled />3 (disabled)
      </Box>
    </Box>
  );
}
