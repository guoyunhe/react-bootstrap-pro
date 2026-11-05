import { Card, CardBody, CardTitle, CardText, Row } from 'react-bootstrap-pro';

const themes = [
  'primary',
  'accent',
  'success',
  'danger',
  'warning',
  'info',
  'inverse',
  'secondary',
] as const;

export function CardThemeVariantsSubtleDemo() {
  return (
    <Row cols={{ xs: 1, sm: 2, lg: 4 }} gutter={3}>
      {themes.map((theme) => (
        <Card key={theme} variant='subtle' theme={theme}>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>Card text…</CardText>
          </CardBody>
        </Card>
      ))}
    </Row>
  );
}
