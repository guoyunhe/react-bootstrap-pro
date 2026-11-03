import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
} from 'react-bootstrap-pro';

export function AccordionVariantsDemo() {
  return (
    <Accordion theme='primary'>
      <AccordionItem name='variant' open>
        <AccordionHeader>
          Primary theme
          <AccordionIcon />
        </AccordionHeader>
        <AccordionBody>The open item uses the primary theme colors.</AccordionBody>
      </AccordionItem>
      <AccordionItem name='variant'>
        <AccordionHeader>
          Another item
          <AccordionIcon />
        </AccordionHeader>
        <AccordionBody>Open this item to see the same theme.</AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
