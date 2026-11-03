import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box, type BoxProps } from './box';

type BoxComponentProps<C extends ElementType, OwnProps extends object = object> = OwnProps &
  Omit<BoxProps<C>, keyof OwnProps>;

type ClassedBoxProps<C extends ElementType, P extends object> = P & {
  baseClass: string;
  defaultComponent: C;
  component?: C | undefined;
  className?: string | undefined;
};

function ClassedBox<C extends ElementType, P extends object = object>({
  baseClass,
  defaultComponent,
  component,
  className,
  ...props
}: ClassedBoxProps<C, P>) {
  const boxProps = {
    ...props,
    component: component ?? defaultComponent,
    className: clsx(baseClass, className),
  } as BoxProps<C>;

  return <Box<C> {...boxProps} />;
}

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

export type AlertProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { instant?: boolean | undefined }
>;

export function Alert<C extends ElementType = 'div'>({
  component,
  className,
  instant,
  role,
  ...props
}: AlertProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('alert', instant && 'alert-instant')}
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={role ?? 'alert'}
    />
  );
}

export type AvatarProps<C extends ElementType = 'span'> = BoxComponentProps<
  C,
  { size?: 'xs' | 'sm' | 'lg' | 'xl' | undefined; subtle?: boolean | undefined }
>;

export function Avatar<C extends ElementType = 'span'>({
  component,
  className,
  size,
  subtle,
  ...props
}: AvatarProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('avatar', size && `avatar-${size}`, subtle && 'avatar-subtle')}
      component={component}
      defaultComponent={'span' as C}
      className={className}
    />
  );
}

export type AvatarImageProps<C extends ElementType = 'img'> = BoxProps<C>;

export function AvatarImage<C extends ElementType = 'img'>({
  component,
  className,
  ...props
}: AvatarImageProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='avatar-img'
      component={component}
      defaultComponent={'img' as C}
      className={className}
    />
  );
}

export type AvatarStatusProps<C extends ElementType = 'span'> = BoxComponentProps<
  C,
  { status?: 'online' | 'offline' | 'busy' | 'away' | undefined }
>;

export function AvatarStatus<C extends ElementType = 'span'>({
  component,
  className,
  status,
  ...props
}: AvatarStatusProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('avatar-status', status && `status-${status}`)}
      component={component}
      defaultComponent={'span' as C}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

export type AvatarStackProps<C extends ElementType = 'div'> = BoxProps<C>;

export function AvatarStack<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: AvatarStackProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='avatar-stack'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type BadgeProps<C extends ElementType = 'span'> = BoxComponentProps<
  C,
  { size?: 'lg' | undefined; variant?: 'solid' | 'subtle' | 'outline' | undefined }
>;

export function Badge<C extends ElementType = 'span'>({
  component,
  className,
  size,
  variant,
  ...props
}: BadgeProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'badge',
        variant && variant !== 'solid' && `badge-${variant}`,
        size && `badge-${size}`,
      )}
      component={component}
      defaultComponent={'span' as C}
      className={className}
    />
  );
}

export type BreadcrumbProps<C extends ElementType = 'ol'> = BoxProps<C>;

export function Breadcrumb<C extends ElementType = 'ol'>({
  component,
  className,
  ...props
}: BreadcrumbProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='breadcrumb'
      component={component}
      defaultComponent={'ol' as C}
      className={className}
    />
  );
}

export type BreadcrumbItemProps<C extends ElementType = 'li'> = BoxProps<C>;

export function BreadcrumbItem<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: BreadcrumbItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='breadcrumb-item'
      component={component}
      defaultComponent={'li' as C}
      className={className}
    />
  );
}

export type BreadcrumbLinkProps<C extends ElementType = 'a'> = BoxComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function BreadcrumbLink<C extends ElementType = 'a'>({
  component,
  className,
  active,
  ...props
}: BreadcrumbLinkProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('breadcrumb-link', active && 'active')}
      component={component}
      defaultComponent={'a' as C}
      className={className}
      aria-current={active ? 'page' : props['aria-current']}
    />
  );
}

export type BreadcrumbDividerProps<C extends ElementType = 'li'> = BoxProps<C>;

