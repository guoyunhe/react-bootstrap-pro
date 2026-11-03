import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type BoxComponentProps } from './shared';

export type AccordionProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { flush?: boolean | undefined; gap?: boolean | undefined; size?: 'sm' | undefined }
>;

export function Accordion<C extends ElementType = 'div'>({
  component,
  className,
  flush,
  gap,
  size,
  ...props
}: AccordionProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'accordion',
        flush && 'accordion-flush',
        gap && 'accordion-gap',
        size && `accordion-${size}`,
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type AccordionItemProps<C extends ElementType = 'details'> = BoxProps<C>;

export function AccordionItem<C extends ElementType = 'details'>({
  component,
  className,
  ...props
}: AccordionItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='accordion-item'
      component={component}
      defaultComponent={'details' as C}
      className={className}
    />
  );
}

export type AccordionHeaderProps<C extends ElementType = 'summary'> = BoxProps<C>;

export function AccordionHeader<C extends ElementType = 'summary'>({
  component,
  className,
  ...props
}: AccordionHeaderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='accordion-header'
      component={component}
      defaultComponent={'summary' as C}
      className={className}
    />
  );
}

export type AccordionBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function AccordionBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: AccordionBodyProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='accordion-body'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type AccordionIconProps<C extends ElementType = 'svg'> = BoxProps<C>;

export function AccordionIcon<C extends ElementType = 'svg'>({
  component,
  className,
  ...props
}: AccordionIconProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='accordion-icon'
      component={component}
      defaultComponent={'svg' as C}
      className={className}
      aria-hidden='true'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m2 5 6 6 6-6' />
    </ClassedBox>
  );
}
