import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
} from 'react-bootstrap-pro';

export function AccordionAlwaysOpenDemo() {
  const items = [
    {
      heading: 'Independent item #1',
      body: 'This item is not grouped with the others.',
    },
    {
      heading: 'Independent item #2',
      body: 'Both items can remain open at once.',
    },
    { heading: 'Independent item #3', body: 'Toggle each item independently.' },
  ];

  return (
    <Accordion>
      {items.map(({ heading, body }, index) => (
        <AccordionItem key={heading} open={index < 2}>
          <AccordionHeader>
            {heading}
            <AccordionIcon />
          </AccordionHeader>
          <AccordionBody>{body}</AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
