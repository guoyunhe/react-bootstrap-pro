import { BiCalendarWeek } from 'react-bootstrap-icons-pro';
import { Datepicker } from 'react-bootstrap-pro';

export function DatepickerButtonDemo() {
  return (
    <Datepicker
      trigger='button'
      icon={<BiCalendarWeek />}
      aria-label='Select date'
      placeholder='Select date'
    />
  );
}
