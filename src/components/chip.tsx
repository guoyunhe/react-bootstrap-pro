import clsx from 'clsx';
import type { ElementType, MouseEvent, ReactNode } from 'react';
import { BiX } from 'react-bootstrap-icons-pro';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type ChipImage = {
  src: string;
  alt?: string | undefined;
};

export type ChipProps<C extends ElementType = 'span'> = ComponentProps<
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx(
        'chip',
        active && 'active',
        disabled && 'disabled',
        props.classNameBefore,
      )}
      className={className}
    >
      {image && (
        <Box
          component='img'
          classNameBefore='chip-img'
          src={image.src}
          alt={image.alt ?? ''}
          width={16}
          height={16}
        />
      )}
      {icon && (
        <Box component='span' classNameBefore='chip-icon' aria-hidden='true'>
          {icon}
        </Box>
      )}
      {children}
      {onDismiss && (
        <Box
          component='button'
          type='button'
          classNameBefore='chip-dismiss'
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
    </Box>
  );
}
