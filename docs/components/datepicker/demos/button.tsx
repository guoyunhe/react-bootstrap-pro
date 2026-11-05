import { BiCalendarWeek } from 'react-bootstrap-icons-pro';
import { Box, Datepicker } from 'react-bootstrap-pro';

export function DatepickerButtonDemo() {
  return (
    <Box d='flex' gap={3}>
      <Datepicker
        trigger='button'
        icon={<BiCalendarWeek />}
        aria-label='Select date'
        placeholder='Select date'
      />
      <Datepicker
        trigger='button'
        icon={<BiCalendarWeek />}
        selectionMode='multiple-ranged'
        aria-label='Select date range'
        placeholder='Last 7 days'
      />
    </Box>
  );
}
