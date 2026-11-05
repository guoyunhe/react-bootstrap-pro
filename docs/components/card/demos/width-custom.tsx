import { Button, Card, CardBody, CardText, CardTitle } from 'react-bootstrap-pro';

export function CardWidthCustomDemo() {
  return (
    <Card style={{ width: 288 }}>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button variant='solid' theme='primary' component='a' href='#card-action'>
          Go somewhere
        </Button>
      </CardBody>
    </Card>
  );
}
