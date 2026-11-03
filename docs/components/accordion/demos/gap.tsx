import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap-pro';

export function AccordionGapDemo() {
  const items = [
    {
      heading: 'Spaced item #1',
      body: 'The gap stays constant while the panel opens and closes.',
    },
    { heading: 'Spaced item #2', body: 'Each item is a separate rounded card.' },
    { heading: 'Spaced item #3', body: 'Customize the spacing with --accordion-gap.' },
  ];

  return (
    <Accordion gap>
      {items.map(({ heading, body }, index) => (
        <AccordionItem key={heading} name='gap' open={index === 0}>
          <AccordionHeader>{heading}</AccordionHeader>
          <AccordionBody>{body}</AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
