import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { InputColorSizesDemo } from '../docs/components/input/demos/color-sizes';
import { InputDatalistCaretDemo } from '../docs/components/input/demos/datalist-caret';
import { InputFieldDemo } from '../docs/components/input/demos/field';
import { InputFileDemo } from '../docs/components/input/demos/file';
import { InputGhostDemo } from '../docs/components/input/demos/ghost';
import { InputHelpInlineDemo } from '../docs/components/input/demos/help-inline';
import { InputPlaintextDemo } from '../docs/components/input/demos/plaintext';
import { InputPlaintextInlineDemo } from '../docs/components/input/demos/plaintext-inline';
import { InputSizesDemo } from '../docs/components/input/demos/sizes';

test('Input documentation demos preserve native behavior and Bootstrap classes', async () => {
  const screen = await render(
    <>
      <InputFieldDemo />
      <InputSizesDemo />
      <InputPlaintextDemo />
      <InputPlaintextInlineDemo />
      <InputHelpInlineDemo />
      <InputColorSizesDemo />
      <InputDatalistCaretDemo />
      <InputFileDemo />
      <InputGhostDemo />
    </>,
  );
  expect(screen.getByLabelText('Email address')).toHaveAttribute(
    'aria-describedby',
    'input-field-help',
  );
  expect(screen.getByLabelText('Small input')).toHaveClass('form-control-sm');
  expect(screen.getByLabelText('Large input')).toHaveClass('form-control-lg');
  const plaintextEmail = screen.container.querySelector('#input-plaintext-email');
  expect(plaintextEmail).toHaveClass('form-control-plaintext');
  expect(plaintextEmail).toHaveAttribute('readonly');
  const plaintextLabel = screen.container.querySelector("label[for='input-plaintext-email']");
  const passwordLabel = screen.container.querySelector("label[for='input-plaintext-password']");
  const inlineLabel = screen.container.querySelector("label[for='input-password-inline']");
  expect(plaintextLabel).toHaveClass('form-label', 'col-form-label', 'sm:col-2');
  expect(passwordLabel).toHaveClass('form-label', 'col-form-label', 'sm:col-2');
  expect(inlineLabel).toHaveClass('form-label', 'col-form-label');
  const hiddenEmailLabel = screen.container.querySelector(
    "label[for='input-plaintext-inline-email']",
  );
  const hiddenPasswordLabel = screen.container.querySelector(
    "label[for='input-plaintext-inline-password']",
  );
  expect(hiddenEmailLabel).toHaveClass('visually-hidden');
  expect(hiddenPasswordLabel).toHaveClass('visually-hidden');
  expect(screen.container.querySelector('#input-plaintext-inline-email')).toHaveAccessibleName(
    'Email',
  );
  expect(screen.container.querySelector('#input-plaintext-inline-password')).toHaveAccessibleName(
    'Password',
  );
  expect(screen.getByLabelText('Large color picker')).toHaveClass(
    'form-control-color',
    'form-control-lg',
  );
  expect(screen.getByLabelText('Datalist example with caret')).toHaveClass('form-control-caret');
  const caretInput = screen.getByLabelText('Datalist example with caret').element();
  expect(caretInput).toHaveAttribute('list', 'input-datalist-caret-options');
  expect(getComputedStyle(caretInput).backgroundImage).not.toBe('none');
  expect(screen.getByLabelText('Multiple files input')).toHaveAttribute('multiple');
  expect(screen.getByLabelText('Disabled file input')).toHaveAttribute('disabled');
  expect(screen.getByLabelText('Search')).toHaveClass('form-ghost');
});
