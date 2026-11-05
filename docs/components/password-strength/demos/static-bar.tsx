import { Box, PasswordStrength, type PasswordStrengthLevel } from 'react-bootstrap-pro';

const levels: { label: string; level: PasswordStrengthLevel }[] = [
  { label: 'Weak', level: 'weak' },
  { label: 'Fair', level: 'fair' },
  { label: 'Good', level: 'good' },
  { label: 'Strong', level: 'strong' },
];

export function PasswordStrengthStaticBarDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      {levels.map(({ label, level }) => (
        <Box key={level}>
          <Box>{label}</Box>
          <PasswordStrength strength={level} variant='bar' />
        </Box>
      ))}
    </Box>
  );
}
