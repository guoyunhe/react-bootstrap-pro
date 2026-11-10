import { Box, Progress } from 'react-bootstrap-pro';

const examples = [
  { bg: 'success', label: 'Success example', value: 25 },
  { bg: 'info', label: 'Info example', value: 50 },
  { bg: 'warning', label: 'Warning example', value: 75 },
  { bg: 'danger', label: 'Danger example', value: 100 },
] as const;

export function ProgressBackgroundsDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      {examples.map(({ bg, label, value }) => (
        <Progress key={label} label={label} value={value} barProps={{ bg }} />
      ))}
    </Box>
  );
}
