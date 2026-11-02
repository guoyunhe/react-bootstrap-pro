import clsx from 'clsx';
import { useState } from 'react';

import { Button, type ButtonTheme, type ButtonVariant } from '../../../../src';
import {
  AddIcon,
  ArrowRightIcon,
  contentOptions,
  isOption,
  roundingOptions,
  sizeOptions,
  themeOptions,
  variantOptions,
} from './shared';

export function ButtonPlaygroundDemo() {
  const [theme, setTheme] = useState<ButtonTheme>('primary');
  const [variant, setVariant] = useState<ButtonVariant>('solid');
  const [size, setSize] = useState<(typeof sizeOptions)[number]>('default');
  const [buttonType, setButtonType] = useState<(typeof contentOptions)[number]>('text');
  const [rounding, setRounding] = useState<(typeof roundingOptions)[number]>('default');
  const [styled, setStyled] = useState(false);

  const className = clsx(
    rounding === 'pill' && 'rounded-pill',
    rounding === 'square' && 'rounded-0',
  );

  return (
    <div className='d-flex flex-column gap-3'>
      <div className='d-flex flex-wrap align-items-end gap-3'>
        <label className='d-flex flex-column gap-1'>
          Theme
          <select
            className='form-select'
            value={theme}
            onChange={(event) => {
              const value = event.currentTarget.value;
              if (isOption(themeOptions, value)) setTheme(value);
            }}
          >
            {themeOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className='d-flex flex-column gap-1'>
          Style
          <select
            className='form-select'
            value={variant}
            onChange={(event) => {
              const value = event.currentTarget.value;
              if (isOption(variantOptions, value)) setVariant(value);
            }}
          >
            {variantOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className='d-flex flex-column gap-1'>
          Size
          <select
            className='form-select'
            value={size}
            onChange={(event) => {
              const value = event.currentTarget.value;
              if (isOption(sizeOptions, value)) setSize(value);
            }}
          >
            {sizeOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className='d-flex flex-column gap-1'>
          Content
          <select
            className='form-select'
            value={buttonType}
            onChange={(event) => {
              const value = event.currentTarget.value;
              if (isOption(contentOptions, value)) setButtonType(value);
            }}
          >
            {contentOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className='d-flex flex-column gap-1'>
          Shape
          <select
            className='form-select'
            value={rounding}
            onChange={(event) => {
              const value = event.currentTarget.value;
              if (isOption(roundingOptions, value)) setRounding(value);
            }}
          >
            {roundingOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className='d-flex align-items-center gap-2'>
          <input
            type='checkbox'
            checked={styled}
            onChange={(event) => setStyled(event.currentTarget.checked)}
          />
          Styled
        </label>
      </div>
      <div className='d-flex align-items-center gap-2'>
        <Button
          variant={variant}
          theme={theme}
          size={size === 'default' ? undefined : size}
          styled={styled}
          className={className}
          aria-label={buttonType === 'icon-only' ? 'Add item' : undefined}
        >
          {buttonType === 'left-icon' && <AddIcon />}
          {buttonType === 'icon-only' ? (
            <AddIcon />
          ) : (
            <>
              {buttonType === 'text' ? 'Button' : 'Add item'}
              {buttonType === 'right-icon' && <ArrowRightIcon />}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
