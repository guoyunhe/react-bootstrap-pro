import { Col, InlineList, InlineListItem, Row, UnstyledList } from 'react-bootstrap-pro';

export function TypographyListsDemo() {
  return (
    <>
      <UnstyledList>
        <li>List structure remains semantic.</li>
        <li>Only the immediate list items lose their markers.</li>
      </UnstyledList>
      <InlineList>
        <InlineListItem>First item</InlineListItem>
        <InlineListItem>Second item</InlineListItem>
        <InlineListItem>Third item</InlineListItem>
      </InlineList>
      <Row component='dl'>
        <Col component='dt' span={{ sm: 3 }}>
          Description lists
        </Col>
        <Col component='dd' span={{ sm: 9 }}>
          Use the grid components to align terms and descriptions responsively.
        </Col>
      </Row>
    </>
  );
}
