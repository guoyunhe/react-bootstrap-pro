import { Box, Input } from 'react-bootstrap-pro';

export function InputDateTimeDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Input type='datetime-local' aria-label='Date and time' defaultValue='2026-02-24T13:00' />
      <Input
        type='datetime-local'
        aria-label='Date and time with seconds'
        defaultValue='2026-02-24T13:00:30'
        step={1}
      />
      <Input
        type='datetime-local'
        aria-label='Date and time with milliseconds'
        defaultValue='2026-02-24T13:00:30.500'
        step={0.001}
      />
      <Input type='date' aria-label='Date' defaultValue='2026-02-24' />
      <Input type='time' aria-label='Time' defaultValue='13:00' />
      <Input type='month' aria-label='Month' defaultValue='2026-02' />
      <Input type='week' aria-label='Week' defaultValue='2026-W09' />
    </Box>
  );
}
