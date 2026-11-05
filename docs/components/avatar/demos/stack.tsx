import { Avatar, AvatarImage, AvatarStack } from 'react-bootstrap-pro';

const avatarImage = 'https://avatars.githubusercontent.com/u/5836790';

export function AvatarStackDemo() {
  return (
    <AvatarStack>
      {Array.from({ length: 5 }, (_, index) => (
        <Avatar key={index}>
          <AvatarImage src={avatarImage} alt='mdo' />
        </Avatar>
      ))}
    </AvatarStack>
  );
}