export function BreadcrumbDivider<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: BreadcrumbDividerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='breadcrumb-divider'
      component={component}
      defaultComponent={'li' as C}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

export type ButtonGroupProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  {
    divider?: boolean | undefined;
    orientation?: 'horizontal' | 'vertical' | undefined;
    size?: 'sm' | 'lg' | undefined;
  }
>;

export function ButtonGroup<C extends ElementType = 'div'>({
  component,
  className,
  divider,
  orientation,
  size,
  role,
  ...props
}: ButtonGroupProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        orientation === 'vertical' ? 'btn-group-vertical' : 'btn-group',
        divider && 'btn-group-divider',
        size && `btn-group-${size}`,
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={role ?? 'group'}
    />
  );
}

export type ButtonToolbarProps<C extends ElementType = 'div'> = BoxProps<C>;

export function ButtonToolbar<C extends ElementType = 'div'>({
  component,
  className,
  role,
  ...props
}: ButtonToolbarProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='btn-toolbar'
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={role ?? 'toolbar'}
    />
  );
}

export type CardProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { variant?: 'subtle' | 'translucent' | undefined }
>;

export function Card<C extends ElementType = 'div'>({
  component,
  className,
  variant,
  ...props
}: CardProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('card', variant && `card-${variant}`)}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

type CardPartProps<C extends ElementType> = BoxProps<C>;

function CardPart<C extends ElementType>({
  baseClass,
  defaultComponent,
  component,
  className,
  ...props
}: ClassedBoxProps<C, BoxProps<C>>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={baseClass}
      component={component}
      defaultComponent={defaultComponent}
      className={className}
    />
  );
}

export type CardBodyProps<C extends ElementType = 'div'> = CardPartProps<C>;

export function CardBody<C extends ElementType = 'div'>(props: CardBodyProps<C>) {
  return <CardPart<C> {...props} baseClass='card-body' defaultComponent={'div' as C} />;
}

export type CardHeaderProps<C extends ElementType = 'div'> = CardPartProps<C>;

export function CardHeader<C extends ElementType = 'div'>(props: CardHeaderProps<C>) {
  return <CardPart<C> {...props} baseClass='card-header' defaultComponent={'div' as C} />;
}

export type CardFooterProps<C extends ElementType = 'div'> = CardPartProps<C>;

export function CardFooter<C extends ElementType = 'div'>(props: CardFooterProps<C>) {
  return <CardPart<C> {...props} baseClass='card-footer' defaultComponent={'div' as C} />;
}

export type CardTitleProps<C extends ElementType = 'h5'> = CardPartProps<C>;

export function CardTitle<C extends ElementType = 'h5'>(props: CardTitleProps<C>) {
  return <CardPart<C> {...props} baseClass='card-title' defaultComponent={'h5' as C} />;
}

export type CardSubtitleProps<C extends ElementType = 'h6'> = CardPartProps<C>;

export function CardSubtitle<C extends ElementType = 'h6'>(props: CardSubtitleProps<C>) {
  return <CardPart<C> {...props} baseClass='card-subtitle' defaultComponent={'h6' as C} />;
}

export type CardTextProps<C extends ElementType = 'p'> = CardPartProps<C>;

export function CardText<C extends ElementType = 'p'>(props: CardTextProps<C>) {
  return <CardPart<C> {...props} baseClass='card-text' defaultComponent={'p' as C} />;
}

export type CardImageProps<C extends ElementType = 'img'> = BoxComponentProps<
  C,
  { placement?: 'top' | 'bottom' | undefined }
>;

export function CardImage<C extends ElementType = 'img'>({
  component,
  className,
  placement,
  ...props
}: CardImageProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(placement ? `card-img-${placement}` : 'card-img-top')}
      component={component}
      defaultComponent={'img' as C}
      className={className}
    />
  );
}

export type CardImageOverlayProps<C extends ElementType = 'div'> = CardPartProps<C>;

export function CardImageOverlay<C extends ElementType = 'div'>(props: CardImageOverlayProps<C>) {
  return <CardPart<C> {...props} baseClass='card-img-overlay' defaultComponent={'div' as C} />;
}

