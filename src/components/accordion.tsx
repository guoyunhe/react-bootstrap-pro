import clsx from 'clsx';
import type { ComponentType, ElementType } from 'react';
import { BiChevronDown, type IconProps } from 'react-bootstrap-icons-pro';

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

export type AccordionHeaderProps<C extends ElementType = 'summary'> = BoxComponentProps<
  C,
  { icon?: ComponentType<IconProps> | undefined }
>;

export function AccordionHeader<C extends ElementType = 'summary'>({
  component,
  className,
  icon: Icon = BiChevronDown,
  children,
  ...props
}: AccordionHeaderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='accordion-header'
      component={component}
      defaultComponent={'summary' as C}
      className={className}
    >
      {children}
      <Icon className='accordion-icon' aria-hidden='true' />
    </ClassedBox>
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
