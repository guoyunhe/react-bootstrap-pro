import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { ListGroupButtonsDemo } from '../docs/components/list-group/demos/buttons';
import { ListGroupCheckboxesDemo } from '../docs/components/list-group/demos/checkboxes';
import { ListGroupLinksDemo } from '../docs/components/list-group/demos/links';
import { ListGroupNumberedDemo } from '../docs/components/list-group/demos/numbered';
import { ListGroupRadiosDemo } from '../docs/components/list-group/demos/radios';
import { ListGroupStretchedCheckboxesDemo } from '../docs/components/list-group/demos/stretched-checkboxes';
import { Box, ListGroup, ListGroupItem } from '../src';

test('responsive horizontal layouts switch at each container breakpoint', async () => {
  const breakpoints = [
    ['sm', 576],
    ['md', 768],
    ['lg', 1024],
    ['xl', 1280],
    ['2xl', 1536],
  ] as const;
  const screen = await render(
    <>
      <ListGroup horizontal data-testid='always'>
        <ListGroupItem>Always</ListGroupItem>
      </ListGroup>
      {breakpoints.map(([name, width]) => (
        <Box key={name} containerQuery='inline' style={{ width: width - 1 }}>
          <ListGroup horizontal={name} data-testid={name}>
            <ListGroupItem>{name}</ListGroupItem>
          </ListGroup>
        </Box>
      ))}
    </>,
  );
  expect(getComputedStyle(screen.getByTestId('always').element()).flexDirection).toBe('row');
  for (const [name, width] of breakpoints) {
    const list = screen.getByTestId(name).element();
    expect(list).toHaveClass(`${name}:list-group-horizontal`);
    expect(getComputedStyle(list).flexDirection).toBe('column');
    const container = list.parentElement!;
    container.style.width = `${width}px`;
    expect(getComputedStyle(list).flexDirection).toBe('row');
    container.style.width = `${width - 1}px`;
    expect(getComputedStyle(list).flexDirection).toBe('column');
  }
});

test('list examples retain semantics, accessible controls and native behavior', async () => {
  const screen = await render(
    <>
      <ListGroupLinksDemo />
      <ListGroupButtonsDemo />
      <ListGroupNumberedDemo />
      <ListGroupCheckboxesDemo />
      <ListGroupRadiosDemo />
      <ListGroupStretchedCheckboxesDemo />
    </>,
  );
  const disabledLink = screen.getByText('A disabled link item').element();
  expect(disabledLink).toHaveAttribute('aria-disabled', 'true');
  expect(disabledLink).not.toHaveAttribute('href');
  expect(screen.getByRole('button', { name: 'A disabled button item' })).toBeDisabled();
  expect(screen.container.querySelector('ol.list-group-numbered')).toBeTruthy();
  expect(screen.getByRole('radio', { name: 'First radio' })).toBeChecked();
  await screen.getByRole('radio', { name: 'Second radio' }).click();
  expect(screen.getByRole('radio', { name: 'First radio' })).not.toBeChecked();
  expect(screen.getByRole('radio', { name: 'Second radio' })).toBeChecked();
  const stretched = screen.container.querySelector<HTMLLabelElement>(
    "label[for='list-stretched-First']",
  )!;
  expect(stretched).toHaveClass('stretched-link');
  stretched.click();
  expect(screen.container.querySelector('#list-stretched-First')).toBeChecked();
  expect(screen.container.querySelector('#list-check-First')).not.toBeChecked();
});
