import { Avatar, AvatarImage, AvatarStack, Box } from 'react-bootstrap-pro';

const avatarSizes = ['xs', 'sm', undefined, 'lg', 'xl'] as const;
const avatarImage = 'https://avatars.githubusercontent.com/u/5836790';

export function AvatarStackSizesDemo() {
  return (
    <Box d='grid' gap={3}>
      {avatarSizes.map((size) => (
        <AvatarStack key={size ?? 'default'} className={size ? `avatar-stack-${size}` : undefined}>
          {Array.from({ length: 3 }, (_, index) => (
            <Avatar key={index}>
              <AvatarImage src={avatarImage} alt='mdo' />
            </Avatar>
          ))}
        </AvatarStack>
      ))}
    </Box>
  );
}
