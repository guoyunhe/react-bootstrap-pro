import type { AnchorHTMLAttributes } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Box, Col, Container, Row } from '../src';

function AppLink({
  to,
  children,
  ...props
}: { to: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}

test('renders a plain div by default', async () => {
  const screen = await render(<Box data-testid='box'>Content</Box>);
  const box = screen.getByTestId('box');

  expect(box.element().tagName).toBe('DIV');
  expect(box.element().getAttribute('class')).toBeNull();
});

test('supports m and p spacing shorthands', async () => {
  const screen = await render(
    <>
      <Box data-testid='spacing' m={{ xs: 1, md: -2 }} p={3} />
      <Box data-testid='preferred-spacing' m={2} p={1} />
    </>,
  );

  expect(screen.getByTestId('spacing')).toHaveClass('m-1', 'md:m-n2', 'p-3');
  expect(screen.getByTestId('preferred-spacing')).toHaveClass('m-2', 'p-1');
});

test('supports Bootstrap shorthand names for directional spacing utilities', async () => {
  const screen = await render(
    <Box
      data-testid='spacing-shorthands'
      m={{ xs: -1, md: 4 }}
      mx={2}
      my={3}
      mt={0}
      me={-2}
      mb='auto'
      ms={1}
      p={{ sm: 2 }}
      px={3}
      py={4}
      pt={5}
      pe={6}
      pb={7}
      ps={8}
    />,
  );

  expect(screen.getByTestId('spacing-shorthands')).toHaveClass(
    'm-n1',
    'md:m-4',
    'mx-2',
    'my-3',
    'mt-0',
    'me-n2',
    'mb-auto',
    'ms-1',
    'sm:p-2',
    'px-3',
    'py-4',
    'pt-5',
    'pe-6',
    'pb-7',
    'ps-8',
  );
});

test('applies the focus ring helper', async () => {
  const screen = await render(
    <Box component='a' href='#focus-ring' focusRing theme='primary' data-testid='focus-ring'>
      Focus me
    </Box>,
  );

  expect(screen.getByTestId('focus-ring').element().tagName).toBe('A');
  expect(screen.getByTestId('focus-ring')).toHaveClass('focus-ring', 'theme-primary');
});

test('applies the hover lift helper', async () => {
  const screen = await render(
    <Box component='a' href='#hover-lift' hoverLift data-testid='hover-lift'>
      Lift on hover or focus
    </Box>,
  );

  expect(screen.getByTestId('hover-lift')).toHaveClass('hover-lift');
});

test('applies foreground utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='fg' fg='primary' />
      <Box data-testid='fg-emphasis' fgEmphasis='danger' />
      <Box data-testid='fg-contrast' fgContrast='warning' />
      <Box data-testid='fg-opacity' fg='secondary' fgOpacity={50} />
      <Box data-testid='fg-reset' fg='reset' />
    </>,
  );

  expect(screen.getByTestId('fg')).toHaveClass('fg-primary');
  expect(screen.getByTestId('fg-emphasis')).toHaveClass('fg-emphasis-danger');
  expect(screen.getByTestId('fg-contrast')).toHaveClass('fg-contrast-warning');
  expect(screen.getByTestId('fg-opacity')).toHaveClass('fg-secondary', 'fg-50');
  expect(screen.getByTestId('fg-reset')).toHaveClass('fg-reset');
});

test('applies background utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='bg' bg='primary' />
      <Box data-testid='bg-subtle' bgSubtle='accent' />
      <Box data-testid='bg-muted' bgMuted='info' />
      <Box data-testid='bg-opacity' bg='inverse' bgOpacity={70} />
      <Box data-testid='bg-gradient' bg='success' gradient />
      <Box data-testid='bg-transparent' bg='transparent' />
    </>,
  );

  expect(screen.getByTestId('bg')).toHaveClass('bg-primary');
  expect(screen.getByTestId('bg-subtle')).toHaveClass('bg-subtle-accent');
  expect(screen.getByTestId('bg-muted')).toHaveClass('bg-muted-info');
  expect(screen.getByTestId('bg-opacity')).toHaveClass('bg-inverse', 'bg-70');
  expect(screen.getByTestId('bg-gradient')).toHaveClass('bg-success', 'bg-gradient');
  expect(screen.getByTestId('bg-transparent')).toHaveClass('bg-transparent');
});

