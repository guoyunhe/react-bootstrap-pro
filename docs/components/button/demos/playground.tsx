import clsx from 'clsx';
import { useState } from 'react';
import { BiArrowRight, BiPlus } from 'react-bootstrap-icons-pro';
import { Box, Button, type ButtonTheme, type ButtonVariant } from 'react-bootstrap-pro';

import {
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
    <Box display='flex' flexDirection='column' gap={3}>
      <Box display='flex' flexWrap='wrap' alignItems='end' gap={3}>
        <Box component='label' display='flex' flexDirection='column' gap={1}>
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
        </Box>
        <Box component='label' display='flex' flexDirection='column' gap={1}>
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
        </Box>
        <Box component='label' display='flex' flexDirection='column' gap={1}>
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
        </Box>
        <Box component='label' display='flex' flexDirection='column' gap={1}>
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
        </Box>
        <Box component='label' display='flex' flexDirection='column' gap={1}>
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
        </Box>
        <Box component='label' display='flex' alignItems='center' gap={2}>
          <input
            type='checkbox'
            checked={styled}
            onChange={(event) => setStyled(event.currentTarget.checked)}
          />
          Styled
        </Box>
      </Box>
      <Box display='flex' alignItems='center' gap={2}>
        <Button
          variant={variant}
          theme={theme}
          size={size === 'default' ? undefined : size}
          styled={styled}
          className={className}
          aria-label={buttonType === 'icon-only' ? 'Add item' : undefined}
        >
          {buttonType === 'left-icon' && <BiPlus size={16} aria-hidden='true' />}
          {buttonType === 'icon-only' ? (
            <BiPlus size={16} aria-hidden='true' />
          ) : (
            <>
              {buttonType === 'text' ? 'Button' : 'Add item'}
              {buttonType === 'right-icon' && <BiArrowRight size={16} aria-hidden='true' />}
            </>
          )}
        </Button>
      </Box>
    </Box>
  );
}
