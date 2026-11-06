import './shared.css';
import clsx from 'clsx';
import { Box, type BoxProps } from 'react-bootstrap-pro';

export type CarouselSlidePlaceholderProps = Omit<BoxProps, 'children'> & {
  label: string;
};

export function CarouselSlidePlaceholder({
  label,
  className,
  role = 'img',
  'aria-label': ariaLabel = `Placeholder: ${label}`,
  d = 'flex',
  alignItems = 'center',
  justifyContent = 'center',
  ...props
}: CarouselSlidePlaceholderProps) {
  return (
    <Box
      {...props}
      role={role}
      aria-label={ariaLabel}
      className={clsx('carousel-slide-placeholder', className)}
      d={d}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {label}
    </Box>
  );
}
