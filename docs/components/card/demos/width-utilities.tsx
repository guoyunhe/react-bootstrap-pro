import { Button, Card, CardBody, CardText, CardTitle } from 'react-bootstrap-pro';

export function CardWidthUtilitiesDemo() {
  return (
    <div>
      <Card w={75} mb={3}>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button variant='solid' theme='primary' component='a' href='#card-action'>
            Button
          </Button>
        </CardBody>
      </Card>
      <Card w={50}>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button variant='solid' theme='primary' component='a' href='#card-action'>
            Button
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
