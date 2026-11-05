import { Card, CardImage, CardImageOverlay, CardTitle, CardText } from 'react-bootstrap-pro';

export function CardImageOverlayDemo() {
  return (
    <Card theme='inverse' style={{ maxWidth: 540 }}>
      <CardImage
        component='img'
        src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=960&h=540&q=80'
        alt=''
      />
      <CardImageOverlay>
        <CardTitle>Card title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CardText>
        <CardText>
          <small>Last updated 3 mins ago</small>
        </CardText>
      </CardImageOverlay>
    </Card>
  );
}
