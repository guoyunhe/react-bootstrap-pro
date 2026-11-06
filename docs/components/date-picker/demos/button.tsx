import { BiCalendarWeek } from 'react-bootstrap-icons-pro';
import { DatePicker } from 'react-bootstrap-pro';

export function DatePickerButtonDemo() {
  return (
    <DatePicker
      trigger='button'
      icon={<BiCalendarWeek />}
      aria-label='Select date'
      placeholder='Select date'
    />
  );
}
