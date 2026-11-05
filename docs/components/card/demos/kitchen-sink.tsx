import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap-pro';

export function CardKitchenSinkDemo() {
  return (
    <Card style={{ width: 288 }}>
      <CardImage
        placement='top'
        src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&h=360&q=80'
        alt='Mountain landscape'
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s
          content.
        </p>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
      <CardBody className='flex-row gap-4'>
        <a href='#card-link'>Card link</a>
        <a href='#another-card-link'>Another link</a>
      </CardBody>
    </Card>
  );
}
