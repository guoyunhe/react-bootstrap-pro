import { BiPlus } from 'react-bootstrap-icons-pro';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap-pro';

export function AccordionCustomIconDemo() {
  return (
    <Accordion>
      <AccordionItem name='custom-icon' open>
        <AccordionHeader icon={<BiPlus />}>Custom plus icon</AccordionHeader>
        <AccordionBody>Pass an icon node to replace the default chevron.</AccordionBody>
      </AccordionItem>
      <AccordionItem name='custom-icon'>
        <AccordionHeader icon={<BiPlus />}>Another custom icon</AccordionHeader>
        <AccordionBody>The icon is rendered inside the accordion header.</AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
