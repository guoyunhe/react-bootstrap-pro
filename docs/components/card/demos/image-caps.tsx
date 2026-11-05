import { Card, CardBody, CardImage, CardTitle, CardText } from 'react-bootstrap-pro';

const imageUrl =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=960&h=540&q=80';
const supportingText =
  'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';

export function CardImageCapsDemo() {
  return (
    <div className='d-flex flex-column gap-3'>
      <Card>
        <CardImage src={imageUrl} placement='top' alt='Mountain landscape' />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>{supportingText}</CardText>
          <CardText>
            <small className='fg-2'>Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>{supportingText}</CardText>
          <CardText>
            <small className='fg-2'>Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
        <CardImage src={imageUrl} placement='bottom' alt='Mountain landscape' />
      </Card>
    </div>
  );
}
