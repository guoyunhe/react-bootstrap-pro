import { Avatar, AvatarImage, Box } from 'react-bootstrap-pro';

const avatarImage = 'https://avatars.githubusercontent.com/u/5836790';

export function AvatarImagesDemo() {
  return (
    <Box display='flex' alignItems='center' gap={3}>
      <Avatar size='lg' theme='primary'>
        <AvatarImage src={avatarImage} alt='mdo' />
      </Avatar>
      <AvatarImage src={avatarImage} alt='mdo' width={50} height={50} />
    </Box>
  );
}
