export type Theme =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'inverse';

export type Fg = Theme | 'body' | '1' | '2' | '3' | '4' | 'bg' | 'white' | 'black' | 'reset';

export type Bg = Theme | 'body' | '1' | '2' | '3' | '4' | 'fg' | 'white' | 'black' | 'transparent';

export type Opacity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export type ColorScheme = 'light' | 'dark' | 'auto';

export type ThemeStyle = 'contrast' | 'subtle' | 'muted';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

export type AspectRatio = 'auto' | '1x1' | '4x3' | '16x9' | '21x9';

export type ContainerQuery = 'inline' | 'size';

export type Display =
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

export type Float = 'start' | 'end' | 'none';

export type ObjectFit = 'contain' | 'cover' | 'fill' | 'scale' | 'none';

export type Overflow = 'auto' | 'hidden' | 'visible' | 'scroll';

export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export type PositionOffset = 0 | 50 | 100;

export type Visibility = 'visible' | 'invisible';

export type ZIndex =
  | number
  | 'menu'
  | 'sticky'
  | 'fixed'
  | 'drawer'
  | 'dialog'
  | 'popover'
  | 'tooltip'
  | 'toast';

export type AlignContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';

export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type AlignSelf = 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top';

export type BorderColor =
  | Theme
  | 'bg'
  | 'body'
  | 'muted'
  | 'subtle'
  | 'emphasized'
  | 'white'
  | 'black';

export type BorderWidth = 'keyline' | 0 | 1 | 2 | 3 | 4 | 5;

export type BorderToggle = boolean | 0;

export type Radius = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'circle' | 'pill';

export type Divide = true | 0;

export type Flex = 'fill';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type FlexGrowShrink = 0 | 1;

export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type JustifyItems = 'start' | 'end' | 'center' | 'stretch';

export type JustifySelf = 'start' | 'end' | 'center';

export type GridColumns = 1 | 2 | 3 | 4 | 6 | 'subgrid';

export type GridColumn = 'fill';

export type GridAutoFlow = 'row' | 'column' | 'dense';

export type Order = 'first' | 0 | 1 | 2 | 3 | 4 | 5 | 'last';

export type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Margin = Spacing | 'auto';

export type NegativeMargin = Margin | -1 | -2;

export type Width =
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

export type Height = 25 | 50 | 75 | 100 | 'auto' | 'min' | 'max' | 'fit';

export type FontFamily = 'monospace' | 'body';

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

export type FontStyle = 'italic' | 'normal';

export type FontWeight = 'lighter' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'bolder';

export type LineHeight = 1 | 'sm' | 'md' | 'lg';

export type TextAlign = 'start' | 'end' | 'center';

export type TextDecoration = 'none' | 'underline' | 'line-through';

export type TextTransform = 'lowercase' | 'uppercase' | 'capitalize';

export type TextWrap = 'wrap' | 'nowrap' | 'balance' | 'pretty';

export type UnderlineColor = Theme;

export type UnderlineOffset = 1 | 2 | 3;

export type UnderlineThickness = 1 | 2 | 3 | 4 | 5;

export type OpacityStep = 0 | 25 | 50 | 75 | 100;

export type Shadow = 'xs' | 'sm' | 'lg' | 'xl' | 'none';

export type ShadowColor = Theme | 'current' | 'black' | 'white';

export type PointerEvents = 'none' | 'auto';

export type UserSelect = 'all' | 'auto' | 'text' | 'none';

export type Animation = 'none' | 'shake' | 'pop';

/** Server-side validation state applied as `.is-valid` or `.is-invalid`. */
export type ValidationState = 'valid' | 'invalid';
