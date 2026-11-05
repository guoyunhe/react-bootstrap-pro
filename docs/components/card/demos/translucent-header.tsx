import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from 'react-bootstrap-pro';

export function CardTranslucentHeaderDemo() {
  return (
    <Card variant='translucent' style={{ width: 288 }}>
      <CardHeader>Featured</CardHeader>
      <CardBody>
        <CardTitle>Card with header</CardTitle>
        <CardText>
          Headers and footers are also made translucent to maintain a consistent look.
        </CardText>
        <Button variant='solid' theme='primary' component='a' href='#card-action'>
          Go somewhere
        </Button>
      </CardBody>
      <CardFooter className='fg-2'>2 days ago</CardFooter>
    </Card>
  );
}
