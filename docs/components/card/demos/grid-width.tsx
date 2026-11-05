import { Button, Card, CardBody, CardText, CardTitle, Col, Row } from 'react-bootstrap-pro';

function GridCard() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button variant='solid' theme='primary' component='a' href='#card-action'>
          Go somewhere
        </Button>
      </CardBody>
    </Card>
  );
}

export function CardGridWidthDemo() {
  return (
    <Row gutter={3}>
      <Col span={{ sm: 6 }} mb={{ xs: 3, sm: 0 }}>
        <GridCard />
      </Col>
      <Col span={{ sm: 6 }}>
        <GridCard />
      </Col>
    </Row>
  );
}
