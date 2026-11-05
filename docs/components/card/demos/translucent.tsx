import { Button, Card, CardBody, CardText, CardTitle } from 'react-bootstrap-pro';

export function CardTranslucentDemo() {
  return (
    <Card variant='translucent' style={{ width: 288 }}>
      <CardBody>
        <CardTitle>Translucent card</CardTitle>
        <CardText>This card has a translucent background with a backdrop blur effect.</CardText>
        <Button variant='solid' theme='primary' component='a' href='#card-action'>
          Go somewhere
        </Button>
      </CardBody>
    </Card>
  );
}
