import { Card, CardBody, CardImage, CardText } from 'react-bootstrap-pro';

const imageUrl =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&h=360&q=80';

export function CardImageCapsContentDemo() {
  return (
    <div className='d-flex flex-wrap gap-3'>
      <Card style={{ width: 288 }}>
        <CardImage src={imageUrl} placement='top' alt='Mountain landscape' />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the
            card&apos;s content.
          </CardText>
        </CardBody>
      </Card>
      <Card style={{ width: 288 }}>
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the
            card&apos;s content.
          </CardText>
        </CardBody>
        <CardImage src={imageUrl} placement='bottom' alt='Mountain landscape' />
      </Card>
    </div>
  );
}