export type CarouselProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  {
    auto?: boolean | undefined;
    center?: boolean | undefined;
    fade?: boolean | undefined;
    overlay?: boolean | undefined;
  }
>;

export function Carousel<C extends ElementType = 'div'>({
  component,
  className,
  auto,
  center,
  fade,
  overlay,
  ...props
}: CarouselProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'carousel',
        auto && 'carousel-auto',
        center && 'carousel-center',
        fade && 'carousel-fade',
        overlay && 'carousel-overlay',
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type CarouselInnerProps<C extends ElementType = 'div'> = BoxProps<C>;

export function CarouselInner<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: CarouselInnerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='carousel-inner'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type CarouselItemProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function CarouselItem<C extends ElementType = 'div'>({
  component,
  className,
  active,
  ...props
}: CarouselItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('carousel-item', active && 'active')}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type CarouselIndicatorsProps<C extends ElementType = 'div'> = BoxProps<C>;

export function CarouselIndicators<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: CarouselIndicatorsProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='carousel-indicators'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type CarouselIndicatorProps<C extends ElementType = 'button'> = BoxComponentProps<
  C,
  { active?: boolean | undefined; index: number; target: string }
>;

export function CarouselIndicator<C extends ElementType = 'button'>({
  component,
  className,
  active,
  index,
  target,
  type,
  ...props
}: CarouselIndicatorProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(active && 'active', className)}
      component={component}
      defaultComponent={'button' as C}
      className={undefined}
      type={type ?? 'button'}
      aria-current={active || undefined}
      aria-label={`Slide ${index + 1}`}
      data-bs-slide-to={index}
      data-bs-target={target}
    />
  );
}

export type CarouselControlProps<C extends ElementType = 'button'> = BoxComponentProps<
  C,
  {
    direction: 'next' | 'previous';
    size?: 'xs' | 'sm' | 'lg' | undefined;
    target: string;
    variant?: 'solid' | 'outline' | 'subtle' | undefined;
  }
>;

export function CarouselControl<C extends ElementType = 'button'>({
  component,
  className,
  direction,
  size,
  target,
  type,
  variant,
  ...props
}: CarouselControlProps<C>) {
  const action = direction === 'previous' ? 'prev' : 'next';
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('btn-icon', size && `btn-${size}`, variant && `btn-${variant}`)}
      component={component}
      defaultComponent={'button' as C}
      className={className}
      type={type ?? 'button'}
      aria-label={props['aria-label'] ?? (direction === 'previous' ? 'Previous' : 'Next')}
      data-bs-slide={action}
      data-bs-target={target}
    >
      <span className={`carousel-icon-${action}`} aria-hidden='true' />
    </ClassedBox>
  );
}

export type CarouselOverlayControlsProps<C extends ElementType = 'div'> = BoxProps<C>;

export function CarouselOverlayControls<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: CarouselOverlayControlsProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='carousel-overlay-controls'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type CarouselCaptionProps<C extends ElementType = 'div'> = BoxProps<C>;

export function CarouselCaption<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: CarouselCaptionProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='carousel-caption'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type CloseButtonProps<C extends ElementType = 'button'> = BoxComponentProps<
  C,
  { label?: string | undefined }
>;

export function CloseButton<C extends ElementType = 'button'>({
  component,
  className,
  label = 'Close',
  type,
  ...props
}: CloseButtonProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='btn-close'
      component={component}
      defaultComponent={'button' as C}
      className={className}
      type={type ?? 'button'}
      aria-label={props['aria-label'] ?? label}
    />
  );
}

export type CollapseProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { horizontal?: boolean | undefined; show?: boolean | undefined }
>;

export function Collapse<C extends ElementType = 'div'>({
  component,
  className,
  horizontal,
  show,
  ...props
}: CollapseProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('collapse', horizontal && 'collapse-horizontal', show && 'show')}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type DialogProps<C extends ElementType = 'dialog'> = BoxComponentProps<
  C,
  {
    fullscreen?: boolean | undefined;
    instant?: boolean | undefined;
    nonmodal?: boolean | undefined;
    scrollable?: boolean | undefined;
    size?: 'sm' | 'lg' | 'xl' | undefined;
    slide?: 'down' | 'up' | undefined;
  }
