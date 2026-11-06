import { BiCalendarWeek } from 'react-bootstrap-icons-pro';
import { Datepicker } from 'react-bootstrap-pro';

export function DatepickerButtonRangeDemo() {
  return (
    <Datepicker
      trigger='button'
      icon={<BiCalendarWeek />}
      selectionMode='multiple-ranged'
      aria-label='Select date range'
      placeholder='Last 7 days'
    />
  );
}