test('applies theme utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='theme' theme='primary' themeStyle='contrast' />
      <Box data-testid='theme-subtle' theme='success' themeStyle='subtle' themeBorder />
      <Box data-testid='theme-reset' themeReset />
    </>,
  );

  expect(screen.getByTestId('theme')).toHaveClass('theme-primary', 'theme-contrast');
  expect(screen.getByTestId('theme-subtle')).toHaveClass(
    'theme-success',
    'theme-subtle',
    'theme-border',
  );
  expect(screen.getByTestId('theme-reset')).toHaveClass('theme-reset');
});

test('applies color scheme utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='light' colorScheme='light' />
      <Box data-testid='dark' colorScheme='dark' />
      <Box data-testid='auto' colorScheme='auto' />
    </>,
  );

  expect(screen.getByTestId('light')).toHaveClass('color-scheme-light');
  expect(screen.getByTestId('dark')).toHaveClass('color-scheme-dark');
  expect(screen.getByTestId('auto')).toHaveClass('color-scheme-auto');
});

test('applies aspect ratio, container query, and display utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='ratio' ratio='16x9' />
      <Box data-testid='container-query' containerQuery='inline' />
      <Box data-testid='display' display={{ xs: 'none', md: 'block', xl: 'grid' }} />
      <Box data-testid='display-single' display='inline-flex' />
    </>,
  );

  expect(screen.getByTestId('ratio')).toHaveClass('ratio-16x9');
  expect(screen.getByTestId('container-query')).toHaveClass('contains-inline');
  expect(screen.getByTestId('display')).toHaveClass('d-none', 'md:d-block', 'xl:d-grid');
  expect(screen.getByTestId('display-single')).toHaveClass('d-inline-flex');
});

test('applies responsive float and object-fit utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='float' float={{ sm: 'start', lg: 'end' }} />
      <Box data-testid='object-fit' objectFit={{ xs: 'cover', md: 'contain' }} />
    </>,
  );

  expect(screen.getByTestId('float')).toHaveClass('sm:float-start', 'lg:float-end');
  expect(screen.getByTestId('object-fit')).toHaveClass('object-fit-cover', 'md:object-fit-contain');
});

test('applies overflow and positioning utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='overflow' overflow='hidden' overflowX='auto' overflowY='scroll' />
      <Box data-testid='position' position='absolute' top={0} end={100} translateMiddle='x' />
      <Box
        data-testid='position-offsets'
        position='relative'
        bottom={50}
        start={0}
        translateMiddle
      />
      <Box data-testid='fixed-position' fixedTop fixedBottom />
      <Box
        data-testid='sticky-position'
        stickyTop={{ sm: true, md: false, '2xl': true }}
        stickyBottom
      />
    </>,
  );

  expect(screen.getByTestId('overflow')).toHaveClass(
    'overflow-hidden',
    'overflow-x-auto',
    'overflow-y-scroll',
  );
  expect(screen.getByTestId('position')).toHaveClass(
    'position-absolute',
    'top-0',
    'end-100',
    'translate-middle-x',
  );
  expect(screen.getByTestId('position-offsets')).toHaveClass(
    'position-relative',
    'bottom-50',
    'start-0',
    'translate-middle',
  );
  expect(screen.getByTestId('fixed-position')).toHaveClass('fixed-top', 'fixed-bottom');
  expect(screen.getByTestId('sticky-position')).toHaveClass(
    'sm:sticky-top',
    '2xl:sticky-top',
    'sticky-bottom',
  );
  expect(screen.getByTestId('sticky-position')).not.toHaveClass('md:sticky-top');
});

