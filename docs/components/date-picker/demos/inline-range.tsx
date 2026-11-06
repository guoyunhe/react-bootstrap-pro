import { Box, Datepicker } from 'react-bootstrap-pro';

export function DatepickerInlineRangeDemo() {
  return (
    <Box component='section' aria-label='Inline date range'>
      <Datepicker inline selectionMode='multiple-ranged' />
    </Box>
  );
}
