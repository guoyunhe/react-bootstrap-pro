import { Box, ChipInput } from 'react-bootstrap-pro';

export function ChipInputThemesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <ChipInput
        theme='primary'
        defaultValue={['Approved', 'Verified']}
        placeholder='Add status…'
        aria-label='Statuses'
        dismissible={false}
      />
      <ChipInput
        theme='danger'
        defaultValue={['Bug', 'Critical']}
        placeholder='Add issue'
        aria-label='Issues'
        dismissible={false}
      />
    </Box>
  );
}
