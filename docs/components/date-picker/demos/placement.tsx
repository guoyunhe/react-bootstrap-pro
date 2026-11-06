import { Box, DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerPlacementDemo() {
  return (
    <Box d='flex' gap={3}>
      <Box>
        <FormLabel htmlFor='datepicker-left'>Left aligned</FormLabel>
        <DatePicker id='datepicker-left' placement='left' placeholder='Left' />
      </Box>
      <Box>
        <FormLabel htmlFor='datepicker-center'>Center aligned</FormLabel>
        <DatePicker id='datepicker-center' placement='center' placeholder='Center' />
      </Box>
      <Box>
        <FormLabel htmlFor='datepicker-right'>Right aligned</FormLabel>
        <DatePicker id='datepicker-right' placement='right' placeholder='Right' />
      </Box>
    </Box>
  );
}
