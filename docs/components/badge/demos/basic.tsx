import { Badge } from 'react-bootstrap-pro';

export function BadgeBasicDemo() {
  return (
    <>
      <Badge theme='primary'>New</Badge>{' '}
      <Badge theme='success' variant='subtle'>
        Ready
      </Badge>{' '}
      <Badge theme='danger' variant='outline'>
        4
      </Badge>
    </>
  );
}
