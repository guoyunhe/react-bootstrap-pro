import { BiCalendarWeek } from 'react-bootstrap-icons-pro';
import { DatePicker } from 'react-bootstrap-pro';

export function DatePickerButtonRangeDemo() {
  return (
    <DatePicker
      trigger='button'
      icon={<BiCalendarWeek />}
      selectionMode='multiple-ranged'
      aria-label='Select date range'
      placeholder='Last 7 days'
    />
  );
}
