import { Box, ChipInput } from 'react-bootstrap-pro';

export function ChipInputThemesDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <ChipInput
        theme='primary'
        defaultValue={['Approved', 'Verified']}
        placeholder='Add status…'
        aria-label='Statuses'
      />
      <ChipInput
        theme='danger'
        defaultValue={['Bug', 'Critical']}
        placeholder='Add issue…'
        aria-label='Issues'
      />
      <ChipInput
        theme='primary'
        defaultValue={['Bug', 'Critical']}
        chipProps={(value) => ({ theme: value === 'Bug' ? 'warning' : 'danger' })}
        placeholder='Add issue…'
        aria-label='Issue severities'
      />
    </Box>
  );
}
