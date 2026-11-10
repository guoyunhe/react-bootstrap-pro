import { Box, Progress } from 'react-bootstrap-pro';

const examples = [
  { label: 'Success example', theme: 'success', value: 25 },
  { label: 'Info example', theme: 'info', value: 50 },
  { label: 'Warning example', theme: 'warning', value: 75 },
  { label: 'Danger example', theme: 'danger', value: 100 },
] as const;

export function ProgressBackgroundsLabelsDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      {examples.map(({ label, theme, value }) => (
        <Progress key={label} label={label} theme={theme} value={value}>
          {value}%
        </Progress>
      ))}
    </Box>
  );
}
