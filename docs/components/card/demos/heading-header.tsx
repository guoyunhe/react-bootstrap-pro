import { Button, Card, CardBody, CardText, CardTitle } from 'react-bootstrap-pro';

export function CardHeadingHeaderDemo() {
  return (
    <Card>
      <CardTitle component='h5' className='card-header'>
        Featured
      </CardTitle>
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
