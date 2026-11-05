import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from 'react-bootstrap-pro';

export function CardHeaderFooterCenterDemo() {
  return (
    <Card className='text-center'>
      <CardHeader>Featured</CardHeader>
      <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button variant='solid' theme='primary' component='a' href='#card-action' mx='auto'>
          Go somewhere
        </Button>
      </CardBody>
      <CardFooter className='fg-2'>2 days ago</CardFooter>
    </Card>
  );
}