>;

export function Dialog<C extends ElementType = 'dialog'>({
  component,
  className,
  fullscreen,
  instant,
  nonmodal,
  scrollable,
  size,
  slide,
  ...props
}: DialogProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'dialog',
        fullscreen && 'dialog-fullscreen',
        instant && 'dialog-instant',
        nonmodal && 'dialog-nonmodal',
        scrollable && 'dialog-scrollable',
        size && `dialog-${size}`,
        slide && `dialog-slide-${slide}`,
      )}
      component={component}
      defaultComponent={'dialog' as C}
      className={className}
    />
  );
}

export type DialogHeaderProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DialogHeader<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DialogHeaderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='dialog-header'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type DialogTitleProps<C extends ElementType = 'h1'> = BoxProps<C>;

export function DialogTitle<C extends ElementType = 'h1'>({
  component,
  className,
  ...props
}: DialogTitleProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='dialog-title'
      component={component}
      defaultComponent={'h1' as C}
      className={className}
    />
  );
}

export type DialogBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DialogBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DialogBodyProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='dialog-body'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type DialogFooterProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DialogFooter<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DialogFooterProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='dialog-footer'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type DrawerProps<C extends ElementType = 'dialog'> = BoxComponentProps<
  C,
  {
    fullscreen?: boolean | undefined;
    instant?: boolean | undefined;
    placement?: 'start' | 'end' | 'top' | 'bottom' | undefined;
    sheet?: boolean | undefined;
    translucent?: boolean | undefined;
  }
>;

export function Drawer<C extends ElementType = 'dialog'>({
  component,
  className,
  fullscreen,
  instant,
  placement = 'end',
  sheet,
  translucent,
  ...props
}: DrawerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'drawer',
        `drawer-${placement}`,
        fullscreen && 'drawer-fullscreen',
        instant && 'drawer-instant',
        sheet && 'drawer-sheet',
        translucent && 'drawer-translucent',
      )}
      component={component}
      defaultComponent={'dialog' as C}
      className={className}
    />
  );
}

export type DrawerHeaderProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DrawerHeader<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DrawerHeaderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='drawer-header'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type DrawerTitleProps<C extends ElementType = 'h5'> = BoxProps<C>;

export function DrawerTitle<C extends ElementType = 'h5'>({
  component,
  className,
  ...props
}: DrawerTitleProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='drawer-title'
      component={component}
      defaultComponent={'h5' as C}
      className={className}
    />
  );
}

export type DrawerBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DrawerBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DrawerBodyProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='drawer-body'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type DrawerFooterProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DrawerFooter<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DrawerFooterProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='drawer-footer'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type ListGroupProps<C extends ElementType = 'ul'> = BoxComponentProps<
  C,
  {
    flush?: boolean | undefined;
    horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
    numbered?: boolean | undefined;
  }
>;

export function ListGroup<C extends ElementType = 'ul'>({
  component,
  className,
  flush,
  horizontal,
  numbered,
  ...props
}: ListGroupProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'list-group',
        flush && 'list-group-flush',
        horizontal &&
          (horizontal === true ? 'list-group-horizontal' : `list-group-horizontal-${horizontal}`),
        numbered && 'list-group-numbered',
      )}
      component={component}
      defaultComponent={'ul' as C}
      className={className}
    />
  );
}

export type ListGroupItemProps<C extends ElementType = 'li'> = BoxComponentProps<
  C,
  { action?: boolean | undefined; active?: boolean | undefined }
>;

export function ListGroupItem<C extends ElementType = 'li'>({
  component,
  className,
  action,
  active,
  ...props
}: ListGroupItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('list-group-item', action && 'list-group-item-action', active && 'active')}
      component={component}
      defaultComponent={'li' as C}
      className={className}
    />
  );
}

export type MenuProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  {
    scrollable?: boolean | undefined;
    translucent?: boolean | undefined;
    show?: boolean | undefined;
  }
>;

