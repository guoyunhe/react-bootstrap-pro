import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  Alert,
  Avatar,
  AvatarStatus,
  Badge,
  Card,
  CardBody,
  Carousel,
  CarouselControl,
  CloseButton,
  Dialog,
  Drawer,
  Nav,
  NavLink,
  PageLink,
  Pagination,
  PaginationItem,
  Progress,
  ProgressBar,
  Tab,
  TabContent,
  TabItem,
  TabList,
  TabPane,
  Toggler,
} from '../src';

test('composes native accordion markup with Box utility props', async () => {
  const screen = await render(
    <Accordion gap bg='body' data-testid='faq'>
      <AccordionItem name='faq' open>
        <AccordionHeader>
          Question
          <AccordionIcon />
        </AccordionHeader>
        <AccordionBody>Answer</AccordionBody>
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
});

test('provides component modifiers and preserves custom tags', async () => {
  const screen = await render(
    <>
      <Alert component='section' instant data-testid='alert'>
        Notice
      </Alert>
      <Avatar size='lg' subtle data-testid='avatar'>
        AB
        <AvatarStatus status='online' />
      </Avatar>
      <Badge variant='outline' theme='primary' data-testid='badge'>
        New
      </Badge>
    </>,
  );

  expect(screen.getByTestId('alert').element().tagName).toBe('SECTION');
  expect(screen.getByTestId('alert')).toHaveClass('alert', 'alert-instant');
  expect(screen.getByTestId('avatar')).toHaveClass('avatar', 'avatar-lg', 'avatar-subtle');
  expect(screen.getByTestId('avatar').element().querySelector('.avatar-status')).toHaveClass(
    'avatar-status',
    'status-online',
  );
  expect(screen.getByTestId('badge')).toHaveClass('badge', 'badge-outline', 'theme-primary');
});

test('composes card and carousel structure', async () => {
  const screen = await render(
    <>
      <Card variant='subtle' data-testid='card'>
        <CardBody>Card content</CardBody>
      </Card>
      <Carousel id='carousel' data-testid='carousel' fade>
        <div className='carousel-inner'>
          <div className='carousel-item active'>Slide 1</div>
        </div>
        <CarouselControl target='#carousel' direction='next' />
      </Carousel>
    </>,
  );

  expect(screen.getByTestId('card')).toHaveClass('card', 'card-subtle');
  expect(screen.getByText('Card content')).toHaveClass('card-body');
  expect(screen.getByTestId('carousel')).toHaveClass('carousel', 'carousel-fade');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute('data-bs-slide', 'next');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveClass('btn-icon');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute(
    'data-bs-target',
    '#carousel',
  );
});

test('sets native overlay semantics and close button labeling', async () => {
  const screen = await render(
    <>
      <Dialog size='lg' open data-testid='dialog'>
        Dialog content
      </Dialog>
      <Drawer placement='start' data-testid='drawer' />
      <CloseButton />
    </>,
  );

  expect(screen.getByTestId('dialog').element().tagName).toBe('DIALOG');
  expect(screen.getByTestId('dialog')).toHaveClass('dialog', 'dialog-lg');
  expect(screen.getByTestId('dialog')).toHaveAttribute('open');
  expect(screen.getByTestId('drawer')).toHaveClass('drawer', 'drawer-start');
  expect(screen.getByRole('button', { name: 'Close' })).toHaveClass('btn-close');
});

test('exposes accessible progress and navigation patterns', async () => {
  const screen = await render(
    <>
      <Progress label='Upload' value={40} data-testid='progress'>
        <ProgressBar value={40} />
      </Progress>
      <Nav variant='pills' data-testid='nav'>
        <NavLink active href='/current'>
          Current
        </NavLink>
      </Nav>
      <Pagination data-testid='pagination'>
        <PaginationItem active>
          <PageLink href='/1'>1</PageLink>
        </PaginationItem>
      </Pagination>
    </>,
  );

  expect(screen.getByRole('progressbar', { name: 'Upload' })).toHaveAttribute(
    'aria-valuenow',
    '40',
  );
  expect(
    screen.getByRole('progressbar', { name: 'Upload' }).element().querySelector('.progress-bar'),
  ).toHaveStyle({
    width: '40%',
  });
  expect(screen.getByTestId('nav')).toHaveClass('nav', 'nav-pills');
  expect(screen.getByRole('link', { name: 'Current' })).toHaveAttribute('aria-current', 'page');
  expect(screen.getByTestId('pagination')).toHaveClass('pagination');
  expect(screen.getByRole('link', { name: '1' })).toHaveClass('page-link');
});

test('connects tab controls to panels and retains plugin data attributes', async () => {
  const screen = await render(
    <>
      <TabList>
        <TabItem>
          <Tab active targetId='overview'>
            Overview
          </Tab>
        </TabItem>
      </TabList>
      <TabContent>
        <TabPane active id='overview'>
          Overview content
        </TabPane>
      </TabContent>
      <Toggler target='#theme' attribute='class' value='bg-primary'>
        Toggle theme
      </Toggler>
    </>,
  );

  expect(screen.getByRole('tab', { name: 'Overview' })).toHaveAttribute(
    'data-bs-target',
    '#overview',
  );
  expect(screen.getByRole('tabpanel', { name: '' })).toHaveClass('tab-pane', 'active');
  expect(screen.getByRole('button', { name: 'Toggle theme' })).toHaveAttribute(
    'data-bs-toggle',
    'toggler',
  );
  expect(screen.getByRole('button', { name: 'Toggle theme' })).toHaveAttribute(
    'data-bs-value',
    'bg-primary',
  );
});
