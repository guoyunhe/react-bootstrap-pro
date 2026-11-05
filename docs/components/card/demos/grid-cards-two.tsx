import { Card, CardBody, CardImage, CardText, CardTitle, Col, Row } from 'react-bootstrap-pro';

const texts = [
  'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  'This is a longer card with supporting text below as a natural lead-in to additional content.',
  'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
];

export function CardGridCardsTwoDemo() {
  return (
    <Row cols={{ xs: 1, md: 2 }} gutter={3}>
      {texts.map((text, index) => (
        <Col key={index}>
          <Card>
            <CardImage
              placement='top'
              src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&h=360&q=80'
              alt='Mountain landscape'
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>{text}</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
