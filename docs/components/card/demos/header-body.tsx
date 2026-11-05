import { Button, Card, CardBody, CardHeader, CardText, CardTitle } from 'react-bootstrap-pro';

export function CardHeaderBodyDemo() {
  return (
    <Card>
      <CardHeader>Featured</CardHeader>
      <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button variant='solid' theme='primary' component='a' href='#card-action'>
          Go somewhere
        </Button>
      </CardBody>
    </Card>
  );
}