test('applies visibility and z-index values', async () => {
  const screen = await render(
    <>
      <Box data-testid='visible' visibility='visible' z='tooltip' />
      <Box data-testid='z-index-negative' z={-2} style={{ color: 'red' }} />
      <Box data-testid='z-index-number' z={3} />
    </>,
  );

  expect(screen.getByTestId('visible')).toHaveClass('visible', 'z-tooltip');
  expect(screen.getByTestId('z-index-negative').element().style.zIndex).toBe('-2');
  expect(screen.getByTestId('z-index-negative').element().style.color).toBe('red');
  expect(screen.getByTestId('z-index-negative')).not.toHaveClass('z-n2');
  expect(screen.getByTestId('z-index-number').element().style.zIndex).toBe('3');
  expect(screen.getByTestId('z-index-number')).not.toHaveClass('z-3');
});

test('applies alignment, border, and radius utilities', async () => {
  const screen = await render(
    <Box
      data-testid='box'
      alignContent={{ xs: 'around', md: 'stretch' }}
      alignItems='baseline'
      alignSelf='auto'
      verticalAlign='text-bottom'
      border
      borderTop={0}
      borderEnd
      borderBottom={0}
      borderStart
      borderX
      borderY={0}
      borderColor='primary'
      borderSubtle='accent'
      borderWidth='keyline'
      borderOpacity={50}
      rounded
      roundedSize={0}
      roundedTop={2}
      roundedEnd='pill'
      roundedBottom={0}
      roundedStart
    />,
  );
  const box = screen.getByTestId('box');

  expect(box).toHaveClass(
    'align-content-around',
    'md:align-content-stretch',
    'align-items-baseline',
    'align-self-auto',
    'align-text-bottom',
    'border',
    'border-top-0',
    'border-end',
    'border-bottom-0',
    'border-start',
    'border-x',
    'border-y-0',
    'border-primary',
    'border-subtle-accent',
    'border-keyline',
    'border-50',
    'rounded',
    'rounded-size-0',
    'rounded-top-2',
    'rounded-end-pill',
    'rounded-bottom-0',
    'rounded-start',
  );
});

test('applies flex, grid, and spacing utilities responsively', async () => {
  const screen = await render(
    <Box
      data-testid='box'
      flex='fill'
      flexDirection={{ sm: 'row-reverse' }}
      flexGrow={0}
      flexShrink={1}
      flexWrap='nowrap'
      justifyContent='evenly'
      justifyItems='stretch'
      justifySelf='center'
      placeItems='center'
      gridColumns={6}
      gridColumn='fill'
      gridAutoFlow='dense'
      order={{ md: 'last' }}
      m={{ xs: -1, md: 4 }}
      mx={2}
      my={3}
      mt={0}
      me={-2}
      mb='auto'
      ms={1}
      p={{ sm: 2 }}
      px={3}
      py={4}
      pt={5}
      pe={6}
      pb={7}
      ps={8}
      gap={9}
      rowGap={10}
      columnGap={11}
      spaceX={12}
      spaceY={0}
      divideX
      divideY={{ lg: 0 }}
    />,
  );

  expect(screen.getByTestId('box')).toHaveClass(
    'flex-fill',
    'sm:flex-row-reverse',
    'flex-grow-0',
    'flex-shrink-1',
    'flex-nowrap',
    'justify-content-evenly',
    'justify-items-stretch',
    'justify-self-center',
    'place-items-center',
    'grid-cols-6',
    'grid-cols-fill',
    'grid-auto-flow-dense',
    'md:order-last',
    'm-n1',
    'md:m-4',
    'mx-2',
    'my-3',
    'mt-0',
    'me-n2',
    'mb-auto',
    'ms-1',
    'sm:p-2',
    'px-3',
    'py-4',
    'pt-5',
    'pe-6',
    'pb-7',
    'ps-8',
    'gap-9',
    'row-gap-10',
    'column-gap-11',
    'space-x-12',
    'space-y-0',
    'divide-x',
    'lg:divide-y-0',
  );
});

