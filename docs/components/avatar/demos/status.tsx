import { Avatar, AvatarImage, AvatarStatus, Box } from 'react-bootstrap-pro';

const avatarStatuses = ['online', 'offline', 'busy', 'away'] as const;
const avatarImage = 'https://avatars.githubusercontent.com/u/5836790';

export function AvatarStatusesDemo() {
  return (
    <Box display='flex' alignItems='center' gap={3}>
      {avatarStatuses.map((status) => (
        <Avatar key={status}>
          <AvatarImage src={avatarImage} alt='mdo' />
          <AvatarStatus status={status} aria-label={status} aria-hidden={false} />
        </Avatar>
      ))}
    </Box>
  );
}
