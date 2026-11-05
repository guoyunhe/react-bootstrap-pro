import { Badge, Button } from 'react-bootstrap-pro';

export function BadgeButtonsDemo() {
  return (
    <Button variant='solid' theme='primary'>
      Notifications <Badge theme='danger'>4</Badge>
    </Button>
  );
}