export function Menu<C extends ElementType = 'div'>({
  component,
  className,
  scrollable,
  show,
  translucent,
  ...props
}: MenuProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'menu',
        scrollable && 'menu-scrollable',
        show && 'show',
        translucent && 'menu-translucent',
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type MenuItemProps<C extends ElementType = 'a'> = BoxComponentProps<
  C,
  { active?: boolean | undefined; disabled?: boolean | undefined }
>;

export function MenuItem<C extends ElementType = 'a'>({
  component,
  className,
  active,
  disabled,
  ...props
}: MenuItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('menu-item', active && 'active', disabled && 'disabled')}
      component={component}
      defaultComponent={'a' as C}
      className={className}
      aria-disabled={disabled || props['aria-disabled']}
      tabIndex={disabled ? -1 : props['tabIndex']}
    />
  );
}

export type MenuDividerProps<C extends ElementType = 'hr'> = BoxProps<C>;

export function MenuDivider<C extends ElementType = 'hr'>({
  component,
  className,
  ...props
}: MenuDividerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='menu-divider'
      component={component}
      defaultComponent={'hr' as C}
      className={className}
      role={props['role'] ?? 'separator'}
    />
  );
}

export type MenuHeaderProps<C extends ElementType = 'h6'> = BoxProps<C>;

export function MenuHeader<C extends ElementType = 'h6'>({
  component,
  className,
  ...props
}: MenuHeaderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='menu-header'
      component={component}
      defaultComponent={'h6' as C}
      className={className}
    />
  );
}

export type MenuTextProps<C extends ElementType = 'span'> = BoxProps<C>;

export function MenuText<C extends ElementType = 'span'>({
  component,
  className,
  ...props
}: MenuTextProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='menu-text'
      component={component}
      defaultComponent={'span' as C}
      className={className}
    />
  );
}

export type NavProps<C extends ElementType = 'ul'> = BoxComponentProps<
  C,
  {
    fill?: boolean | undefined;
    justified?: boolean | undefined;
    orientation?: 'horizontal' | 'vertical' | undefined;
    variant?: 'tabs' | 'pills' | 'underline' | undefined;
  }
>;

export function Nav<C extends ElementType = 'ul'>({
  component,
  className,
  fill,
  justified,
  orientation,
  variant,
  ...props
}: NavProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'nav',
        variant && `nav-${variant}`,
        orientation === 'vertical' && variant === 'pills' && 'nav-pills-vertical',
        fill && 'nav-fill',
        justified && 'nav-justified',
      )}
      component={component}
      defaultComponent={'ul' as C}
      className={className}
    />
  );
}

export type NavItemProps<C extends ElementType = 'li'> = BoxProps<C>;

export function NavItem<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: NavItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav-item'
      component={component}
      defaultComponent={'li' as C}
      className={className}
    />
  );
}

export type NavLinkProps<C extends ElementType = 'a'> = BoxComponentProps<
  C,
  { active?: boolean | undefined; disabled?: boolean | undefined }
>;

export function NavLink<C extends ElementType = 'a'>({
  component,
  className,
  active,
  disabled,
  ...props
}: NavLinkProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('nav-link', active && 'active', disabled && 'disabled')}
      component={component}
      defaultComponent={'a' as C}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'page') : props['aria-current']}
      aria-disabled={disabled || props['aria-disabled']}
      tabIndex={disabled ? -1 : props['tabIndex']}
    />
  );
}

export type NavOverflowProps<C extends ElementType = 'div'> = BoxProps<C>;

export function NavOverflow<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: NavOverflowProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav-overflow'
      component={component}
      defaultComponent={'div' as C}
      className={className}
      data-bs-toggle={props['data-bs-toggle'] ?? 'nav-overflow'}
    />
  );
}

export type NavOverflowItemProps<C extends ElementType = 'li'> = BoxProps<C>;

export function NavOverflowItem<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: NavOverflowItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav-overflow-item'
      component={component}
      defaultComponent={'li' as C}
      className={className}
    />
  );
}

export type NavOverflowIconProps<C extends ElementType = 'span'> = BoxProps<C>;

