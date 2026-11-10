import { Box, Progress } from 'react-bootstrap-pro';

const examples = [
  { theme: undefined, label: 'Default striped example', value: 10 },
  { theme: 'success', label: 'Success striped example', value: 25 },
  { theme: 'info', label: 'Info striped example', value: 50 },
  { theme: 'warning', label: 'Warning striped example', value: 75 },
  { theme: 'danger', label: 'Danger striped example', value: 100 },
] as const;

export function ProgressStripedDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      {examples.map(({ theme, label, value }) => (
        <Progress key={label} label={label} value={value} striped theme={theme} />
      ))}
    </Box>
  );
}
