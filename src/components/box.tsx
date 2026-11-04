import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';

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

export type BoxAlignContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';

export type BoxAlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type BoxAlignSelf = 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type BoxVerticalAlign =
  | 'baseline'
  | 'top'
  | 'middle'
  | 'bottom'
  | 'text-bottom'
  | 'text-top';

export type BoxBorderColor =
  | BoxTheme
  | 'bg'
  | 'body'
  | 'muted'
  | 'subtle'
  | 'emphasized'
  | 'white'
  | 'black';

export type BoxBorderWidth = 'keyline' | 0 | 1 | 2 | 3 | 4 | 5;

export type BoxBorderToggle = boolean | 0;

export type BoxRadius = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'circle' | 'pill';

export type BoxDivide = true | 0;

export type BoxFlex = 'fill';

export type BoxFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type BoxFlexGrowShrink = 0 | 1;

export type BoxFlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type BoxJustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type BoxJustifyItems = 'start' | 'end' | 'center' | 'stretch';

export type BoxJustifySelf = 'start' | 'end' | 'center';

export type BoxGridColumns = 1 | 2 | 3 | 4 | 6 | 'subgrid';

export type BoxGridColumn = 'fill';

export type BoxGridAutoFlow = 'row' | 'column' | 'dense';

export type BoxOrder = 'first' | 0 | 1 | 2 | 3 | 4 | 5 | 'last';

export type BoxSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type BoxMargin = BoxSpacing | 'auto';

export type BoxNegativeMargin = BoxMargin | -1 | -2;

export type BoxWidth =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 25
  | 50
  | 75
  | 100
  | 'auto'
  | 'min'
  | 'max'
  | 'fit';

export type BoxHeight = 25 | 50 | 75 | 100 | 'auto' | 'min' | 'max' | 'fit';

export type BoxFontFamily = 'monospace' | 'body';

export type BoxFontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

export type BoxFontStyle = 'italic' | 'normal';

export type BoxFontWeight =
  | 'lighter'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'bolder';

export type BoxLineHeight = 1 | 'sm' | 'md' | 'lg';

export type BoxTextAlign = 'start' | 'end' | 'center';

export type BoxTextDecoration = 'none' | 'underline' | 'line-through';

export type BoxTextTransform = 'lowercase' | 'uppercase' | 'capitalize';

export type BoxTextWrap = 'wrap' | 'nowrap' | 'balance' | 'pretty';

export type BoxUnderlineColor = BoxTheme;

export type BoxUnderlineOffset = 1 | 2 | 3;

export type BoxUnderlineThickness = 1 | 2 | 3 | 4 | 5;

export type BoxOpacityStep = 0 | 25 | 50 | 75 | 100;

export type BoxShadow = 'xs' | 'sm' | 'lg' | 'xl' | 'none';

export type BoxShadowColor = BoxTheme | 'current' | 'black' | 'white';

export type BoxPointerEvents = 'none' | 'auto';

export type BoxUserSelect = 'all' | 'auto' | 'text' | 'none';

export type BoxAnimation = 'none' | 'shake' | 'pop';

type NativeProp<
  C extends ElementType,
  K extends PropertyKey,
> = K extends keyof ComponentPropsWithoutRef<C> ? ComponentPropsWithoutRef<C>[K] : never;

