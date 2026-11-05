import { Badge } from 'react-bootstrap-pro';

export function BadgeBasicDemo() {
  return (
    <>
      <Badge theme='primary'>New</Badge>{' '}
      <Badge theme='primary' variant='subtle'>
        New
      </Badge>{' '}
      <Badge theme='primary' variant='outline'>
        New
      </Badge>
    </>
  );
}
