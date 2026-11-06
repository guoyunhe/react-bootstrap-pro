import { Box, DatePicker } from 'react-bootstrap-pro';

export function DatePickerInlineMonthsDemo() {
  return (
    <Box component='section' aria-label='Inline two-month calendar'>
      <DatePicker inline displayMonthsCount={2} />
    </Box>
  );
}