test('applies sizing, typography, link, and motion utilities', async () => {
  const screen = await render(
    <>
      <Box
        data-testid='sizing'
        w={12}
        maxW={100}
        minW={0}
        vw={100}
        minVw={100}
        dvw={100}
        minDvw={100}
        h={75}
        maxH={100}
        minH={100}
        vh={100}
        minVh={100}
        dvh={100}
        minDvh={100}
        opacity={25}
        shadow
        shadowColor='primary'
        shadowOpacity={50}
        pointerEvents='none'
        userSelect='all'
      />
      <Box
        data-testid='typography'
        fontFamily='monospace'
        fontSize='xl'
        textSize='2xl'
        fontStyle='italic'
        fontWeight='semibold'
        lineHeight='lg'
        textAlign={{ xs: 'center', md: 'end' }}
        textDecoration='underline'
        textTransform='uppercase'
        textTruncate
        textWrap='balance'
        textBreak
        linkOpacity={50}
        hoverLinkOpacity={80}
        underlineOffset={2}
        hoverUnderlineOffset={3}
        underlineColor='primary'
        underlineOpacity={40}
        hoverUnderlineOpacity={90}
        underlineThickness={3}
        hoverUnderlineThickness={5}
      />
      <Box data-testid='motion' shadow='xl' transition='none' animation='shake' />
    </>,
  );

  expect(screen.getByTestId('sizing')).toHaveClass(
    'w-12',
    'max-w-100',
    'min-w-0',
    'vw-100',
    'min-vw-100',
    'dvw-100',
    'min-dvw-100',
    'h-75',
    'max-h-100',
    'min-h-100',
    'vh-100',
    'min-vh-100',
    'dvh-100',
    'min-dvh-100',
    'opacity-25',
    'shadow',
    'shadow-primary',
    'shadow-opacity-50',
    'pe-none',
    'user-select-all',
  );
  expect(screen.getByTestId('typography')).toHaveClass(
    'font-monospace',
    'fs-xl',
    'text-2xl',
    'fst-italic',
    'fw-semibold',
    'lh-lg',
    'text-center',
    'md:text-end',
    'text-decoration-underline',
    'text-uppercase',
    'text-truncate',
    'text-balance',
    'text-break',
    'link-50',
    'hover:link-80',
    'underline-offset-2',
    'hover:underline-offset-3',
    'underline-primary',
    'underline-40',
    'hover:underline-90',
    'underline-thickness-3',
    'hover:underline-thickness-5',
  );
  expect(screen.getByTestId('motion')).toHaveClass(
    'shadow-xl',
    'transition-none',
    'animation-shake',
  );
});

test('merges custom classes after utility classes', async () => {
  const screen = await render(<Box data-testid='box' bg='body' className='p-3 rounded' />);

  expect(screen.getByTestId('box').element().className).toBe('bg-body p-3 rounded');
});

test('renders the selected component and forwards its props', async () => {
  const screen = await render(
    <>
      <Box component='a' href='/docs' fg='primary'>
        Docs
      </Box>
      <Box component={AppLink} to='/profile' bgSubtle='primary'>
        Profile
      </Box>
      <Box
        component='img'
        src='/image.jpg'
        alt='Example'
        width={300}
        height={200}
        data-testid='image'
      />
    </>,
  );

  expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs');
  expect(screen.getByRole('link', { name: 'Docs' })).toHaveClass('fg-primary');
  expect(screen.getByRole('link', { name: 'Profile' })).toHaveAttribute('href', '/profile');
  expect(screen.getByRole('link', { name: 'Profile' })).toHaveClass('bg-subtle-primary');
  expect(screen.getByTestId('image')).toHaveAttribute('width', '300');
  expect(screen.getByTestId('image')).toHaveAttribute('height', '200');
  expect(screen.getByTestId('image')).not.toHaveClass('w-300', 'h-200');
});

test('layout components inherit box utilities', async () => {
  const screen = await render(
    <Container fluid bg='body' fg='2' data-testid='container'>
      <Row theme='primary' themeStyle='subtle' data-testid='row'>
        <Col bg='1' data-testid='col'>
          Content
        </Col>
      </Row>
    </Container>,
  );

  expect(screen.getByTestId('container')).toHaveClass('container-fluid', 'bg-body', 'fg-2');
  expect(screen.getByTestId('row')).toHaveClass('row', 'theme-primary', 'theme-subtle');
  expect(screen.getByTestId('col')).toHaveClass('col', 'bg-1');
});
