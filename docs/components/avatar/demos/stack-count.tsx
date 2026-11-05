import { Avatar, AvatarImage, AvatarStack, Box } from 'react-bootstrap-pro';

const avatarImage = 'https://avatars.githubusercontent.com/u/5836790';

export function AvatarStackCountDemo() {
  return (
    <Box display='grid' gap={3}>
      {[undefined, 'avatar-stack-xl'].map((className) => (
        <AvatarStack key={className ?? 'default'} className={className}>
          {Array.from({ length: 3 }, (_, index) => (
            <Avatar key={index}>
              <AvatarImage src={avatarImage} alt='mdo' />
            </Avatar>
          ))}
          <Avatar theme='secondary'>+5</Avatar>
        </AvatarStack>
      ))}
    </Box>
  );
}
