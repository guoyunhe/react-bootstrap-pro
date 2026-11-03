import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
} from 'react-bootstrap-pro';

export function AccordionBasicDemo() {
  return (
    <Accordion>
      <AccordionItem name='faq' open>
        <AccordionHeader>
          Accordion Item #1
          <AccordionIcon />
        </AccordionHeader>
        <AccordionBody>
          <strong>This item is open by default.</strong> The browser handles the disclosure
          behavior, and the shared name makes the items exclusive.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem name='faq'>
        <AccordionHeader>
          Accordion Item #2
          <AccordionIcon />
        </AccordionHeader>
        <AccordionBody>
          Opening this item closes the first item because they share a name.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem name='faq'>
        <AccordionHeader>
          Accordion Item #3
          <AccordionIcon />
        </AccordionHeader>
        <AccordionBody>
          Place any content inside the body, including text, links, or other components.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