type BoxOwnProps<C extends ElementType> = {
  theme?: BoxTheme | undefined;
  themeStyle?: BoxThemeStyle | undefined;
  themeBorder?: boolean | undefined;
  themeReset?: boolean | undefined;
  focusRing?: boolean | undefined;
  hoverLift?: boolean | undefined;
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
  alignContent?: BoxResponsive<BoxAlignContent> | undefined;
  alignItems?: BoxResponsive<BoxAlignItems> | undefined;
  alignSelf?: BoxResponsive<BoxAlignSelf> | undefined;
  verticalAlign?: BoxVerticalAlign | undefined;
  border?: BoxBorderToggle | undefined;
  borderTop?: BoxBorderToggle | undefined;
  borderEnd?: BoxBorderToggle | undefined;
  borderBottom?: BoxBorderToggle | undefined;
  borderStart?: BoxBorderToggle | undefined;
  borderX?: BoxBorderToggle | undefined;
  borderY?: BoxBorderToggle | undefined;
  borderColor?: BoxBorderColor | undefined;
  borderSubtle?: BoxTheme | undefined;
  borderWidth?: BoxBorderWidth | undefined;
  borderOpacity?: BoxOpacity | undefined;
  rounded?: boolean | BoxRadius | undefined;
  roundedSize?: BoxRadius | undefined;
  roundedTop?: boolean | BoxRadius | undefined;
  roundedEnd?: boolean | BoxRadius | undefined;
  roundedBottom?: boolean | BoxRadius | undefined;
  roundedStart?: boolean | BoxRadius | undefined;
  float?: BoxResponsive<BoxFloat> | undefined;
  objectFit?: BoxResponsive<BoxObjectFit> | undefined;
  overflow?: BoxOverflow | undefined;
  overflowX?: BoxOverflow | undefined;
  overflowY?: BoxOverflow | undefined;
  fixedTop?: boolean | undefined;
  fixedBottom?: boolean | undefined;
  stickyTop?: BoxResponsive<boolean> | undefined;
  stickyBottom?: BoxResponsive<boolean> | undefined;
  position?: BoxPosition | undefined;
  top?: BoxPositionOffset | undefined;
  bottom?: BoxPositionOffset | undefined;
  start?: BoxPositionOffset | undefined;
  end?: BoxPositionOffset | undefined;
  translateMiddle?: boolean | 'x' | 'y' | undefined;
  visibility?: BoxVisibility | undefined;
  zIndex?: BoxZIndex | undefined;
  flex?: BoxResponsive<BoxFlex> | undefined;
  flexDirection?: BoxResponsive<BoxFlexDirection> | undefined;
  flexGrow?: BoxResponsive<BoxFlexGrowShrink> | undefined;
  flexShrink?: BoxResponsive<BoxFlexGrowShrink> | undefined;
  flexWrap?: BoxResponsive<BoxFlexWrap> | undefined;
  justifyContent?: BoxResponsive<BoxJustifyContent> | undefined;
  justifyItems?: BoxResponsive<BoxJustifyItems> | undefined;
  justifySelf?: BoxResponsive<BoxJustifySelf> | undefined;
  placeItems?: BoxResponsive<BoxJustifyItems> | undefined;
  gridColumns?: BoxResponsive<BoxGridColumns> | undefined;
  gridColumn?: BoxResponsive<BoxGridColumn> | undefined;
  gridAutoFlow?: BoxResponsive<BoxGridAutoFlow> | undefined;
  order?: BoxResponsive<BoxOrder> | undefined;
  margin?: BoxResponsive<BoxMargin> | undefined;
  marginX?: BoxResponsive<BoxMargin> | undefined;
  marginY?: BoxResponsive<BoxMargin> | undefined;
  marginTop?: BoxResponsive<BoxMargin> | undefined;
  marginEnd?: BoxResponsive<BoxNegativeMargin> | undefined;
  marginBottom?: BoxResponsive<BoxMargin> | undefined;
  marginStart?: BoxResponsive<BoxNegativeMargin> | undefined;
  padding?: BoxResponsive<BoxSpacing> | undefined;
  paddingX?: BoxResponsive<BoxSpacing> | undefined;
  paddingY?: BoxResponsive<BoxSpacing> | undefined;
  paddingTop?: BoxResponsive<BoxSpacing> | undefined;
  paddingEnd?: BoxResponsive<BoxSpacing> | undefined;
  paddingBottom?: BoxResponsive<BoxSpacing> | undefined;
  paddingStart?: BoxResponsive<BoxSpacing> | undefined;
  gap?: BoxResponsive<BoxSpacing> | undefined;
  rowGap?: BoxResponsive<BoxSpacing> | undefined;
  columnGap?: BoxResponsive<BoxSpacing> | undefined;
  spaceX?: BoxResponsive<BoxSpacing> | undefined;
  spaceY?: BoxResponsive<BoxSpacing> | undefined;
  divideX?: BoxResponsive<BoxDivide> | undefined;
  divideY?: BoxResponsive<BoxDivide> | undefined;
  width?: BoxWidth | NativeProp<C, 'width'> | undefined;
  maxWidth?: 100 | undefined;
  minWidth?: 0 | 100 | undefined;
  viewportWidth?: 100 | undefined;
  minViewportWidth?: 100 | undefined;
  dynamicViewportWidth?: 100 | undefined;
  minDynamicViewportWidth?: 100 | undefined;
  height?: BoxHeight | NativeProp<C, 'height'> | undefined;
  maxHeight?: 100 | undefined;
  minHeight?: 0 | 100 | undefined;
  viewportHeight?: 100 | undefined;
  minViewportHeight?: 100 | undefined;
  dynamicViewportHeight?: 100 | undefined;
  minDynamicViewportHeight?: 100 | undefined;
  fontFamily?: BoxFontFamily | undefined;
  fontSize?: BoxFontSize | undefined;
  textSize?: BoxFontSize | undefined;
  fontStyle?: BoxFontStyle | undefined;
  fontWeight?: BoxFontWeight | undefined;
  lineHeight?: BoxLineHeight | undefined;
  textAlign?: BoxResponsive<BoxTextAlign> | undefined;
  textDecoration?: BoxTextDecoration | undefined;
  textTransform?: BoxTextTransform | undefined;
  textTruncate?: boolean | undefined;
  textWrap?: BoxTextWrap | undefined;
  textBreak?: boolean | undefined;
  linkOpacity?: BoxOpacity | undefined;
  hoverLinkOpacity?: BoxOpacity | undefined;
  underlineOffset?: BoxUnderlineOffset | undefined;
  hoverUnderlineOffset?: BoxUnderlineOffset | undefined;
  underlineColor?: BoxUnderlineColor | undefined;
  underlineOpacity?: BoxOpacity | undefined;
  hoverUnderlineOpacity?: BoxOpacity | undefined;
  underlineThickness?: BoxUnderlineThickness | undefined;
  hoverUnderlineThickness?: BoxUnderlineThickness | undefined;
  opacity?: BoxOpacityStep | undefined;
  shadow?: boolean | BoxShadow | undefined;
  shadowColor?: BoxShadowColor | undefined;
  shadowOpacity?: BoxOpacity | undefined;
  pointerEvents?: BoxPointerEvents | undefined;
  userSelect?: BoxUserSelect | undefined;
  transition?: 'none' | undefined;
  animation?: BoxAnimation | undefined;
};

