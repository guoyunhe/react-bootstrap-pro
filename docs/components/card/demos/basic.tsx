import { Button, Card, CardBody, CardImage, CardText, CardTitle } from 'react-bootstrap-pro';

export function CardBasicDemo() {
  return (
    <Card component='section' style={{ maxWidth: 320 }}>
      <CardImage
        placement='top'
        src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&h=360&q=80'
        alt='Mountain landscape'
      />
      <CardBody>
        <CardTitle component='h4'>Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s
          content.
        </CardText>
        <Button variant='solid' theme='primary' component='a' href='#card-action'>
          Go somewhere
        </Button>
      </CardBody>
    </Card>
  );
}
