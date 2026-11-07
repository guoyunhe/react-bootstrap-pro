import clsx from 'clsx';
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { BiThreeDots } from 'react-bootstrap-icons-pro';

import { Box } from './box';
import type { BoxProps } from './box';
import { Menu } from './menu';
import type { MenuPlacement } from './menu';
import { NavItem, NavLink } from './nav';

type OverflowOptions = {
  moreText?: string | undefined;
  moreLabel?: string | undefined;
  moreIcon?: ReactNode;
  iconPlacement?: 'start' | 'end' | undefined;
  menuPlacement?: MenuPlacement | undefined;
  collapseBelow?: number | string | undefined;
  threshold?: number | undefined;
};
export type NavOverflowProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof OverflowOptions
> &
  OverflowOptions;

type ChildProps = {
  children?: ReactNode;
  className?: string | undefined;
  style?: CSSProperties | undefined;
  disabled?: boolean | undefined;
  'aria-disabled'?: boolean | 'true' | 'false' | undefined;
  'aria-hidden'?: boolean | 'true' | 'false' | undefined;
  href?: string | undefined;
  id?: string | undefined;
  component?: ElementType | undefined;
};
const defaultIcon = <BiThreeDots aria-hidden='true' />;

// Menu copies retain the supplied React handlers; originals remain mounted in the nav.
function menuCopy(node: ReactNode): ReactNode {
  return Children.map(node, (child) => {
    if (!isValidElement<ChildProps>(child)) return child;
    if (child.type === NavLink) {
      const disabled =
        child.props.disabled ||
        child.props['aria-disabled'] === true ||
        child.props['aria-disabled'] === 'true';
      return cloneElement(child, {
        id: undefined,
        className: clsx(child.props.className, 'menu-item'),
        ...(disabled && {
          href: undefined,
          onClick: (event: MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
          },
        }),
      });
    }
    return cloneElement(child, {
      id: undefined,
      ...(child.type === NavItem && { component: 'div' }),
      children: menuCopy(child.props.children),
    });
  });
}

