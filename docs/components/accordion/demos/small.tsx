import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
} from 'react-bootstrap-pro';

export function AccordionSmallDemo() {
  return (
    <Accordion size='sm'>
      <AccordionItem name='small' open>
        <AccordionHeader>
          Compact item #1
          <AccordionIcon />
        </AccordionHeader>
        <AccordionBody>The small size applies compact spacing and typography.</AccordionBody>
      </AccordionItem>
      <AccordionItem name='small'>
        <AccordionHeader>
          Compact item #2
          <AccordionIcon />
        </AccordionHeader>
        <AccordionBody>Combine small with the other variants.</AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
