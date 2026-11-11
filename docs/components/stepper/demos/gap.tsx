import type { CSSProperties } from 'react';
import { Stepper, StepperItem } from 'react-bootstrap-pro';

const customGap = { '--bs-stepper-gap': '3rem' } as CSSProperties;

export function StepperGapDemo() {
  return (
    <Stepper style={customGap}>
      <StepperItem active aria-current='false'>
        Create account
      </StepperItem>
      <StepperItem active>Confirm email</StepperItem>
      <StepperItem>Update profile</StepperItem>
      <StepperItem>Finish</StepperItem>
    </Stepper>
  );
}
