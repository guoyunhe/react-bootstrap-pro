import { Box, DatePicker } from 'react-bootstrap-pro';

export function DatePickerInlineRangeDemo() {
  return (
    <Box component='section' aria-label='Inline date range'>
      <DatePicker inline selectionMode='multiple-ranged' />
    </Box>
  );
}