const breakpoints: readonly BoxBreakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
const boxWidths: readonly BoxWidth[] = [
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
const boxHeights: readonly BoxHeight[] = [25, 50, 75, 100, 'auto', 'min', 'max', 'fit'];

function isBoxWidth(value: unknown): value is BoxWidth {
  return boxWidths.some((boxWidth) => boxWidth === value);
}

function isBoxHeight(value: unknown): value is BoxHeight {
  return boxHeights.some((boxHeight) => boxHeight === value);
}

function getResponsiveClasses<T extends string | number | boolean>(
  utility: string,
  value: BoxResponsive<T> | undefined,
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

function getResponsiveBooleanClasses(utility: string, value: BoxResponsive<boolean> | undefined) {
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

function formatSpacing(value: BoxNegativeMargin | BoxSpacing) {
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

function getRadiusClass(utility: string, value: boolean | BoxRadius | undefined) {
  if (value === undefined || value === false) {
    return;
  }
  return value === true ? utility : `${utility}-${value}`;
}

export type BoxProps<C extends ElementType = 'div'> = BoxOwnProps<C> & {
  component?: C;
  className?: string;
} & Omit<ComponentPropsWithRef<C>, keyof BoxOwnProps<C> | 'className' | 'component'>;

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
  zIndex,
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
  margin,
  marginX,
  marginY,
  marginTop,
  marginEnd,
  marginBottom,
  marginStart,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingEnd,
  paddingBottom,
  paddingStart,
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
    zIndex !== undefined && `z-${zIndex === -1 ? 'n1' : zIndex}`,
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
    getResponsiveClasses('m', margin, formatSpacing),
    getResponsiveClasses('mx', marginX, formatSpacing),
    getResponsiveClasses('my', marginY, formatSpacing),
    getResponsiveClasses('mt', marginTop, formatSpacing),
    getResponsiveClasses('me', marginEnd, formatSpacing),
    getResponsiveClasses('mb', marginBottom, formatSpacing),
    getResponsiveClasses('ms', marginStart, formatSpacing),
    getResponsiveClasses('p', padding),
    getResponsiveClasses('px', paddingX),
    getResponsiveClasses('py', paddingY),
    getResponsiveClasses('pt', paddingTop),
    getResponsiveClasses('pe', paddingEnd),
    getResponsiveClasses('pb', paddingBottom),
    getResponsiveClasses('ps', paddingStart),
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

  const componentProps = {
    ...props,
    ...(width === undefined || isBoxWidth(width) ? {} : { width }),
    ...(height === undefined || isBoxHeight(height) ? {} : { height }),
    ...(classes ? { className: classes } : {}),
  };

  return <Component {...componentProps} />;
}
