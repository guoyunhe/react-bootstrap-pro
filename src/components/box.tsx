import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';

import type {
  Breakpoint,
  Responsive,
  Radius,
  Spacing,
  NegativeMargin,
  Width,
  Height,
} from './types';

type NativeProp<
  C extends ElementType,
  K extends PropertyKey,
> = K extends keyof ComponentPropsWithoutRef<C> ? ComponentPropsWithoutRef<C>[K] : never;

type OwnProps<C extends ElementType> = {
  theme?: Theme | undefined;
  themeStyle?: ThemeStyle | undefined;
  themeBorder?: boolean | undefined;
  themeReset?: boolean | undefined;
  focusRing?: boolean | undefined;
  hoverLift?: boolean | undefined;
  colorScheme?: ColorScheme | undefined;
  fg?: Fg | undefined;
  fgEmphasis?: Theme | undefined;
  fgContrast?: Theme | undefined;
  fgOpacity?: Opacity | undefined;
  bg?: Bg | undefined;
  bgSubtle?: Theme | undefined;
  bgMuted?: Theme | undefined;
  bgOpacity?: Opacity | undefined;
  gradient?: boolean | undefined;
  aspectRatio?: AspectRatio | undefined;
  containerQuery?: ContainerQuery | undefined;
  display?: Responsive<Display> | undefined;
  alignContent?: Responsive<AlignContent> | undefined;
  alignItems?: Responsive<AlignItems> | undefined;
  alignSelf?: Responsive<AlignSelf> | undefined;
  verticalAlign?: VerticalAlign | undefined;
  border?: BorderToggle | undefined;
  borderTop?: BorderToggle | undefined;
  borderEnd?: BorderToggle | undefined;
  borderBottom?: BorderToggle | undefined;
  borderStart?: BorderToggle | undefined;
  borderX?: BorderToggle | undefined;
  borderY?: BorderToggle | undefined;
  borderColor?: BorderColor | undefined;
  borderSubtle?: Theme | undefined;
  borderWidth?: BorderWidth | undefined;
  borderOpacity?: Opacity | undefined;
  rounded?: boolean | Radius | undefined;
  roundedSize?: Radius | undefined;
  roundedTop?: boolean | Radius | undefined;
  roundedEnd?: boolean | Radius | undefined;
  roundedBottom?: boolean | Radius | undefined;
  roundedStart?: boolean | Radius | undefined;
  float?: Responsive<Float> | undefined;
  objectFit?: Responsive<ObjectFit> | undefined;
  overflow?: Overflow | undefined;
  overflowX?: Overflow | undefined;
  overflowY?: Overflow | undefined;
  fixedTop?: boolean | undefined;
  fixedBottom?: boolean | undefined;
  stickyTop?: Responsive<boolean> | undefined;
  stickyBottom?: Responsive<boolean> | undefined;
  position?: Position | undefined;
  top?: PositionOffset | undefined;
  bottom?: PositionOffset | undefined;
  start?: PositionOffset | undefined;
  end?: PositionOffset | undefined;
  translateMiddle?: boolean | 'x' | 'y' | undefined;
  visibility?: Visibility | undefined;
  z?: ZIndex | undefined;
  flex?: Responsive<Flex> | undefined;
  flexDirection?: Responsive<FlexDirection> | undefined;
  flexGrow?: Responsive<FlexGrowShrink> | undefined;
  flexShrink?: Responsive<FlexGrowShrink> | undefined;
  flexWrap?: Responsive<FlexWrap> | undefined;
  justifyContent?: Responsive<JustifyContent> | undefined;
  justifyItems?: Responsive<JustifyItems> | undefined;
  justifySelf?: Responsive<JustifySelf> | undefined;
  placeItems?: Responsive<JustifyItems> | undefined;
  gridColumns?: Responsive<GridColumns> | undefined;
  gridColumn?: Responsive<GridColumn> | undefined;
  gridAutoFlow?: Responsive<GridAutoFlow> | undefined;
  order?: Responsive<Order> | undefined;
  m?: Responsive<Margin> | undefined;
  mx?: Responsive<Margin> | undefined;
  my?: Responsive<Margin> | undefined;
  mt?: Responsive<Margin> | undefined;
  me?: Responsive<NegativeMargin> | undefined;
  mb?: Responsive<Margin> | undefined;
  ms?: Responsive<NegativeMargin> | undefined;
  p?: Responsive<Spacing> | undefined;
  px?: Responsive<Spacing> | undefined;
  py?: Responsive<Spacing> | undefined;
  pt?: Responsive<Spacing> | undefined;
  pe?: Responsive<Spacing> | undefined;
  pb?: Responsive<Spacing> | undefined;
  ps?: Responsive<Spacing> | undefined;
  gap?: Responsive<Spacing> | undefined;
  rowGap?: Responsive<Spacing> | undefined;
  columnGap?: Responsive<Spacing> | undefined;
  spaceX?: Responsive<Spacing> | undefined;
  spaceY?: Responsive<Spacing> | undefined;
  divideX?: Responsive<Divide> | undefined;
  divideY?: Responsive<Divide> | undefined;
  width?: Width | NativeProp<C, 'width'> | undefined;
  maxWidth?: 100 | undefined;
  minWidth?: 0 | 100 | undefined;
  viewportWidth?: 100 | undefined;
  minViewportWidth?: 100 | undefined;
  dynamicViewportWidth?: 100 | undefined;
  minDynamicViewportWidth?: 100 | undefined;
  height?: Height | NativeProp<C, 'height'> | undefined;
  maxHeight?: 100 | undefined;
  minHeight?: 0 | 100 | undefined;
  viewportHeight?: 100 | undefined;
  minViewportHeight?: 100 | undefined;
  dynamicViewportHeight?: 100 | undefined;
  minDynamicViewportHeight?: 100 | undefined;
  fontFamily?: FontFamily | undefined;
  fontSize?: FontSize | undefined;
  textSize?: FontSize | undefined;
  fontStyle?: FontStyle | undefined;
  fontWeight?: FontWeight | undefined;
  lineHeight?: LineHeight | undefined;
  textAlign?: Responsive<TextAlign> | undefined;
  textDecoration?: TextDecoration | undefined;
  textTransform?: TextTransform | undefined;
  textTruncate?: boolean | undefined;
  textWrap?: TextWrap | undefined;
  textBreak?: boolean | undefined;
  linkOpacity?: Opacity | undefined;
  hoverLinkOpacity?: Opacity | undefined;
  underlineOffset?: UnderlineOffset | undefined;
  hoverUnderlineOffset?: UnderlineOffset | undefined;
  underlineColor?: UnderlineColor | undefined;
  underlineOpacity?: Opacity | undefined;
  hoverUnderlineOpacity?: Opacity | undefined;
  underlineThickness?: UnderlineThickness | undefined;
  hoverUnderlineThickness?: UnderlineThickness | undefined;
  opacity?: OpacityStep | undefined;
  shadow?: boolean | Shadow | undefined;
  shadowColor?: ShadowColor | undefined;
  shadowOpacity?: Opacity | undefined;
  pointerEvents?: PointerEvents | undefined;
  userSelect?: UserSelect | undefined;
  transition?: 'none' | undefined;
  animation?: Animation | undefined;
};

