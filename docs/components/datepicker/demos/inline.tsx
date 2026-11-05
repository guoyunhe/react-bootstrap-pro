import { Box, Datepicker } from 'react-bootstrap-pro';

export function DatepickerInlineDemo() {
  return (
    <Box d='flex' flexWrap='wrap' gap={4}>
      <Datepicker inline aria-label='Inline datepicker' />
      <Datepicker inline selectionMode='multiple-ranged' aria-label='Inline date range' />
      <Datepicker inline displayMonthsCount={2} aria-label='Inline two month calendar' />
    </Box>
  );
}
