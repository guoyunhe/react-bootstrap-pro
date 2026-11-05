import { Card, CardBody, CardImage, CardTitle, CardText } from 'react-bootstrap-pro';

export function CardRowEndDemo() {
  return (
    <Card className='card-row' style={{ maxWidth: 540 }}>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CardText>
        <CardText>
          <small className='fg-2'>Last updated 3 mins ago</small>
        </CardText>
      </CardBody>
      <CardImage
        component='img'
        className='card-img-end'
        src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&h=360&q=80'
        alt='Mountain landscape'
      />
    </Card>
  );
}