export type BoxProps<C extends ElementType = 'div'> = OwnProps<C> & {
  component?: C;
  className?: string;
} & Omit<ComponentPropsWithRef<C>, keyof OwnProps<C> | 'className' | 'component'>;

const breakpoints: readonly Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
const boxWidths: readonly Width[] = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  25,
  50,
  75,
  100,
  'auto',
  'min',
  'max',
  'fit',
];
const boxHeights: readonly Height[] = [25, 50, 75, 100, 'auto', 'min', 'max', 'fit'];

function isBoxWidth(value: unknown): value is Width {
  return boxWidths.some((boxWidth) => boxWidth === value);
}

function isBoxHeight(value: unknown): value is Height {
  return boxHeights.some((boxHeight) => boxHeight === value);
}

function getResponsiveClasses<T extends string | number | boolean>(
  utility: string,
  value: Responsive<T> | undefined,
  formatValue: (value: T) => string = String,
) {
  if (value === undefined) {
    return [];
  }

  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    const formattedValue = formatValue(value);
    return [`${utility}${formattedValue ? `-${formattedValue}` : ''}`];
  }

  return breakpoints.flatMap((breakpoint) => {
    const breakpointValue = value[breakpoint];
    if (breakpointValue === undefined) {
      return [];
    }

    const prefix = breakpoint === 'xs' ? '' : `${breakpoint}:`;
    const formattedValue = formatValue(breakpointValue);
    return [`${prefix}${utility}${formattedValue ? `-${formattedValue}` : ''}`];
  });
}

