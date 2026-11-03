import clsx from 'clsx';
import type { ElementType, MouseEvent, ReactNode } from 'react';
import { BiX } from 'react-bootstrap-icons-pro';

import { Box } from './box';
import { ClassedBox, type BoxComponentProps } from './shared';

export type ChipImage = {
  src: string;
  alt?: string | undefined;
};

export type ChipProps<C extends ElementType = 'span'> = BoxComponentProps<
  C,
  {
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    icon?: ReactNode;
    image?: ChipImage | undefined;
    onDismiss?: (() => void) | undefined;
    dismissLabel?: string | undefined;
  }
>;

export function Chip<C extends ElementType = 'span'>({
  component,
  className,
  active,
  disabled,
  icon,
  image,
  onDismiss,
  dismissLabel = 'Remove',
  children,
  ...props
}: ChipProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('chip', active && 'active', disabled && 'disabled')}
      component={component}
      defaultComponent={'span' as C}
      className={className}
    >
      {image && (
        <Box
          component='img'
          className='chip-img'
          src={image.src}
          alt={image.alt ?? ''}
          width={16}
          height={16}
        />
      )}
      {icon && (
        <Box component='span' className='chip-icon' aria-hidden='true'>
          {icon}
        </Box>
      )}
      {children}
      {onDismiss && (
        <Box
          component='button'
          type='button'
          className='chip-dismiss'
          aria-label={dismissLabel}
          disabled={disabled}
          tabIndex={-1}
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            onDismiss();
          }}
        >
          <BiX size={16} aria-hidden='true' />
        </Box>
      )}
    </ClassedBox>
  );
}
