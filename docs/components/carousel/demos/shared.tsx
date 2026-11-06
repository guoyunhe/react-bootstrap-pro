import './shared.css';
import clsx from 'clsx';
import { Box, type BoxProps } from 'react-bootstrap-pro';

export type CarouselSlidePlaceholderProps = BoxProps;

export function CarouselSlidePlaceholder({
  children,
  className,
  role = 'img',
  'aria-label': ariaLabel,
  d = 'flex',
  alignItems = 'center',
  justifyContent = 'center',
  ...props
}: CarouselSlidePlaceholderProps) {
  const accessibleLabel =
    ariaLabel ??
    (typeof children === 'string' || typeof children === 'number'
      ? `Placeholder: ${children}`
      : undefined);

  return (
    <Box
      {...props}
      role={role}
      aria-label={accessibleLabel}
      className={clsx('carousel-slide-placeholder', className)}
      d={d}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Box>
  );
}
