import clsx from 'clsx';
import {
  Children,
  createContext,
  isValidElement,
  useContext,
  type CSSProperties,
  type ElementType,
  type KeyboardEvent,
  type MouseEvent,
  type MouseEventHandler,
  type ReactNode,
} from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type StepperValue = string | number;

type StepperStepState = 'completed' | 'current' | 'inactive';

type StepperContextValue = {
  getState: ((value: StepperValue) => StepperStepState | undefined) | undefined;
  onChange: ((event: MouseEvent<HTMLElement>, value: StepperValue) => void) | undefined;
  value: StepperValue | undefined;
};

const StepperContext = createContext<StepperContextValue | undefined>(undefined);

type StepperOwnProps = {
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
  onChange?: ((event: MouseEvent<HTMLElement>, value: StepperValue) => void) | undefined;
  overflow?: boolean | undefined;
  value?: StepperValue | undefined;
};

export type StepperProps<C extends ElementType = 'ol'> = Omit<BoxProps<C>, keyof StepperOwnProps> &
  StepperOwnProps;

type StepperItemOwnProps = {
  active?: boolean | undefined;
  value?: StepperValue | undefined;
};

function itemValues(children: ReactNode): StepperValue[] {
  const values: StepperValue[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement<StepperItemOwnProps>(child) || child.type !== StepperItem) return;

    const value = child.props.value;
    if (value !== undefined) values.push(value);
  });

  return values;
}

export function Stepper<C extends ElementType = 'ol'>({
  component,
  className,
  children,
  horizontal,
  onChange,
  overflow,
  value,
  ...props
}: StepperProps<C>) {
  // Completed steps stay active, so the current value activates its step and every step before it.
  let getState: StepperContextValue['getState'];
  if (value !== undefined) {
    const values = itemValues(children);
    const currentIndex = values.indexOf(value);

    getState = (itemValue) => {
      if (itemValue === value) return 'current';

      const index = values.indexOf(itemValue);
      if (index === -1) return undefined;
      return index < currentIndex ? 'completed' : 'inactive';
    };
  }

  const stepper = (
    <StepperContext.Provider value={{ getState, onChange, value }}>
      <Box<C>
        {...(props as BoxProps<C>)}
        component={component ?? ('ol' as C)}
        classNameBefore={clsx(
          'stepper',
          horizontal &&
            (horizontal === true ? 'stepper-horizontal' : `${horizontal}:stepper-horizontal`),
          props.classNameBefore,
        )}
        className={className}
      >
        {children}
      </Box>
    </StepperContext.Provider>
  );

  // Bootstrap applies `.stepper-overflow` to a scroll container around the list.
  return overflow ? <div className='stepper-overflow'>{stepper}</div> : stepper;
}

export type StepperItemProps<C extends ElementType = 'li'> = Omit<
  BoxProps<C>,
  keyof StepperItemOwnProps
> &
  StepperItemOwnProps;

export function StepperItem<C extends ElementType = 'li'>({
  component,
  className,
  active,
  value,
  ...props
}: StepperItemProps<C>) {
  const stepper = useContext(StepperContext);
  const controlled = stepper?.value !== undefined;
  const state = controlled && value !== undefined ? stepper?.getState?.(value) : undefined;
  const isActive = state === undefined ? active : state !== 'inactive';
  const interactive = value !== undefined && stepper?.onChange !== undefined;
  const onClick = (props as { onClick?: MouseEventHandler<HTMLElement> }).onClick;
  const onKeyDown = (props as { onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void })
    .onKeyDown;
  const style = (props as { style?: CSSProperties }).style;
  const role = (props as { role?: string }).role;
  const tabIndex = (props as { tabIndex?: number }).tabIndex;

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('li' as C)}
      classNameBefore={clsx('stepper-item', isActive && 'active', props.classNameBefore)}
      className={className}
      aria-current={
        props['aria-current'] ??
        (state === 'current' || (!controlled && isActive) ? 'step' : undefined)
      }
      {...(interactive && {
        role: role ?? 'button',
        tabIndex: tabIndex ?? 0,
        style: { cursor: 'pointer', ...style },
        onClick: (event: MouseEvent<HTMLElement>) => {
          onClick?.(event);

          if (!event.defaultPrevented && stepper?.onChange && value !== undefined) {
            stepper.onChange(event, value);
          }
        },
        onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
          onKeyDown?.(event);

          if (!event.defaultPrevented && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            event.currentTarget.click();
          }
        },
      })}
    />
  );
}
