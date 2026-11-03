import type { ChangeEventHandler, CSSProperties, ElementType, FormEventHandler } from 'react';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import type { BoxProps } from './box';
import { ClassedBox } from './shared';

export type RangeTick = {
  value: number;
  label?: string | undefined;
};

export type RangeFormatter = (value: number) => string;

type RangeOwnProps = {
  min?: number | undefined;
  max?: number | undefined;
  step?: number | 'any' | undefined;
  value?: number | undefined;
  defaultValue?: number | undefined;
  disabled?: boolean | undefined;
  id?: string | undefined;
  name?: string | undefined;
  list?: string | undefined;
  required?: boolean | undefined;
  bubble?: boolean | undefined;
  format?: RangeFormatter | undefined;
  ticks?: readonly RangeTick[] | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onInput?: FormEventHandler<HTMLInputElement> | undefined;
  'aria-label'?: string | undefined;
  'aria-describedby'?: string | undefined;
  'aria-labelledby'?: string | undefined;
};

export type RangeProps<C extends ElementType = 'div'> = RangeOwnProps &
  Omit<BoxProps<C>, keyof RangeOwnProps | 'children'>;

export function Range<C extends ElementType = 'div'>({
  component,
  className,
  style,
  min,
  max,
  step,
  value,
  defaultValue,
  disabled,
  id,
  name,
  list,
  required,
  bubble = false,
  format,
  ticks,
  onChange,
  onInput,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: RangeProps<C>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fill, setFill] = useState(0);
  const [currentValue, setCurrentValue] = useState(defaultValue ?? value ?? 0);

  const sync = useCallback(() => {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    const minValue = input.min === '' ? 0 : Number(input.min);
    const maxValue = input.max === '' ? 100 : Number(input.max);
    const nextValue = Number(input.value);
    const span = maxValue - minValue;
    const nextFill = span > 0 ? (nextValue - minValue) / span : 0;

    setFill((previous) => (previous === nextFill ? previous : nextFill));
    setCurrentValue((previous) => (previous === nextValue ? previous : nextValue));
  }, []);

  useLayoutEffect(sync);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    input.addEventListener('input', sync);
    input.addEventListener('change', sync);
    return () => {
      input.removeEventListener('input', sync);
      input.removeEventListener('change', sync);
    };
  }, [sync]);

  const tickPoints = useMemo(() => {
    if (!ticks || ticks.length === 0) {
      return [];
    }

    const minValue = min ?? 0;
    const maxValue = max ?? 100;
    const span = maxValue - minValue || 1;

    return ticks
      .map((tick) => ({
        ...tick,
        ratio: Math.min(Math.max((tick.value - minValue) / span, 0), 1),
      }))
      .toSorted((a, b) => a.ratio - b.ratio);
  }, [max, min, ticks]);

  const tickStops = [0, ...tickPoints.map((tick) => tick.ratio), 1];
  const tickColumns = tickStops
    .slice(1)
    .map((stop, index) => `${stop - (tickStops[index] ?? 0)}fr`)
    .join(' ');

  return (
    <ClassedBox<C>
      {...props}
      baseClass='form-range'
      component={component}
      defaultComponent={'div' as C}
      className={className}
      style={{ ...style, '--bs-range-fill': fill } as CSSProperties}
    >
      <input
        ref={inputRef}
        type='range'
        className='form-range-input'
        id={id}
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        list={list}
        onChange={onChange}
        onInput={onInput}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
      />
      {bubble && (
        <output className='form-range-bubble tooltip bs-tooltip-top show' aria-hidden='true'>
          <div className='tooltip-arrow' />
          <div className='tooltip-inner'>
            {format ? format(currentValue) : String(currentValue)}
          </div>
        </output>
      )}
      {tickPoints.length > 0 && (
        <div
          className='form-range-ticks'
          aria-hidden='true'
          style={{ gridTemplateColumns: tickColumns }}
        >
          {tickPoints.map((tick, index) => (
            <span
              key={`${tick.value}-${index}`}
              className='form-range-tick'
              style={{ gridColumnStart: index + 2 }}
            >
              {tick.label && <span className='form-range-tick-label'>{tick.label}</span>}
            </span>
          ))}
        </div>
      )}
    </ClassedBox>
  );
}
