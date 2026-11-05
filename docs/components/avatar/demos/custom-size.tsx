import type { CSSProperties } from 'react';
import { Avatar, AvatarImage } from 'react-bootstrap-pro';

const avatarImage = 'https://avatars.githubusercontent.com/u/5836790';
const customAvatarSize = { '--bs-avatar-size': '8rem' } as CSSProperties;

export function AvatarCustomSizeDemo() {
  return (
    <Avatar style={customAvatarSize}>
      <AvatarImage src={avatarImage} alt='mdo' />
    </Avatar>
  );
}