function getResponsiveBooleanClasses(utility: string, value: Responsive<boolean> | undefined) {
  if (value === undefined) {
    return [];
  }

  if (typeof value === 'boolean') {
    return value ? [utility] : [];
  }

  return breakpoints.flatMap((breakpoint) => {
    if (!value[breakpoint]) {
      return [];
    }

    const prefix = breakpoint === 'xs' ? '' : `${breakpoint}:`;
    return [`${prefix}${utility}`];
  });
}

function formatSpacing(value: NegativeMargin | Spacing) {
  if (value === -1) {
    return 'n1';
  }
  if (value === -2) {
    return 'n2';
  }
  return String(value);
}

function getBooleanUtilityClass(
  utility: string,
  value: boolean | number | undefined,
  defaultValue?: string,
) {
  if (value === undefined || value === false) {
    return;
  }
  return value === true ? (defaultValue ?? utility) : `${utility}-${value}`;
}

function getRadiusClass(utility: string, value: boolean | Radius | undefined) {
  if (value === undefined || value === false) {
    return;
  }
  return value === true ? utility : `${utility}-${value}`;
}

export function Box<C extends ElementType = 'div'>({
  component,
  theme,
  themeStyle,
  themeBorder,
  themeReset,
  focusRing,
  hoverLift,
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
  alignContent,
  alignItems,
  alignSelf,
  verticalAlign,
  border,
  borderTop,
  borderEnd,
  borderBottom,
  borderStart,
  borderX,
  borderY,
  borderColor,
  borderSubtle,
  borderWidth,
  borderOpacity,
  rounded,
  roundedSize,
  roundedTop,
  roundedEnd,
  roundedBottom,
  roundedStart,
  float,
  objectFit,
  overflow,
  overflowX,
  overflowY,
  fixedTop,
  fixedBottom,
  stickyTop,
  stickyBottom,
  position,
  top,
  bottom,
  start,
  end,
  translateMiddle,
  visibility,
  z,
  flex,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  justifyItems,
  justifySelf,
  placeItems,
  gridColumns,
  gridColumn,
  gridAutoFlow,
  order,
  m,
  mx,
  my,
  mt,
  me,
  mb,
  ms,
  p,
  px,
  py,
  pt,
  pe,
  pb,
  ps,
  gap,
  rowGap,
  columnGap,
  spaceX,
  spaceY,
  divideX,
  divideY,
  width,
  maxWidth,
  minWidth,
  viewportWidth,
  minViewportWidth,
  dynamicViewportWidth,
  minDynamicViewportWidth,
  height,
  maxHeight,
  minHeight,
  viewportHeight,
  minViewportHeight,
  dynamicViewportHeight,
  minDynamicViewportHeight,
  fontFamily,
  fontSize,
  textSize,
  fontStyle,
  fontWeight,
  lineHeight,
  textAlign,
  textDecoration,
  textTransform,
  textTruncate,
  textWrap,
  textBreak,
  linkOpacity,
  hoverLinkOpacity,
  underlineOffset,
  hoverUnderlineOffset,
  underlineColor,
  underlineOpacity,
  hoverUnderlineOpacity,
  underlineThickness,
  hoverUnderlineThickness,
  opacity,
  shadow,
  shadowColor,
  shadowOpacity,
  pointerEvents,
  userSelect,
  transition,
  animation,
  style,
  className,
  ...props
}: BoxProps<C>) {
  const Component = (component ?? 'div') as ElementType;

  const classes = clsx(
    theme && `theme-${theme}`,
    themeStyle && `theme-${themeStyle}`,
    themeBorder && 'theme-border',
    themeReset && 'theme-reset',
    focusRing && 'focus-ring',
    hoverLift && 'hover-lift',
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
    getResponsiveClasses('align-content', alignContent),
    getResponsiveClasses('align-items', alignItems),
    getResponsiveClasses('align-self', alignSelf),
    verticalAlign && `align-${verticalAlign}`,
    getBooleanUtilityClass('border', border),
    getBooleanUtilityClass('border-top', borderTop),
    getBooleanUtilityClass('border-end', borderEnd),
    getBooleanUtilityClass('border-bottom', borderBottom),
    getBooleanUtilityClass('border-start', borderStart),
    getBooleanUtilityClass('border-x', borderX),
    getBooleanUtilityClass('border-y', borderY),
    borderColor && `border-${borderColor}`,
    borderSubtle && `border-subtle-${borderSubtle}`,
    borderWidth !== undefined && `border-${borderWidth}`,
    borderOpacity && `border-${borderOpacity}`,
    getRadiusClass('rounded', rounded),
    roundedSize !== undefined && `rounded-size-${roundedSize}`,
    getRadiusClass('rounded-top', roundedTop),
    getRadiusClass('rounded-end', roundedEnd),
    getRadiusClass('rounded-bottom', roundedBottom),
    getRadiusClass('rounded-start', roundedStart),
    getResponsiveClasses('float', float),
    getResponsiveClasses('object-fit', objectFit),
    overflow && `overflow-${overflow}`,
    overflowX && `overflow-x-${overflowX}`,
    overflowY && `overflow-y-${overflowY}`,
    fixedTop && 'fixed-top',
    fixedBottom && 'fixed-bottom',
    getResponsiveBooleanClasses('sticky-top', stickyTop),
    getResponsiveBooleanClasses('sticky-bottom', stickyBottom),
    position && `position-${position}`,
    top !== undefined && `top-${top}`,
    bottom !== undefined && `bottom-${bottom}`,
    start !== undefined && `start-${start}`,
    end !== undefined && `end-${end}`,
    translateMiddle && `translate-middle${translateMiddle === true ? '' : `-${translateMiddle}`}`,
    visibility,
    typeof z === 'string' && `z-${z}`,
    getResponsiveClasses('flex', flex),
    getResponsiveClasses('flex', flexDirection),
    getResponsiveClasses('flex', flexGrow, (value) => `grow-${value}`),
    getResponsiveClasses('flex', flexShrink, (value) => `shrink-${value}`),
    getResponsiveClasses('flex', flexWrap),
    getResponsiveClasses('justify-content', justifyContent),
    getResponsiveClasses('justify-items', justifyItems),
    getResponsiveClasses('justify-self', justifySelf),
    getResponsiveClasses('place-items', placeItems),
    getResponsiveClasses('grid-cols', gridColumns),
    getResponsiveClasses('grid-cols', gridColumn),
    getResponsiveClasses('grid-auto-flow', gridAutoFlow),
    getResponsiveClasses('order', order),
    getResponsiveClasses('m', m, formatSpacing),
    getResponsiveClasses('mx', mx, formatSpacing),
    getResponsiveClasses('my', my, formatSpacing),
    getResponsiveClasses('mt', mt, formatSpacing),
    getResponsiveClasses('me', me, formatSpacing),
    getResponsiveClasses('mb', mb, formatSpacing),
    getResponsiveClasses('ms', ms, formatSpacing),
    getResponsiveClasses('p', p),
    getResponsiveClasses('px', px),
    getResponsiveClasses('py', py),
    getResponsiveClasses('pt', pt),
    getResponsiveClasses('pe', pe),
    getResponsiveClasses('pb', pb),
    getResponsiveClasses('ps', ps),
    getResponsiveClasses('gap', gap),
    getResponsiveClasses('row-gap', rowGap),
    getResponsiveClasses('column-gap', columnGap),
    getResponsiveClasses('space-x', spaceX),
    getResponsiveClasses('space-y', spaceY),
    getResponsiveClasses('divide-x', divideX, (value) => (value ? '' : '0')),
    getResponsiveClasses('divide-y', divideY, (value) => (value ? '' : '0')),
    isBoxWidth(width) && `w-${width}`,
    maxWidth !== undefined && `max-w-${maxWidth}`,
    minWidth !== undefined && `min-w-${minWidth}`,
    viewportWidth !== undefined && `vw-${viewportWidth}`,
    minViewportWidth !== undefined && `min-vw-${minViewportWidth}`,
    dynamicViewportWidth !== undefined && `dvw-${dynamicViewportWidth}`,
    minDynamicViewportWidth !== undefined && `min-dvw-${minDynamicViewportWidth}`,
    isBoxHeight(height) && `h-${height}`,
    maxHeight !== undefined && `max-h-${maxHeight}`,
    minHeight !== undefined && `min-h-${minHeight}`,
    viewportHeight !== undefined && `vh-${viewportHeight}`,
    minViewportHeight !== undefined && `min-vh-${minViewportHeight}`,
    dynamicViewportHeight !== undefined && `dvh-${dynamicViewportHeight}`,
    minDynamicViewportHeight !== undefined && `min-dvh-${minDynamicViewportHeight}`,
    fontFamily && `font-${fontFamily}`,
    fontSize && `fs-${fontSize}`,
    textSize && `text-${textSize}`,
    fontStyle && `fst-${fontStyle}`,
    fontWeight && `fw-${fontWeight}`,
    lineHeight && `lh-${lineHeight}`,
    getResponsiveClasses('text', textAlign),
    textDecoration && `text-decoration-${textDecoration}`,
    textTransform && `text-${textTransform}`,
    textTruncate && 'text-truncate',
    textWrap && `text-${textWrap}`,
    textBreak && 'text-break',
    linkOpacity && `link-${linkOpacity}`,
    hoverLinkOpacity && `hover:link-${hoverLinkOpacity}`,
    underlineOffset && `underline-offset-${underlineOffset}`,
    hoverUnderlineOffset && `hover:underline-offset-${hoverUnderlineOffset}`,
    underlineColor && `underline-${underlineColor}`,
    underlineOpacity && `underline-${underlineOpacity}`,
    hoverUnderlineOpacity && `hover:underline-${hoverUnderlineOpacity}`,
    underlineThickness && `underline-thickness-${underlineThickness}`,
    hoverUnderlineThickness && `hover:underline-thickness-${hoverUnderlineThickness}`,
    opacity !== undefined && `opacity-${opacity}`,
    shadow === true ? 'shadow' : shadow && `shadow-${shadow}`,
    shadowColor && `shadow-${shadowColor}`,
    shadowOpacity && `shadow-opacity-${shadowOpacity}`,
    pointerEvents && `pe-${pointerEvents}`,
    userSelect && `user-select-${userSelect}`,
    transition && `transition-${transition}`,
    animation && `animation-${animation}`,
    className,
  );

  return (
    <Component
      {...props}
      style={typeof z === 'number' ? { ...style, zIndex: z } : style}
      width={width !== undefined && !isBoxWidth(width) ? width : undefined}
      height={height !== undefined && !isBoxHeight(height) ? height : undefined}
      className={classes || undefined}
    />
  );
}