export function NavOverflow<C extends ElementType = 'div'>({
  component,
  className,
  children,
  moreText = 'More',
  moreLabel,
  moreIcon = defaultIcon,
  iconPlacement = 'start',
  menuPlacement = 'bottom-end',
  collapseBelow = 0,
  threshold = 0,
  ['data-bs-toggle']: _bootstrapToggle,
  ...props
}: NavOverflowProps<C>) {
  const generatedId = useId();
  const id = typeof props['id'] === 'string' ? props['id'] : generatedId;
  const [overflow, setOverflow] = useState<number[]>([]);
  const [measured, setMeasured] = useState(false);
  const [open, setOpen] = useState(false);
  const nav = isValidElement<ChildProps>(children) ? children : null;
  const items = Children.toArray(nav?.props.children);

  useEffect(() => {
    const wrapper = document.getElementById(id);
    const navElement = wrapper?.querySelector<HTMLElement>(':scope > .nav');
    if (!wrapper || !navElement) return;
    const update = () => {
      const elements = Array.from(
        navElement.querySelectorAll<HTMLElement>(':scope > [data-rbp-overflow-index]'),
      );
      const toggle = navElement.querySelector<HTMLElement>(':scope > .nav-overflow-item');
      if (!toggle || !wrapper.clientWidth) return;
      const wrapperStyle = getComputedStyle(wrapper);
      const available =
        wrapper.clientWidth -
        (parseFloat(wrapperStyle.paddingInlineStart) || 0) -
        (parseFloat(wrapperStyle.paddingInlineEnd) || 0);
      const gap = parseFloat(getComputedStyle(navElement).columnGap) || 0;
      const widths = elements.map((element) => {
        const style = getComputedStyle(element);
        return (
          element.getBoundingClientRect().width +
          (parseFloat(style.marginInlineStart) || 0) +
          (parseFloat(style.marginInlineEnd) || 0)
        );
      });
      const limit =
        typeof collapseBelow === 'number'
          ? collapseBelow
          : parseFloat(
              getComputedStyle(document.documentElement).getPropertyValue(
                `--bs-breakpoint-${collapseBelow}`,
              ),
            ) || 0;
      const kept = elements.map((element) => element.classList.contains('nav-overflow-keep'));
      const total = widths.reduce((a, b) => a + b, 0) + gap * Math.max(0, elements.length - 1);
      let next: number[] = [];
      if (limit > 0 && available < limit) {
        next = elements.flatMap((_, index) => (kept[index] ? [] : [index]));
      } else if (total > available) {
        let used = total + toggle.getBoundingClientRect().width + gap;
        for (let index = elements.length - 1; index >= 0 && used > available; index--) {
          if (kept[index]) continue;
          next.unshift(index);
          used -= (widths[index] ?? 0) + gap;
        }
        if (elements.length - next.length < threshold && elements.length > threshold) {
          next = elements.flatMap((_, index) =>
            index >= threshold && !kept[index] ? [index] : [],
          );
        }
      }
      setOverflow((previous) =>
        previous.length === next.length && previous.every((value, index) => value === next[index])
          ? previous
          : next,
      );
      setMeasured(true);
      if (!next.length) setOpen(false);
    };
    update();
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(update);
    observer?.observe(wrapper);
    navElement
      .querySelectorAll<HTMLElement>(
        ':scope > [data-rbp-overflow-index], :scope > .nav-overflow-item',
      )
      .forEach((element) => observer?.observe(element));
    window.addEventListener('resize', update);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', update);
    };
    // Reconnect observers when the supplied list changes.
    // oxlint-disable-next-line react/exhaustive-effect-dependencies
  }, [id, collapseBelow, threshold, children, moreText, moreIcon]);

  const hiddenStyle: CSSProperties = {
    position: 'absolute',
    visibility: 'hidden',
    pointerEvents: 'none',
    width: 'max-content',
  };
  const processedItems = items.map((item, index) => {
    if (!isValidElement<ChildProps>(item)) return item;
    const hidden = overflow.includes(index);
    return cloneElement(item, {
      'data-rbp-overflow-index': index,
      'aria-hidden': hidden ? true : item.props['aria-hidden'],
      style: {
        ...item.props.style,
        ...(hidden && { ...hiddenStyle, width: item.props.style?.width ?? hiddenStyle.width }),
      },
    } as ChildProps);
  });
  const icon = <NavOverflowIcon>{moreIcon}</NavOverflowIcon>;
  const toggle = (
    <NavOverflowItem
      key='__nav-overflow-toggle'
      className='nav-item'
      style={!overflow.length ? hiddenStyle : undefined}
    >
      <Menu
        className='nav-overflow-menu'
        placement={menuPlacement}
        show={open && overflow.length > 0}
        onShowChange={setOpen}
        trigger={
          <button
            type='button'
            className='nav-link nav-overflow-toggle'
            aria-label={moreLabel ?? (moreText || 'More')}
          >
            {iconPlacement === 'start' && icon}
            {moreText && <span className='nav-overflow-text'>{moreText}</span>}
            {iconPlacement === 'end' && icon}
          </button>
        }
      >
        {overflow.map((index) => menuCopy(items[index]))}
      </Menu>
    </NavOverflowItem>
  );
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      id={id}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('nav-overflow nav-overflow-initialized', props.classNameBefore)}
      className={className}
    >
      {nav
        ? cloneElement(nav, {
            style: { ...nav.props.style, ...(!measured && { flexWrap: 'wrap' }) },
            children: [...processedItems, toggle],
          })
        : children}
    </Box>
  );
}

export type NavOverflowItemProps<C extends ElementType = 'li'> = BoxProps<C>;

export function NavOverflowItem<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: NavOverflowItemProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('li' as C)}
      classNameBefore={clsx('nav-overflow-item', props.classNameBefore)}
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx('nav-overflow-icon', props.classNameBefore)}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}
