import { DisplayHeading, Heading, Lead } from 'react-bootstrap-pro';

export function TypographyHeadingsDemo() {
  return (
    <>
      <Heading level={2}>Semantic heading</Heading>
      <Heading component='p' level={2} size={4}>
        Paragraph styled as a smaller heading
      </Heading>
      <DisplayHeading size={2}>Display heading</DisplayHeading>
      <Lead>
        A lead paragraph stands out from regular body copy and works well as an introduction.
      </Lead>
    </>
  );
}