export function NavOverflowIcon<C extends ElementType = 'span'>({
  component,
  className,
  ...props
}: NavOverflowIconProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav-overflow-icon'
      component={component}
      defaultComponent={'span' as C}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

export type NavbarProps<C extends ElementType = 'nav'> = BoxComponentProps<
  C,
  { expand?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined }
>;

export function Navbar<C extends ElementType = 'nav'>({
  component,
  className,
  expand,
  ...props
}: NavbarProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'navbar',
        expand === true && 'navbar-expand',
        typeof expand === 'string' && `${expand}:navbar-expand`,
      )}
      component={component}
      defaultComponent={'nav' as C}
      className={className}
    />
  );
}

export type NavbarBrandProps<C extends ElementType = 'a'> = BoxProps<C>;

export function NavbarBrand<C extends ElementType = 'a'>({
  component,
  className,
  ...props
}: NavbarBrandProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='navbar-brand'
      component={component}
      defaultComponent={'a' as C}
      className={className}
    />
  );
}

export type NavbarTogglerProps<C extends ElementType = 'button'> = BoxProps<C>;

export function NavbarToggler<C extends ElementType = 'button'>({
  component,
  className,
  type,
  children,
  ...props
}: NavbarTogglerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='navbar-toggler'
      component={component}
      defaultComponent={'button' as C}
      className={className}
      type={type ?? 'button'}
      aria-label={props['aria-label'] ?? 'Toggle navigation'}
    >
      {children ?? <span className='navbar-toggler-icon' aria-hidden='true' />}
    </ClassedBox>
  );
}

export type NavbarNavProps<C extends ElementType = 'ul'> = BoxProps<C>;

export function NavbarNav<C extends ElementType = 'ul'>({
  component,
  className,
  ...props
}: NavbarNavProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav navbar-nav'
      component={component}
      defaultComponent={'ul' as C}
      className={className}
    />
  );
}

export type NavbarTextProps<C extends ElementType = 'span'> = BoxProps<C>;

export function NavbarText<C extends ElementType = 'span'>({
  component,
  className,
  ...props
}: NavbarTextProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='navbar-text'
      component={component}
      defaultComponent={'span' as C}
      className={className}
    />
  );
}

export type PaginationProps<C extends ElementType = 'ul'> = BoxComponentProps<
  C,
  { size?: 'sm' | 'lg' | undefined }
>;

export function Pagination<C extends ElementType = 'ul'>({
  component,
  className,
  size,
  ...props
}: PaginationProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('pagination', size && `pagination-${size}`)}
      component={component}
      defaultComponent={'ul' as C}
      className={className}
    />
  );
}

export type PaginationItemProps<C extends ElementType = 'li'> = BoxComponentProps<
  C,
  { active?: boolean | undefined; disabled?: boolean | undefined }
>;

export function PaginationItem<C extends ElementType = 'li'>({
  component,
  className,
  active,
  disabled,
  ...props
}: PaginationItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('page-item', active && 'active', disabled && 'disabled')}
      component={component}
      defaultComponent={'li' as C}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'page') : props['aria-current']}
      aria-disabled={disabled || props['aria-disabled']}
    />
  );
}

export type PageLinkProps<C extends ElementType = 'a'> = BoxComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function PageLink<C extends ElementType = 'a'>({
  component,
  className,
  active,
  ...props
}: PageLinkProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('page-link', active && 'active')}
      component={component}
      defaultComponent={'a' as C}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'page') : props['aria-current']}
    />
  );
}

export type PlaceholderProps<C extends ElementType = 'span'> = BoxComponentProps<
  C,
  { size?: 'xs' | 'sm' | 'lg' | undefined }
>;

export function Placeholder<C extends ElementType = 'span'>({
  component,
  className,
  size,
  ...props
}: PlaceholderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('placeholder', size && `placeholder-${size}`)}
      component={component}
      defaultComponent={'span' as C}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

export type PlaceholderGroupProps<C extends ElementType = 'span'> = BoxComponentProps<
  C,
  { animation?: 'glow' | 'pulse' | 'wave' | undefined }
>;

