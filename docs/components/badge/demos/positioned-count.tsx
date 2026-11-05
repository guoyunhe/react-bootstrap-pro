import { Badge, Button } from 'react-bootstrap-pro';

export function BadgePositionedCountDemo() {
  return (
    <Button variant='solid' theme='primary' className='position-relative'>
      Inbox
      <Badge
        theme='danger'
        className='position-absolute top-0 start-100 translate-middle rounded-pill border border-bg'
      >
        99+
        <span className='visually-hidden'>unread messages</span>
      </Badge>
    </Button>
  );
}
