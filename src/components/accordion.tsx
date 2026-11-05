import clsx from 'clsx';
import type { ElementType, ReactNode } from 'react';
import { BiChevronDown } from 'react-bootstrap-icons-pro';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type AccordionProps<C extends ElementType = 'div'> = ComponentProps<
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        'accordion',
        flush && 'accordion-flush',
        gap && 'accordion-gap',
        size && `accordion-${size}`,
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

export type AccordionItemProps<C extends ElementType = 'details'> = BoxProps<C>;

export function AccordionItem<C extends ElementType = 'details'>(props: AccordionItemProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={props.component ?? ('details' as C)}
      classNameBefore={clsx('accordion-item', props.classNameBefore)}
      className={props.className}
    />
  );
}

export type AccordionHeaderProps<C extends ElementType = 'summary'> = ComponentProps<
  C,
  { icon?: ReactNode | undefined }
>;

export function AccordionHeader<C extends ElementType = 'summary'>({
  component,
  className,
  icon = <BiChevronDown />,
  children,
  ...props
}: AccordionHeaderProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('summary' as C)}
      classNameBefore={clsx('accordion-header', props.classNameBefore)}
      className={className}
    >
      {children}
      {icon && (
        <span className='accordion-icon' aria-hidden='true'>
          {icon}
        </span>
      )}
    </Box>
  );
}

export type AccordionBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function AccordionBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: AccordionBodyProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('accordion-body', props.classNameBefore)}
      className={className}
    />
  );
}
