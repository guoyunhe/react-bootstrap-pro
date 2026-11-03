import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
} from 'react-bootstrap-pro';

export function AccordionExpandCollapseDemo() {
  const [expanded, setExpanded] = useState(false);

  function toggleAll() {
    const accordion = document.querySelector<HTMLElement>('#accordion-expand-collapse');
    if (!accordion) {
      throw new Error('The accordion expand/collapse demo root was not found.');
    }

    const nextExpanded = !expanded;
    const items = accordion.querySelectorAll<HTMLDetailsElement>('.accordion-item');

    for (const item of items) {
      if (nextExpanded) {
        item.removeAttribute('name');
        item.open = true;
      } else {
        item.open = false;
        item.setAttribute('name', 'accordion-expand-collapse');
      }
    }

    setExpanded(nextExpanded);
  }

  return (
    <>
      <Button
        className='mb-3'
        type='button'
        variant='subtle'
        theme='secondary'
        size='sm'
        aria-expanded={expanded}
        onClick={toggleAll}
      >
        {expanded ? 'Collapse all' : 'Expand all'}
      </Button>
      <Accordion id='accordion-expand-collapse' size='sm'>
        <AccordionItem name='accordion-expand-collapse' open>
          <AccordionHeader>Accordion Item #1</AccordionHeader>
          <AccordionBody>
            Use the button to expand all items, even while they share a name.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem name='accordion-expand-collapse'>
          <AccordionHeader>Accordion Item #2</AccordionHeader>
          <AccordionBody>
            Collapsing all items closes them and restores exclusive grouping.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem name='accordion-expand-collapse'>
          <AccordionHeader>Accordion Item #3</AccordionHeader>
          <AccordionBody>Individual items still use native details interactions.</AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
}
