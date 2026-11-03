import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap-pro';

export function AccordionFlushDemo() {
  const items = [
    { heading: 'Flush item #1', body: 'Flush removes the outside borders and rounding.' },
    { heading: 'Flush item #2', body: 'Items sit flush against their container.' },
    { heading: 'Flush item #3', body: 'Use this style in dense layouts.' },
  ];

  return (
    <Accordion flush>
      {items.map(({ heading, body }, index) => (
        <AccordionItem key={heading} name='flush' open={index === 0}>
          <AccordionHeader>{heading}</AccordionHeader>
          <AccordionBody>{body}</AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
