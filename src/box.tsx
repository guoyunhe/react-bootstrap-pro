import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

export type BoxTheme =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'inverse';

export type BoxFg = BoxTheme | 'body' | '1' | '2' | '3' | '4' | 'bg' | 'white' | 'black' | 'reset';

export type BoxBg =
  | BoxTheme
  | 'body'
  | '1'
  | '2'
  | '3'
  | '4'
  | 'fg'
  | 'white'
  | 'black'
  | 'transparent';

export type BoxOpacity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export type BoxColorScheme = 'light' | 'dark' | 'auto';

export type BoxThemeStyle = 'contrast' | 'subtle' | 'muted';

export type BoxBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type BoxResponsive<T> = T | Partial<Record<BoxBreakpoint, T>>;

export type BoxAspectRatio = 'auto' | '1x1' | '4x3' | '16x9' | '21x9';

export type BoxContainerQuery = 'inline' | 'size';

export type BoxDisplay =
  | 'inline'
  | 'inline-block'
  | 'block'
  | 'grid'
  | 'inline-grid'
  | 'table'
  | 'table-row'
  | 'table-cell'
  | 'flex'
  | 'inline-flex'
  | 'contents'
  | 'flow-root'
  | 'none';

export type BoxFloat = 'start' | 'end' | 'none';

export type BoxObjectFit = 'contain' | 'cover' | 'fill' | 'scale' | 'none';

export type BoxOverflow = 'auto' | 'hidden' | 'visible' | 'scroll';

export type BoxPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export type BoxPositionOffset = 0 | 50 | 100;

export type BoxVisibility = 'visible' | 'invisible';

export type BoxZIndex =
  | -1
  | 0
  | 1
  | 2
  | 3
  | 'menu'
  | 'sticky'
  | 'fixed'
  | 'drawer'
  | 'dialog'
  | 'popover'
  | 'tooltip'
  | 'toast';

type BoxOwnProps = {
  theme?: BoxTheme | undefined;
  themeStyle?: BoxThemeStyle | undefined;
  themeBorder?: boolean | undefined;
  themeReset?: boolean | undefined;
  colorScheme?: BoxColorScheme | undefined;
  fg?: BoxFg | undefined;
  fgEmphasis?: BoxTheme | undefined;
  fgContrast?: BoxTheme | undefined;
  fgOpacity?: BoxOpacity | undefined;
  bg?: BoxBg | undefined;
  bgSubtle?: BoxTheme | undefined;
  bgMuted?: BoxTheme | undefined;
  bgOpacity?: BoxOpacity | undefined;
  gradient?: boolean | undefined;
  aspectRatio?: BoxAspectRatio | undefined;
  containerQuery?: BoxContainerQuery | undefined;
  display?: BoxResponsive<BoxDisplay> | undefined;
  float?: BoxResponsive<BoxFloat> | undefined;
  objectFit?: BoxResponsive<BoxObjectFit> | undefined;
  overflow?: BoxOverflow | undefined;
  overflowX?: BoxOverflow | undefined;
  overflowY?: BoxOverflow | undefined;
  position?: BoxPosition | undefined;
  top?: BoxPositionOffset | undefined;
  bottom?: BoxPositionOffset | undefined;
  start?: BoxPositionOffset | undefined;
  end?: BoxPositionOffset | undefined;
  translateMiddle?: boolean | 'x' | 'y' | undefined;
  visibility?: BoxVisibility | undefined;
  zIndex?: BoxZIndex | undefined;
};

const breakpoints: readonly BoxBreakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

function getResponsiveClasses<T extends string>(
  utility: string,
  value: BoxResponsive<T> | undefined,
) {
  if (value === undefined) {
    return [];
  }

  if (typeof value !== 'object') {
    return [`${utility}-${value}`];
  }

  return breakpoints.flatMap((breakpoint) => {
    const breakpointValue = value[breakpoint];
    if (breakpointValue === undefined) {
      return [];
    }

    const prefix = breakpoint === 'xs' ? '' : `${breakpoint}:`;
    return [`${prefix}${utility}-${breakpointValue}`];
  });
}

export type BoxProps<C extends ElementType = 'div'> = BoxOwnProps & {
  component?: C | undefined;
  className?: string | undefined;
} & Omit<ComponentPropsWithoutRef<C>, keyof BoxOwnProps | 'className' | 'component'>;

export function Box<C extends ElementType = 'div'>({
  component,
  theme,
  themeStyle,
  themeBorder,
  themeReset,
  colorScheme,
  fg,
  fgEmphasis,
  fgContrast,
  fgOpacity,
  bg,
  bgSubtle,
  bgMuted,
  bgOpacity,
  gradient,
  aspectRatio,
  containerQuery,
  display,
  float,
  objectFit,
  overflow,
  overflowX,
  overflowY,
  position,
  top,
  bottom,
  start,
  end,
  translateMiddle,
  visibility,
  zIndex,
  className,
  ...props
}: BoxProps<C>) {
  const Component = (component ?? 'div') as ElementType;

  const classes = clsx(
    theme && `theme-${theme}`,
    themeStyle && `theme-${themeStyle}`,
    themeBorder && 'theme-border',
    themeReset && 'theme-reset',
    colorScheme && `color-scheme-${colorScheme}`,
    fg && `fg-${fg}`,
    fgEmphasis && `fg-emphasis-${fgEmphasis}`,
    fgContrast && `fg-contrast-${fgContrast}`,
    fgOpacity && `fg-${fgOpacity}`,
    bg && `bg-${bg}`,
    bgSubtle && `bg-subtle-${bgSubtle}`,
    bgMuted && `bg-muted-${bgMuted}`,
    bgOpacity && `bg-${bgOpacity}`,
    gradient && 'bg-gradient',
    aspectRatio && `ratio-${aspectRatio}`,
    containerQuery && `contains-${containerQuery}`,
    getResponsiveClasses('d', display),
    getResponsiveClasses('float', float),
    getResponsiveClasses('object-fit', objectFit),
    overflow && `overflow-${overflow}`,
    overflowX && `overflow-x-${overflowX}`,
    overflowY && `overflow-y-${overflowY}`,
    position && `position-${position}`,
    top !== undefined && `top-${top}`,
    bottom !== undefined && `bottom-${bottom}`,
    start !== undefined && `start-${start}`,
    end !== undefined && `end-${end}`,
    translateMiddle && `translate-middle${translateMiddle === true ? '' : `-${translateMiddle}`}`,
    visibility,
    zIndex !== undefined && `z-${zIndex === -1 ? 'n1' : zIndex}`,
    className,
  );

  const componentProps = classes ? { ...props, className: classes } : props;

  return <Component {...componentProps} />;
}
