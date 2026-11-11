import { useState } from 'react';
import type { StepperValue } from 'react-bootstrap-pro';
import { Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperControlledDemo() {
  const [value, setValue] = useState<StepperValue>('confirm');

  return (
    <Stepper value={value} onChange={(_, next) => setValue(next)}>
      <StepperItem value='create'>Create account</StepperItem>
      <StepperItem value='confirm'>Confirm email</StepperItem>
      <StepperItem value='update'>Update profile</StepperItem>
      <StepperItem value='finish'>Finish</StepperItem>
    </Stepper>
  );
}