export function PlaceholderGroup<C extends ElementType = 'span'>({
  component,
  className,
  animation,
  ...props
}: PlaceholderGroupProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={animation ? `placeholder-${animation}` : ''}
      component={component}
      defaultComponent={'span' as C}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

export type PopoverProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  {
    instant?: boolean | undefined;
    placement?: 'top' | 'end' | 'bottom' | 'start' | undefined;
    show?: boolean | undefined;
  }
>;

export function Popover<C extends ElementType = 'div'>({
  component,
  className,
  instant,
  placement = 'top',
  show = false,
  ...props
}: PopoverProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'popover',
        `bs-popover-${placement}`,
        instant && 'popover-instant',
        show && 'show',
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type PopoverHeaderProps<C extends ElementType = 'h3'> = BoxProps<C>;

export function PopoverHeader<C extends ElementType = 'h3'>({
  component,
  className,
  ...props
}: PopoverHeaderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='popover-header'
      component={component}
      defaultComponent={'h3' as C}
      className={className}
    />
  );
}

export type PopoverBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function PopoverBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: PopoverBodyProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='popover-body'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type ProgressProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  {
    label: string;
    max?: number | undefined;
    min?: number | undefined;
    value?: number | undefined;
  }
>;

export function Progress<C extends ElementType = 'div'>({
  component,
  className,
  label,
  max = 100,
  min = 0,
  value,
  role,
  ...props
}: ProgressProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='progress'
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={role ?? 'progressbar'}
      aria-label={label ?? props['aria-label']}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
    />
  );
}

export type ProgressBarProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  {
    animated?: boolean | undefined;
    max?: number | undefined;
    striped?: boolean | undefined;
    value?: number | undefined;
  }
>;

export function ProgressBar<C extends ElementType = 'div'>({
  component,
  className,
  animated,
  max = 100,
  striped,
  style,
  value,
  ...props
}: ProgressBarProps<C>) {
  const width = value === undefined ? undefined : `${max > 0 ? (value / max) * 100 : 0}%`;
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'progress-bar',
        striped && 'progress-bar-striped',
        animated && 'progress-bar-animated',
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
      style={{ ...style, ...(width ? { width } : {}) }}
    />
  );
}

export type ScrollspyProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { target?: string | undefined }
>;

export function Scrollspy<C extends ElementType = 'div'>({
  component,
  className,
  target,
  ...props
}: ScrollspyProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass=''
      component={component}
      defaultComponent={'div' as C}
      className={className}
      data-bs-spy={props['data-bs-spy'] ?? 'scroll'}
      data-bs-target={target ?? props['data-bs-target']}
      tabIndex={props['tabIndex'] ?? 0}
    />
  );
}

export type SpinnerProps<C extends ElementType = 'span'> = BoxComponentProps<
  C,
  {
    label?: string | undefined;
    size?: 'sm' | undefined;
    variant?: 'border' | 'grow' | 'rotate' | undefined;
  }
>;

export function Spinner<C extends ElementType = 'span'>({
  component,
  className,
  label = 'Loading',
  size,
  variant = 'border',
  ...props
}: SpinnerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(`spinner-${variant}`, size && `spinner-${size}`)}
      component={component}
      defaultComponent={'span' as C}
      className={className}
      role={props['role'] ?? 'status'}
      aria-label={props['aria-label'] ?? label}
    />
  );
}

export type StepperProps<C extends ElementType = 'ol'> = BoxComponentProps<
  C,
  {
    horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
    overflow?: boolean | undefined;
  }
>;

export function Stepper<C extends ElementType = 'ol'>({
  component,
  className,
  horizontal,
  overflow,
  ...props
}: StepperProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'stepper',
        overflow && 'stepper-overflow',
        horizontal &&
          (horizontal === true ? 'stepper-horizontal' : `${horizontal}:stepper-horizontal`),
      )}
      component={component}
      defaultComponent={'ol' as C}
      className={className}
    />
  );
}

export type StepperItemProps<C extends ElementType = 'li'> = BoxComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function StepperItem<C extends ElementType = 'li'>({
  component,
  className,
  active,
  ...props
}: StepperItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('stepper-item', active && 'active')}
      component={component}
      defaultComponent={'li' as C}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'step') : props['aria-current']}
    />
  );
}

export type TabListProps<C extends ElementType = 'ul'> = BoxProps<C>;

