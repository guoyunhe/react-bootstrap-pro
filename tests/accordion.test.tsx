import { BiPlus } from 'react-bootstrap-icons-pro';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from '../src';

test('composes native accordion markup with Box utility props', async () => {
  const screen = await render(
    <Accordion gap bg='body' data-testid='faq'>
      <AccordionItem name='faq' open>
        <AccordionHeader>Question</AccordionHeader>
        <AccordionBody>Answer</AccordionBody>
      </AccordionItem>
      <AccordionItem name='faq'>
        <AccordionHeader icon={<BiPlus />}>Custom icon</AccordionHeader>
        <AccordionBody>Custom icon content</AccordionBody>
      </AccordionItem>
    </Accordion>,
  );
  const accordion = screen.getByTestId('faq');
  const item = screen.getByText('Question').element().closest('details');

  expect(accordion).toHaveClass('accordion', 'accordion-gap', 'bg-body');
  expect(item).toHaveAttribute('name', 'faq');
  expect(item).toHaveAttribute('open');
  expect(screen.getByText('Question')).toHaveClass('accordion-header');
  expect(screen.getByText('Answer')).toHaveClass('accordion-body');
  const icons = accordion.element().querySelectorAll('.accordion-icon');
  expect(icons[0].querySelector('svg')).toHaveClass('bi-chevron-down');
  expect(icons[0]).toHaveAttribute('aria-hidden', 'true');
  expect(icons[1].querySelector('svg')).toHaveClass('bi-plus');
});
