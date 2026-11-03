import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap-pro';

export function AccordionNestedDemo() {
  const nestedItems = [
    { heading: 'Nested item #1', body: 'First nested item content.' },
    { heading: 'Nested item #2', body: 'Second nested item content.' },
  ];

  return (
    <Accordion>
      <AccordionItem name='outer' open>
        <AccordionHeader>Parent item #1</AccordionHeader>
        <AccordionBody>
          This item contains a nested accordion.
          <Accordion marginTop={3}>
            {nestedItems.map(({ heading, body }, index) => (
              <AccordionItem key={heading} name='inner' open={index === 0}>
                <AccordionHeader>{heading}</AccordionHeader>
                <AccordionBody>{body}</AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem name='outer'>
        <AccordionHeader>Parent item #2</AccordionHeader>
        <AccordionBody>This item has no nested accordion.</AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
