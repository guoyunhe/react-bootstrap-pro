import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import {
  Abbr,
  Blockquote,
  BlockquoteFooter,
  DisplayHeading,
  Heading,
  InlineList,
  InlineListItem,
  Lead,
  UnstyledList,
} from '../src';

test('renders semantic headings with independent visual sizes', async () => {
  const screen = await render(
    <>
      <Heading level={2} size={4} data-testid='heading'>
        Section
      </Heading>
      <Heading component='p' level={3} data-testid='styled-heading'>
        Styled paragraph
      </Heading>
      <DisplayHeading size={2} data-testid='display-heading'>
        Display
      </DisplayHeading>
      <Lead data-testid='lead'>Introduction</Lead>
    </>,
  );

  const heading = screen.getByTestId('heading').element();
  const styledHeading = screen.getByTestId('styled-heading').element();

  expect(heading.tagName).toBe('H2');
  expect(heading).toHaveClass('h4');
  expect(styledHeading.tagName).toBe('P');
  expect(styledHeading).toHaveClass('h3');
  expect(screen.getByTestId('display-heading').element()).toHaveClass('display-2');
  expect(screen.getByTestId('lead').element()).toHaveClass('lead');
});

test('renders blockquotes and their attribution', async () => {
  const screen = await render(
    <figure>
      <Blockquote data-testid='quote'>
        <p>Quote text</p>
      </Blockquote>
      <BlockquoteFooter component='figcaption' data-testid='attribution'>
        Author
      </BlockquoteFooter>
    </figure>,
  );

  expect(screen.getByTestId('quote').element()).toHaveClass('blockquote');
  expect(screen.getByTestId('attribution').element().tagName).toBe('FIGCAPTION');
  expect(screen.getByTestId('attribution').element()).toHaveClass('blockquote-footer');
});

test('renders abbreviation and list typography', async () => {
  const screen = await render(
    <>
      <Abbr initialism title='HyperText Markup Language' data-testid='abbr'>
        HTML
      </Abbr>
      <UnstyledList data-testid='unstyled-list'>
        <li>Item</li>
      </UnstyledList>
      <InlineList data-testid='inline-list'>
        <InlineListItem>First</InlineListItem>
        <InlineListItem>Second</InlineListItem>
      </InlineList>
    </>,
  );

  const abbreviation = screen.getByTestId('abbr').element();

  expect(abbreviation.tagName).toBe('ABBR');
  expect(abbreviation).toHaveClass('initialism');
  expect(abbreviation.getAttribute('title')).toBe('HyperText Markup Language');
  expect(screen.getByTestId('unstyled-list').element()).toHaveClass('list-unstyled');
  expect(screen.getByTestId('inline-list').element()).toHaveClass('list-inline');
  expect(screen.container.querySelectorAll('.list-inline-item')).toHaveLength(2);
});
