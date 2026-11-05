import { Card, CardBody, CardHeader } from 'react-bootstrap-pro';

export function CardBlockquoteDemo() {
  return (
    <Card>
      <CardHeader>Quote</CardHeader>
      <CardBody>
        <figure>
          <blockquote className='blockquote'>
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption className='blockquote-footer'>
            Someone famous in <cite title='Source Title'>Source Title</cite>
          </figcaption>
        </figure>
      </CardBody>
    </Card>
  );
}
