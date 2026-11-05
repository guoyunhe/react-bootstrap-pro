import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'react-bootstrap-pro';

export function CardTitleTextLinksDemo() {
  return (
    <Card style={{ maxWidth: 320 }}>
      <CardBody>
        <CardTitle>Example card title</CardTitle>
        <CardSubtitle className='fg-3'>With a card subtitle</CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s
          content.
        </CardText>
        <a href='#card-link'>Card link</a>
      </CardBody>
    </Card>
  );
}
