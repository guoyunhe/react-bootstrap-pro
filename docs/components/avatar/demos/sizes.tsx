import { Avatar, AvatarImage, Box } from 'react-bootstrap-pro';

const avatarSizes = ['xs', 'sm', undefined, 'lg', 'xl'] as const;
const avatarImage = 'https://avatars.githubusercontent.com/u/5836790';

export function AvatarSizesDemo() {
  return (
    <Box display='flex' alignItems='center' gap={2}>
      {avatarSizes.map((size) => (
        <Avatar key={size ?? 'default'} size={size}>
          <AvatarImage src={avatarImage} alt='mdo' />
        </Avatar>
      ))}
    </Box>
  );
}
