import { Avatar, AvatarImage, AvatarStatus, Box } from 'react-bootstrap-pro';

const avatarSizes = ['xs', 'sm', undefined, 'lg', 'xl'] as const;
const avatarImage = 'https://avatars.githubusercontent.com/u/5836790';

export function AvatarStatusSizesDemo() {
  return (
    <Box d='flex' alignItems='center' gap={2}>
      {avatarSizes.map((size) => (
        <Avatar key={size ?? 'default'} size={size}>
          <AvatarImage src={avatarImage} alt='mdo' />
          <AvatarStatus status='online' aria-label='Online' aria-hidden={false} />
        </Avatar>
      ))}
    </Box>
  );
}
