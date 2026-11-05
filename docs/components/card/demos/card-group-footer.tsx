import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardImage,
  CardText,
  CardTitle,
} from 'react-bootstrap-pro';

const cards = [
  'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  'This card has supporting text below as a natural lead-in to additional content.',
  'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show equal height action.',
];

export function CardGroupFooterDemo() {
  return (
    <Box className='contains-inline'>
      <Box className='card-group'>
        {cards.map((text) => (
          <Card key={text}>
            <CardImage
              placement='top'
              src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&h=360&q=80'
              alt='Mountain landscape'
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>{text}</CardText>
            </CardBody>
            <CardFooter>
              <small className='fg-2'>Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
