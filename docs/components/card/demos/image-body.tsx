import { Card, CardBody, CardImage, CardTitle } from 'react-bootstrap-pro';

export function CardImageBodyDemo() {
  return (
    <Card style={{ width: 288 }}>
      <CardBody>
        <CardImage
          component='img'
          src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&h=360&q=80'
          alt='Mountain landscape'
        />
        <CardTitle component='h5' mt={2} mb={0}>
          Image within the body
        </CardTitle>
        <p className='card-text fg-2'>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s
          content.
        </p>
        <small className='fg-3'>Last updated 3 mins ago</small>
      </CardBody>
    </Card>
  );
}
