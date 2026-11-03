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
};

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
    className,
  );

  const componentProps = classes ? { ...props, className: classes } : props;

  return <Component {...componentProps} />;
}
