import { Box, Datepicker } from 'react-bootstrap-pro';

export function DatepickerInlineMonthsDemo() {
  return (
    <Box component='section' aria-label='Inline two-month calendar'>
      <Datepicker inline displayMonthsCount={2} />
    </Box>
  );
}