export function TabList<C extends ElementType = 'ul'>({
  component,
  className,
  ...props
}: TabListProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav nav-tabs'
      component={component}
      defaultComponent={'ul' as C}
      className={className}
      role={props['role'] ?? 'tablist'}
    />
  );
}

export type TabItemProps<C extends ElementType = 'li'> = BoxProps<C>;

export function TabItem<C extends ElementType = 'li'>({
  component,
  className,
  role,
  ...props
}: TabItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav-item'
      component={component}
      defaultComponent={'li' as C}
      className={className}
      role={role ?? 'presentation'}
    />
  );
}

export type TabProps<C extends ElementType = 'button'> = BoxComponentProps<
  C,
  { active?: boolean | undefined; targetId?: string | undefined }
>;

export function Tab<C extends ElementType = 'button'>({
  component,
  className,
  active,
  targetId,
  type,
  ...props
}: TabProps<C>) {
  const target = targetId ? `#${targetId}` : undefined;
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('nav-link', active && 'active')}
      component={component}
      defaultComponent={'button' as C}
      className={className}
      type={type ?? 'button'}
      role={props['role'] ?? 'tab'}
      aria-selected={active ?? false}
      aria-controls={targetId ?? props['aria-controls']}
      data-bs-toggle={props['data-bs-toggle'] ?? 'tab'}
      data-bs-target={target ?? props['data-bs-target']}
    />
  );
}

export type TabContentProps<C extends ElementType = 'div'> = BoxProps<C>;

export function TabContent<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: TabContentProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='tab-content'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type TabPaneProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function TabPane<C extends ElementType = 'div'>({
  component,
  className,
  active,
  ...props
}: TabPaneProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('tab-pane', active && 'active')}
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={props['role'] ?? 'tabpanel'}
      hidden={!active}
    />
  );
}

export type ToastProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { instant?: boolean | undefined; show?: boolean | undefined; translucent?: boolean | undefined }
>;

export function Toast<C extends ElementType = 'div'>({
  component,
  className,
  instant,
  show,
  translucent,
  role,
  ...props
}: ToastProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'toast',
        instant && 'toast-instant',
        show && 'show',
        translucent && 'toast-translucent',
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={role ?? 'alert'}
      aria-live={props['aria-live'] ?? 'assertive'}
      aria-atomic={props['aria-atomic'] ?? true}
    />
  );
}

export type ToastContainerProps<C extends ElementType = 'div'> = BoxProps<C>;

export function ToastContainer<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: ToastContainerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='toast-container'
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={props['role'] ?? 'region'}
      aria-live={props['aria-live'] ?? 'polite'}
    />
  );
}

export type ToastHeaderProps<C extends ElementType = 'div'> = BoxProps<C>;

export function ToastHeader<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: ToastHeaderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='toast-header'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type ToastBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function ToastBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: ToastBodyProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='toast-body'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type TogglerProps<C extends ElementType = 'button'> = BoxComponentProps<
  C,
  { attribute?: string | undefined; target?: string | undefined; value?: string | undefined }
>;

export function Toggler<C extends ElementType = 'button'>({
  component,
  className,
  attribute,
  target,
  value,
  type,
  ...props
}: TogglerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass=''
      component={component}
      defaultComponent={'button' as C}
      className={className}
      type={type ?? 'button'}
      data-bs-toggle={props['data-bs-toggle'] ?? 'toggler'}
      data-bs-attribute={attribute ?? props['data-bs-attribute']}
      data-bs-target={target ?? props['data-bs-target']}
      data-bs-value={value ?? props['data-bs-value']}
    />
  );
}

export type TooltipProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  {
    instant?: boolean | undefined;
    placement?: 'top' | 'end' | 'bottom' | 'start' | undefined;
    show?: boolean | undefined;
  }
>;

export function Tooltip<C extends ElementType = 'div'>({
  component,
  className,
  instant,
  placement,
  show,
  ...props
}: TooltipProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'tooltip',
        placement && `bs-tooltip-${placement}`,
        instant && 'tooltip-instant',
        show && 'show',
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type TooltipInnerProps<C extends ElementType = 'div'> = BoxProps<C>;

export function TooltipInner<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: TooltipInnerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='tooltip-inner'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}
