import { Avatar, Box } from 'react-bootstrap-pro';

const avatarThemes = [
  { label: 'Default', theme: undefined },
  { label: 'Primary', theme: 'primary' },
  { label: 'Accent', theme: 'accent' },
  { label: 'Success', theme: 'success' },
  { label: 'Danger', theme: 'danger' },
  { label: 'Warning', theme: 'warning' },
  { label: 'Info', theme: 'info' },
  { label: 'Inverse', theme: 'inverse' },
  { label: 'Secondary', theme: 'secondary' },
] as const;

export function AvatarSubtleInitialsDemo() {
  return (
    <Box display='flex' alignItems='center' gap={2} flexWrap='wrap'>
      {avatarThemes.map(({ label, theme }) => (
        <Avatar key={label} subtle={label !== 'Default'} theme={theme}>
          {label === 'Default' ? 'AB' : label.slice(0, 2).toUpperCase()}
        </Avatar>
      ))}
    </Box>
  );
}
