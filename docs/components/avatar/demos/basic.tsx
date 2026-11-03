import { Avatar, AvatarStatus, AvatarImage } from 'react-bootstrap-pro';

export function AvatarBasicDemo() {
  return (
    <>
      <Avatar size='lg' theme='primary'>
        AB
        <AvatarStatus status='online' />
      </Avatar>
      <Avatar size='lg'>
        <AvatarImage src='https://example.com/avatar.png' alt='Alex Brown' />
      </Avatar>
    </>
  );
}
