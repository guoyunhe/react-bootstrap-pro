import {
  Box,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Placeholder,
  PlaceholderGroup,
} from 'react-bootstrap-pro';

export function PlaceholderBasicDemo() {
  return (
    <Box d='grid' gap={3} style={{ maxWidth: 288 }}>
      <Card component='article'>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and fill the card content area.
          </CardText>
          <Button variant='solid' theme='primary' component='a' href='#placeholder-example'>
            Go somewhere
          </Button>
        </CardBody>
      </Card>
      <Card component='article' aria-hidden='true'>
        <CardBody>
          <PlaceholderGroup component='div' animation='wave'>
            <CardTitle>
              <Placeholder w={50} />
            </CardTitle>
            <CardText>
              <Placeholder w={75} /> <Placeholder w={50} /> <Placeholder w={50} />{' '}
              <Placeholder w={75} /> <Placeholder w={100} />
            </CardText>
          </PlaceholderGroup>
          <Button
            variant='solid'
            theme='primary'
            component='a'
            href='#placeholder-example'
            disabled
            className='placeholder'
            style={{ width: '50%' }}
          />
        </CardBody>
      </Card>
    </Box>
  );
}
