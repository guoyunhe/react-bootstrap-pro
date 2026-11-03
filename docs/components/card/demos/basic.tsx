import { Card, CardHeader, CardBody, CardTitle, Button } from 'react-bootstrap-pro';

export function CardBasicDemo() {
  return (
    <Card style={{ maxWidth: 320 }}>
      <CardHeader>Featured</CardHeader>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <p>Card content goes here.</p>
        <Button variant='solid' theme='primary'>
          Continue
        </Button>
      </CardBody>
    </Card>
  );
}
